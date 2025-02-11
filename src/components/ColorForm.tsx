import { ThemeKey, Themes } from "@/hooks/useThemePicker";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { ChangeEvent } from "react";
import { rgbPercentToHex } from "@/lib/utils";

interface Props {
   theme: Themes,
   handler: (key: ThemeKey, e: ChangeEvent<HTMLInputElement>) => void
}

export default function ColorForm(props: Props) {
   const { resolvedTheme } = useTheme();
   return (
      <div className="grid grid-cols-3 gap-4">
         {Object.entries(resolvedTheme === "dark" ? props.theme.dark : props.theme.light).map(([key, value], idx) => {
            return (
               <div
                  className="flex justify-center rounded-md items-center space-x-5 shadow-lg p-5 bg-background border-2 border-border"
                  key={idx}
               >
                  <Label
                     className="capitalize font-semibold text-md text-foreground"
                     htmlFor={key}
                  >
                     {key}
                  </Label>
                  <Input
                     name={key}
                     onChange={(e) => props.handler(key as ThemeKey, e)}
                     value={rgbPercentToHex(value as string) ?? "#000000"}
                     type="color"
                  />
               </div>
            );
         })}
      </div>
   );
}
