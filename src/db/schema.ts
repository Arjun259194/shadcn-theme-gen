import { int, text, sqliteTable } from "drizzle-orm/sqlite-core"

export const userTable = sqliteTable("user_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
})
