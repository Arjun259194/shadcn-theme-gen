import { auth } from "@/auth"
import PreviewWrapper from "@/components/PreviewWrapper"
import { redirect } from "next/navigation"

export default async function page() {
   const session = await auth()
   if (session) {
      return redirect("/generate")
   }
   return (
      <div>
         <h2>This is the signin page</h2>
      </div>
   )
}
