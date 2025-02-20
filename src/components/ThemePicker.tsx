"use client"

import useThemePicker, { Theme } from "@/hooks/useThemePicker"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import ColorInputs from "./colorInputs"
import { CSSPreview } from "./css-preview"
import { Button } from "./ui/button"
import { Check, Eraser } from "lucide-react"
import { PreviewStyled } from "@/style"
import { Input } from "./ui/input"

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
               <PreviewButton dark={dark} light={light} />
               <Button size={"icon"} onClick={reset} variant={"secondary"}>
                  <Eraser />
               </Button>
               <Button
                  onClick={async () => {
                     // await createAction({ dark, light })
                     alert(
                        "If you want this button to work un comment line 44 in ThemePicker.txs",
                     )
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

const PreviewButton = (props: React.ComponentProps<typeof PreviewStyled>) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline">Preview</Button>
         </DialogTrigger>
         <DialogContent className="h-5/6 min-w-full overflow-y-auto">
            <DialogHeader>
               <DialogTitle>Theme preview</DialogTitle>
               <DialogDescription>
                  Preview your created theme before uploading it.
               </DialogDescription>
            </DialogHeader>
            <PreviewStyled {...props}>
               <div className="p-2 space-y-3 bg-background text-foreground">
                  <h1 className="text-xl">Hello world</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Accusantium natus eum nobis maiores necessitatibus!
                     Deserunt quam voluptatibus laudantium magnam et molestias,
                     repudiandae repellat veniam itaque facilis in facere
                     recusandae quidem?
                  </p>
                  <span>This is the preview</span>
                  <div className="space-x-4">
                     <Button>Click me</Button>
                     <Button variant="outline">Click me</Button>
                     <Button variant="ghost">Click me</Button>
                     <Button variant="destructive">Click me</Button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                     <Input type="text" />
                     <Input type="date" />
                     <Input type="date" />
                  </div>
               </div>
            </PreviewStyled>
         </DialogContent>
      </Dialog>
   )
}
