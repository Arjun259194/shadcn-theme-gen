import { Theme } from "@/hooks/useThemePicker"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const camelToKebab = (str: string): string =>
   str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export function themeToCss(obj: Theme) {
   return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [`--${key}`, value]),
   )
}

export function printf(
   str: string,
   ...args: (object | string | number | boolean | any[])[]
) {
   return str
      .split("{}")
      .map((s, index, arr) => {
         if (index === arr.length - 1) return ""
         const data = args[index]
         if (!data) return "{}"
         if (typeof data === "object")
            return `${s}${JSON.stringify(data, null)}`
         return `${s}${data}`
      })
      .filter(Boolean)
      .join("")
}
