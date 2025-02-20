import { Theme } from "@/hooks/useThemePicker"
import { ColorConverter } from "@/lib/color"
import ColorInput from "./colorInput"
import { Input } from "./ui/input"
import { useCallback, useMemo, useState } from "react"

interface Props {
   theme: Theme
   update: (key: string, value: string) => void
}

// export default function ColorInputs({ theme, update }: Props) {
//    return (
//       <div className="grid grid-cols-2 py-2">
//          {Object.entries(theme).map(([key, value], index) => {
//             return (
//                <ColorInput
//                   key={index}
//                   title={key}
//                   update={(e) => {
//                      update(key, e.target.value)
//                   }}
//                   color={ColorConverter.hslToHex(value)}
//                />
//             )
//          })}
//       </div>
//    )
// }

export default function ColorInputs({ theme, update }: Props) {
  const [searchTerm, setSearchTerm] = useState("")

  // Use useCallback to prevent re-creation of the handler on each render.
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    },
    []
  )

  // Memoize filtered entries to avoid re-filtering on unrelated renders.
  const filteredEntries = useMemo(() => {
    return Object.entries(theme).filter(([key]) =>
      key.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [theme, searchTerm])

  return (
    <div className="space-y-4">
      {/* Search Bar using shadcn Input */}
      <Input
        placeholder="Search inputs..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full"
      />

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

