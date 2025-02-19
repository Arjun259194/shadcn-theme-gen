import { drizzle } from "drizzle-orm/libsql"
import { config } from "dotenv"

config({ path: ".env" })

const db = drizzle(process.env.DB_FILE_NAME!)

export default db
