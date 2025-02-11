"use client";

import useThemePicker, { ThemeKey } from "@/hooks/useThemePicker";
import { ChangeEvent } from "react";
import { hexToRgb } from "@/lib/utils";
import ColorForm from "./ColorForm";

export default function ThemePicker() {
   const { theme, setTheme } = useThemePicker();

   const clrHandler = (key: ThemeKey, e: ChangeEvent<HTMLInputElement>) => {
      const rgb = hexToRgb(e.target.value);
      if (rgb) {
         setTheme(key, rgb);
      }
   };

   return (
      <div className="w-3/4 mx-auto">
         <ColorForm theme={theme} handler={clrHandler} />

         <div className="border-2 border-border rounded-md p-5">
            <div className="bg-foreground text-background p-2">
               <pre>
                  {}
               </pre>
            </div>
         </div>
      </div>
   );
}
