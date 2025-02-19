"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

export const AuthButton = () => {
  const { data: session } = useSession()

  if (session)
    return (
      <Button onClick={() => signOut()} variant="outline">
        Sign Out
      </Button>
    )

  return (
    <Button onClick={() => signIn("github")} variant="outline">
      Sign In
    </Button>
  )
}
