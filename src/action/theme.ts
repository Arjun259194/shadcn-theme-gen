"use server"

import db from "@/db"
import { colorschemes } from "@/db/schemas/colorscheme"
import { themes } from "@/db/schemas/theme"
import { Theme } from "@/hooks/useThemePicker"

export async function createTheme(userId: string, dark: Theme, light: Theme) {
   const darkId = crypto.randomUUID()
   const lightId = crypto.randomUUID()

   await Promise.all([
      db.insert(colorschemes).values({ id: lightId, ...light }),
      db.insert(colorschemes).values({ id: darkId, ...dark }),
   ])

   const theme = await db
      .insert(themes)
      .values({
         title: `Theme ${new Date().getMilliseconds()}`, // TODO: name it dynamic later
         // TODO: Add description too :>
         lightId,
         darkId,
         userId,
      })
      .returning({ id: themes.id })
}
