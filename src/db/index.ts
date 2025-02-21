import { drizzle } from "drizzle-orm/libsql"
import { eq } from "drizzle-orm"
import { alias } from "drizzle-orm/sqlite-core"
import { colorschemes } from "./schemas/colorscheme"
import { themes } from "./schemas/theme"
import { users } from "./schema"

const db = drizzle(process.env.DB_FILE_NAME!)
export default db

export async function getThemeByID(id: string) {
   const darkScheme = alias(colorschemes, "darkScheme")
   const lightScheme = alias(colorschemes, "lightScheme")

   return await db
      .select({
         id: themes.id,
         title: themes.title,
         description: themes.description,
         darkScheme: darkScheme, // Selects all fields from darkScheme
         lightScheme: lightScheme, // Selects all fields from lightScheme
         user: users,
      })
      .from(themes)
      .where(eq(themes.id, id))
      .leftJoin(darkScheme, eq(themes.darkId, darkScheme.id))
      .leftJoin(lightScheme, eq(themes.lightId, lightScheme.id))
      .leftJoin(users, eq(themes.userId, users.id))
      .limit(1)
}

export async function getThemesRecursion() {
   return await db
      .select({
         theme: themes,
         user: users,
      })
      .from(themes)
      .leftJoin(users, eq(themes.userId, users.id))
}
