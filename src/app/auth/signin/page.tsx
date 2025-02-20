import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function page() {
   const session = await auth()
   if (session) {
      return redirect("/generate")
   }
   return (
      <div>
         <h2>This is the signin page</h2>

         <div className="preview">
            <div className="bg-foreground">
               <p className="text-background">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore aspernatur nulla atque vitae voluptas aut eos laborum
                  consequuntur asperiores eveniet? Quisquam maxime sed pariatur
                  necessitatibus dolores, sint nulla qui libero?
               </p>
            </div>
         </div>

      </div>
   )
}
