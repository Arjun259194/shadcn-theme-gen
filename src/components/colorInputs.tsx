import { Theme } from "@/hooks/useThemePicker"
import { ColorConverter } from "@/lib/color"
import ColorInput from "./colorInput"

export default function ColorInputs({
  theme,
  update,
}: {
  theme: Theme
  update: (key: string, value: string) => void
}) {
  return (
    <div className="grid grid-cols-2 p-2 gap-4 w-1/2">
      {Object.entries(theme).map(([key, value], index) => {
        return (
          <ColorInput
            key={index}
            title={key}
            update={(e) => {
              update(key, e.target.value)
            }}
            color={ColorConverter.hslToHex(value)}
          />
        )
      })}
    </div>
  )
}
