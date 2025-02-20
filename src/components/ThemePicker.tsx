"use client"

import useThemePicker, { Theme } from "@/hooks/useThemePicker"
import ColorInputs from "./colorInputs"
import { CSSPreview } from "./css-preview"
import { Button } from "./ui/button"
import { Check, Eraser } from "lucide-react"

interface Props {
   createAction: (props: { dark: Theme; light: Theme }) => Promise<void>
}

export default function ThemePicker({ createAction }: Props) {
   const { mode, dark, light, update, reset } = useThemePicker()

   return (
      <>
         <section className="flex justify-between items-center my-3">
            <div>
               <h2 className="text-2xl font-semibold">
                  Theme name will go here
               </h2>
               <p className="max-w-[90ch] text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit beatae adipisci, culpa nulla Quidem, amet!
               </p>
            </div>
            <div className="flex space-x-4">
               <Button variant="outline">Preview</Button>
               {/*TODO: Create a preview popup*/}
               <Button size={"icon"} onClick={reset} variant={"secondary"}>
                  <Eraser />
               </Button>
               <Button
                  onClick={async () => {
                     await createAction({ dark, light })
                  }}
                  size={"icon"}
               >
                  <Check />
               </Button>
            </div>
         </section>
         <div className="grid grid-cols-2">
            {mode === "light" ? (
               <ColorInputs update={update} theme={light} />
            ) : (
               <ColorInputs update={update} theme={dark} />
            )}
            <div className="p-2">
               <CSSPreview light={light} dark={dark} />
            </div>
         </div>
      </>
   )
}
