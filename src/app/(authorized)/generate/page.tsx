import { createTheme } from "@/action/theme"
import { auth } from "@/auth"
import ThemePicker from "@/components/ThemePicker"
import { redirect } from "next/navigation"

export default async function Home() {
   const session = await auth()
   if (!session) redirect("/auth/signin")
   const userID = session.user.id
   return (
      <div className="w-4/5 mx-auto">
         <ThemePicker
            createAction={async ({ light, dark }) => {
               "use server"
               await createTheme(userID, dark, light)
               redirect("/themes")
            }}
         />
      </div>
   )
}
