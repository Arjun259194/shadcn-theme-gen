"use client"

import useThemePicker, { Theme } from "@/hooks/useThemePicker"
import ColorInputs from "./colorInputs"

export default function ThemePicker() {
   const { mode, dark, light, update } = useThemePicker()
   return (
      <div className="grid grid-cols-3">
         {mode === "light" ? (
            <ColorInputs update={update} theme={light} />
         ) : (
            <ColorInputs update={update} theme={dark} />
         )}
         <div className=" p-2">
            <CSSPreview light={light} dark={dark} />
         </div>
      </div>
   )
}

function CSSPreview({ light, dark }: { light: Theme; dark: Theme }) {
   function CSSVarCode(theme: Theme) {
      return Object.entries(theme)
         .map(([key, value]) => `\t--${key}: ${value};`)
         .join("\n")
   }
   return (
      <pre className="bg-background text-foreground rounded-lg border-border border-2 p-2">
         {`:root {\n${CSSVarCode(light)}\n}\n`}
         {`.dark {\n${CSSVarCode(dark)}\n}\n`}
      </pre>
   )
}
