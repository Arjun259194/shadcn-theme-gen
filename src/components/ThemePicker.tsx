"use client"

import useThemePicker from "@/hooks/useThemePicker"
import ColorInputs from "./colorInputs"
import { printf, themeToCss } from "@/lib/utils"

export default function ThemePicker() {
  const { mode, dark, light, update } = useThemePicker()
  return (
    <div className="flex">
      {mode === "light" ? (
        <ColorInputs update={update} theme={light} />
      ) : (
        <ColorInputs update={update} theme={dark} />
      )}
      <div className="w-1/2 p-2">
        <pre className="bg-background text-foreground rounded-lg border-border border-2 p-2">
          {printf(
            ":root {}\n.dark {}",
            JSON.stringify(themeToCss(light), null, "\t"),
            JSON.stringify(themeToCss(dark), null, "\t"),
          )}
        </pre>
      </div>
    </div>
  )
}
