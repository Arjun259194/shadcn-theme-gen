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
         "grid grid-cols-2 gap-2 items-center max-h-20 rounded-full overflow-hidden border-border border ",
         className,
      )}
   >
      <div className="relative flex h-full w-full">
         <div
            className="transition-colors border border-border duration-500 ease-in-out h-full w-full relative z-10 pointer-events-none"
            style={{ backgroundColor: color }}
         />
         <input
            type="color"
            onChange={update}
            className="aspect-square absolute top-0 left-0 opacity-0 rounded-sm h-full w-full z-0"
         />
      </div>
      <div className="p-2">
         <p className="text-lg capitalize">{title}</p>
      </div>
   </div>
)

export default ColorInput
