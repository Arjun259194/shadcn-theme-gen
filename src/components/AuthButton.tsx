"use client"
import { Button } from "./ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import IconButton from "./ui/icon-button"
import { Github } from "./icons"
import { signIn, signOut, useSession } from "next-auth/react"

export const AuthButton = () => {
   const { data: session } = useSession()

   if (session)
      return (
         <Button onClick={() => signOut()} variant="outline">
            Sign Out
         </Button>
      )

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline">Sign In</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Sign in</DialogTitle>
               <DialogDescription>
                  Choose you prefered method for signing in
               </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <IconButton onClick={() => signIn("github")} icon={Github}>
                  Github
               </IconButton>
            </div>
         </DialogContent>
      </Dialog>
   )
}
// <Button onClick={() => signIn("github")} variant="outline">
//   Sign In
// </Button>
