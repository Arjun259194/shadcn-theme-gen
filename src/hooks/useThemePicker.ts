"use client"
import { colorschemeSelectSchema } from "@/db/schema"
import { ColorConverter } from "@/lib/color"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import z from "zod"

const theme = colorschemeSelectSchema.omit({ id: true })

export type Theme = z.infer<typeof theme>

const DEFAULTLIGHT: Theme = {
   background: "0 0% 100%",
   foreground: "0 0% 3.9%",
   card: "0 0% 100%",
   cardForeground: "0 0% 3.9%",
   popover: "0 0% 100%",
   popoverForeground: "0 0% 3.9%",
   primary: "0 0% 9%",
   primaryForeground: "0 0% 98%",
   secondary: "0 0% 96.1%",
   secondaryForeground: "0 0% 9%",
   muted: "0 0% 96.1%",
   mutedForeground: "0 0% 45.1%",
   accent: "0 0% 96.1%",
   accentForeground: "0 0% 9%",
   destructive: "0 84.2% 60.2%",
   destructiveForeground: "0 0% 98%",
   border: "0 0% 89.8%",
   input: "0 0% 89.8%",
   ring: "0 0% 3.9%",
   chart1: "12 76% 61%",
   chart2: "173 58% 39%",
   chart3: "197 37% 24%",
   chart4: "43 74% 66%",
   chart5: "27 87% 67%",
}

const DEFAULTDARK: Theme = {
   background: "0 0% 3.9%",
   foreground: "0 0% 98%",
   card: "0 0% 3.9%",
   cardForeground: "0 0% 98%",
   popover: "0 0% 3.9%",
   popoverForeground: "0 0% 98%",
   primary: "0 0% 98%",
   primaryForeground: "0 0% 9%",
   secondary: "0 0% 14.9%",
   secondaryForeground: "0 0% 98%",
   muted: "0 0% 14.9%",
   mutedForeground: "0 0% 63.9%",
   accent: "0 0% 14.9%",
   accentForeground: "0 0% 98%",
   destructive: "0 62.8% 30.6%",
   destructiveForeground: "0 0% 98%",
   border: "0 0% 14.9%",
   input: "0 0% 14.9%",
   ring: "0 0% 83.1%",
   chart1: "220 70% 50%",
   chart2: "160 60% 45%",
   chart3: "30 80% 55%",
   chart4: "280 65% 60%",
   chart5: "340 75% 55%",
}

type ReturnType = {
   dark: Theme
   light: Theme
   update: (key: string, value: string) => void
   reset: () => void
   mode?: string
}

export default function useThemePicker(): ReturnType {
   const { theme } = useTheme()
   const [dark, setDark] = useState(DEFAULTDARK)
   const [light, setLight] = useState(DEFAULTLIGHT)
   const [mode, setMode] = useState<string | undefined>(undefined)

   useEffect(() => {
      if (theme) {
         setMode(theme)
      }
   }, [theme])

   const update = (key: string, value: string): void => {
      if (!mode) return
      const setTheme = theme === "light" ? setLight : setDark
      setTheme((prev) => {
         return { ...prev, [key]: ColorConverter.hexToHSL(value) }
      })
   }

   const reset = () => {
      setDark(DEFAULTDARK)
      setLight(DEFAULTLIGHT)
   }

   return { dark, light, update, mode, reset }
}
