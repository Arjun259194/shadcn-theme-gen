import { RGB } from "@/lib/utils";
import { useState } from "react";

// Default theme values
const defaultTheme = {
   light: {
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
      "chart-1": "2-20 7-0% 5-0%",
      "chart-2": "1-60 6-0% 4-5%",
      "chart-3": "3-0 8-0% 5-5%",
      "chart-4": "2-80 6-5% 6-0%",
      "chart-5": "3-40 7-5% 5-5%",
   },
   dark: {
      background: "0 0% 3.9%",
      foreground: "0 0% 98%",
      card: "0 0% 3.9%",
      "card-foreground": "0 0% 98%",
      popover: "0 0% 3.9%",
      "popover-foreground": "0 0% 98%",
      primary: "0 0% 98%",
      "primary-foreground ": "0 0% 9%",
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
      "chart-5": "340 75 % 55 % ",
   },
} as const;

export type ThemeKey = keyof (typeof defaultTheme)["light"];

type Theme = Map<ThemeKey, RGB>;

export type Themes = {
   light: Theme;
   dark: Theme;
};

type ReturnType = {
   theme: Themes;
   setTheme: (key: ThemeKey, value: string) => void;
};

const useThemePicker = (): ReturnType => {
   const [theme, setTheme] = useState<Themes>(defaultTheme as unknown as Themes);

   const updateTheme = (key: ThemeKey, value: string) => {
      setTheme((prevTheme) => ({
         ...prevTheme,
         [key]: value,
      }));
   };

   return {
      theme,
      setTheme: updateTheme,
   };
};

export default useThemePicker;
