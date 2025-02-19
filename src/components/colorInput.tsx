"use clint"
import { cn } from "@/lib/utils"
import { ChangeEventHandler } from "react"

interface CoolColorPickerProps {
  title: string
  update: ChangeEventHandler<HTMLInputElement>
  color: string
  className?: string
}

const ColorInput = ({
  title,
  color,
  update,
  className,
}: CoolColorPickerProps) => (
  <div
    className={cn(
      "grid grid-cols-2 gap-2 items-center p-2 max-h-20 rounded-md border-border border shadow-border shadow-md",
      className,
    )}
  >
    <div className="relative flex h-full w-full">
      <div
        className="transition-colors border border-border duration-500 ease-in-out rounded-md h-full w-full relative z-10 pointer-events-none"
        style={{ backgroundColor: color }}
      />
      <input
        type="color"
        onChange={update}
        className="aspect-square absolute  top-0 left-0 opacity-0 rounded-sm h-full w-full z-0"
      />
    </div>
    <div className="">
      <p className="text-lg capitalize">{title}</p>
      <p className="text-secondary-foreground">{color}</p>
    </div>
  </div>
)

export default ColorInput
