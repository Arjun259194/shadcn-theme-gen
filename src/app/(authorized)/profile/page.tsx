import { auth } from "@/auth"
import { redirect } from "next/navigation"
import React from "react"
import Image from "next/image"

export default async function page() {
   const session = await auth()
   if (!session) redirect("/auth/signin")
   return (
      <div>
         <div className="w-1/2 mx-auto">
            <Image
               width={500}
               height={500}
               src={session.user?.image ?? ""}
               alt="Profile Picture"
            />
            <p>{session.user?.name}</p>
         </div>
      </div>
   )
}
