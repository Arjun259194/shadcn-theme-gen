export class ColorConverter {
   static hexToHSL(hex: string): string {
      hex = hex.replace(/^#/, "")
      if (![3, 6].includes(hex.length)) return `0 0% 100%`

      if (hex.length === 3) {
         hex = hex
            .split("")
            .map((c) => c + c)
            .join("")
      }

      const r = parseInt(hex.substring(0, 2), 16) / 255
      const g = parseInt(hex.substring(2, 4), 16) / 255
      const b = parseInt(hex.substring(4, 6), 16) / 255

      const max = Math.max(r, g, b),
         min = Math.min(r, g, b)
      let h = 0,
         s = 0,
         l = (max + min) / 2

      if (max !== min) {
         const d = max - min
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

         switch (max) {
            case r:
               h = (g - b) / d + (g < b ? 6 : 0)
               break
            case g:
               h = (b - r) / d + 2
               break
            case b:
               h = (r - g) / d + 4
               break
         }
         h *= 60
      }

      const hsl = {
         h: Math.round(h),
         s: Math.round(s * 100),
         l: Math.round(l * 100),
      }

      return `${hsl.h},${hsl.s}%,${hsl.l}%`
   }

   static hslToHex(hsl: string): string {
      // Parse HSL string (e.g., "0 0% 0.4%")
      const [h, s, l] = hsl.match(/\d+(?:\.\d+)?/g)?.map(Number) ?? [0, 0, 0]

      const sNorm = s / 100
      const lNorm = l / 100

      const hueToRGB = (p: number, q: number, t: number) => {
         if (t < 0) t += 1
         if (t > 1) t -= 1
         if (t < 1 / 6) return p + (q - p) * 6 * t
         if (t < 1 / 2) return q
         if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
         return p
      }

      let r, g, b
      if (sNorm === 0) {
         r = g = b = lNorm
      } else {
         const q =
            lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm
         const p = 2 * lNorm - q
         r = hueToRGB(p, q, h / 360 + 1 / 3)
         g = hueToRGB(p, q, h / 360)
         b = hueToRGB(p, q, h / 360 - 1 / 3)
      }

      const toHex = (x: number) => {
         const hex = Math.round(x * 255).toString(16)
         return hex.length === 1 ? "0" + hex : hex
      }

      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
   }
}
