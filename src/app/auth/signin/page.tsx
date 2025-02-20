import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function page() {
   const session = await auth()
   if (session) {
      return redirect("/generate")
   }
   return <div>This is login page</div>
}
