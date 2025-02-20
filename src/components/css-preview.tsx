import { Theme } from "@/hooks/useThemePicker"
import { camelToKebab } from "@/lib/utils";

export function CSSPreview({ light, dark }: { light: Theme; dark: Theme }) {
   function CSSVarCode(theme: Theme) {
      return Object.entries(theme)
         .map(([key, value]) => `\t--${camelToKebab(key)}: ${value};`)
         .join("\n")
   }
   return (
      <pre className="bg-background text-foreground rounded-lg border-border border-2 p-2">
         {`:root {\n${CSSVarCode(light)}\n}\n`}
         {`.dark {\n${CSSVarCode(dark)}\n}\n`}
      </pre>
   )
}
