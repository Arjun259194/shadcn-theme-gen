import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { users } from "./user"
import { colorschemes } from "./colorscheme"

export const themes = sqliteTable("themes", { 
   id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
   userId: text("useId")
      .notNull()
      .references(() => users.id),
   title: text("title").notNull(),
   description: text("description"),
   darkId: text("darkId")
      .notNull()
      .unique()
      .references(() => colorschemes.id, { onDelete: "cascade" }), 
   lightId: text("lightId")
      .notNull()
      .unique()
      .references(() => colorschemes.id, { onDelete: "cascade" }),
})
