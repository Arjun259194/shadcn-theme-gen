import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

type ColorValue = `${number}%`;

export type RGB = `${ColorValue}, ${ColorValue}, ${ColorValue}`;

export function hexToRgb(hex: string): RGB | null {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result
      ? `${parseInt(result[1], 16)}%, ${parseInt(result[2], 16)}%, ${parseInt(result[3], 16)}%`
      : null;
}
