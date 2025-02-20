"use client"

import { ColorConverter } from "@/lib/color"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export interface Theme {
   background: string
   foreground: string
   card: string
   "card-foreground": string
   popover: string
   "popover-foreground": string
   primary: string
   "primary-foreground": string
   secondary: string
   "secondary-foreground": string
   muted: string
   "muted-foreground": string
   accent: string
   "accent-foreground": string
   destructive: string
   "destructive-foreground": string
   border: string
   input: string
   ring: string
   "chart-1": string
   "chart-2": string
   "chart-3": string
   "chart-4": string
   "chart-5": string
}

const DEFAULTLIGHT: Theme = {
   background: "0 0% 100%",
   foreground: "0 0% 3.9%",
   card: "0 0% 100%",
   "card-foreground": "0 0% 3.9%",
   popover: "0 0% 100%",
   "popover-foreground": "0 0% 3.9%",
   primary: "0 0% 9%",
   "primary-foreground": "0 0% 98%",
   secondary: "0 0% 96.1%",
   "secondary-foreground": "0 0% 9%",
   muted: "0 0% 96.1%",
   "muted-foreground": "0 0% 45.1%",
   accent: "0 0% 96.1%",
   "accent-foreground": "0 0% 9%",
   destructive: "0 84.2% 60.2%",
   "destructive-foreground": "0 0% 98%",
   border: "0 0% 89.8%",
   input: "0 0% 89.8%",
   ring: "0 0% 3.9%",
   "chart-1": "12 76% 61%",
   "chart-2": "173 58% 39%",
   "chart-3": "197 37% 24%",
   "chart-4": "43 74% 66%",
   "chart-5": "27 87% 67%",
}

const DEFAULTDARK: Theme = {
   background: "0 0% 3.9%",
   foreground: "0 0% 98%",
   card: "0 0% 3.9%",
   "card-foreground": "0 0% 98%",
   popover: "0 0% 3.9%",
   "popover-foreground": "0 0% 98%",
   primary: "0 0% 98%",
   "primary-foreground": "0 0% 9%",
   secondary: "0 0% 14.9%",
   "secondary-foreground": "0 0% 98%",
   muted: "0 0% 14.9%",
   "muted-foreground": "0 0% 63.9%",
   accent: "0 0% 14.9%",
   "accent-foreground": "0 0% 98%",
   destructive: "0 62.8% 30.6%",
   "destructive-foreground": "0 0% 98%",
   border: "0 0% 14.9%",
   input: "0 0% 14.9%",
   ring: "0 0% 83.1%",
   "chart-1": "220 70% 50%",
   "chart-2": "160 60% 45%",
   "chart-3": "30 80% 55%",
   "chart-4": "280 65% 60%",
   "chart-5": "340 75% 55%",
}

type ReturnType = {
   dark: Theme
   light: Theme
   update: (key: string, value: string) => void
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

   return { dark, light, update, mode }
}
