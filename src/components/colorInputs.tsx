import { Theme } from "@/hooks/useThemePicker"
import { ColorConverter } from "@/lib/color"
import ColorInput from "./colorInput"
import { Input } from "./ui/input"
import { useCallback, useMemo, useState } from "react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { X } from "lucide-react"

interface Props {
   theme: Theme
   update: (key: string, value: string) => void
}

export default function ColorInputs({ theme, update }: Props) {
   const [searchTerm, setSearchTerm] = useState("")

   // Use useCallback to prevent re-creation of the handler on each render.
   const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
         setSearchTerm(e.target.value)
      },
      [],
   )

   // Memoize filtered entries to avoid re-filtering on unrelated renders.
   const filteredEntries = useMemo(() => {
      return Object.entries(theme).filter(([key]) =>
         key.toLowerCase().includes(searchTerm.toLowerCase()),
      )
   }, [theme, searchTerm])

   return (
      <div className="space-y-4">
         {/* Search Bar using shadcn Input */}
         <div className="flex border-border overflow-hidden border rounded-md">
            <Input
               placeholder="Search inputs..."
               value={searchTerm}
               onChange={handleSearchChange}
               className="focus-visible:ring-0 focus-within:ring-0 focus:ring-0 border-none"
            />
            <Separator orientation="vertical" />
            <Button
               onClick={() => setSearchTerm((_) => "")}
               className="rounded-none"
               variant="ghost"
               size="icon"
            >
               <X className="text-foreground" />
            </Button>
         </div>

         {/* Vertical list of filtered ColorInputs */}
         <div className="flex flex-col space-y-2">
            {filteredEntries.map(([key, value]) => (
               <ColorInput
                  key={key}
                  title={key}
                  update={(e) => update(key, e.target.value)}
                  color={ColorConverter.hslToHex(value)}
               />
            ))}
         </div>
      </div>
   )
}
