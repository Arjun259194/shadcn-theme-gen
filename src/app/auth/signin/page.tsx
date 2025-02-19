import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function page() {
  const session = await getServerSession()
  if (session) {
    return redirect("/generate")
  }
  return <div>This is login page</div>
}
