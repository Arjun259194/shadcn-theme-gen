"use client"

import { Button } from "./ui/button"
import { useToast } from "@/hooks/use-toast"

type Props = {
  action: (id: number) => Promise<void>
  users: {
    id: number
    name: string
    email: string
  }[]
}

export default function Userlist({ users, action }: Props) {
  const { toast } = useToast()
  return (
    <div>
      <h1>Users</h1>
      {users.map((user, idx) => {
        return (
          <div
            className="p-4 flex justify-between rounded-md border-border border-2 space-y-3"
            key={idx}
          >
            <div>
              <p>{user.name}</p>
              <span>{user.email}</span>
            </div>
            <Button
              onClick={async () => {
                try {
                  await action(user.id)
                  toast({ title: `${user.name} removed` })
                } catch (err) {
                  toast({ title: "Failed to register user" })
                }
              }}
              variant="destructive"
            >
              Remove
            </Button>
          </div>
        )
      })}
    </div>
  )
}
