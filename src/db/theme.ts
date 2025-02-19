import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createSelectSchema } from 'drizzle-zod';

export const themes = sqliteTable("themes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  background: text("background").notNull(),
  foreground: text("foreground").notNull(),
  card: text("card").notNull(),
  cardForeground: text("card_foreground").notNull(),
  popover: text("popover").notNull(),
  popoverForeground: text("popover_foreground").notNull(),
  primary: text("primary").notNull(),
  primaryForeground: text("primary_foreground").notNull(),
  secondary: text("secondary").notNull(),
  secondaryForeground: text("secondary_foreground").notNull(),
  muted: text("muted").notNull(),
  mutedForeground: text("muted_foreground").notNull(),
  accent: text("accent").notNull(),
  accentForeground: text("accent_foreground").notNull(),
  destructive: text("destructive").notNull(),
  destructiveForeground: text("destructive_foreground").notNull(),
  border: text("border").notNull(),
  input: text("input").notNull(),
  ring: text("ring").notNull(),
  chart1: text("chart_1").notNull(),
  chart2: text("chart_2").notNull(),
  chart3: text("chart_3").notNull(),
  chart4: text("chart_4").notNull(),
  chart5: text("chart_5").notNull(),
})


export const themeSelectSchema = createSelectSchema(themes)
