import { getThemes } from "@/db"
import Link from "next/link"

export default async function page() {
   const themes = await getThemes()
   return (
      <div>
         {themes.length <= 0 ? (
            <h3>No Theme created</h3>
         ) : (
            themes.map(({ user, id }, idx) => {
               return (
                  <div key={idx}>
                     <Link href={`/themes/${id}`}>Here</Link>
                     <p>created by {user?.name}</p>
                  </div>
               )
            })
         )}
      </div>
   )
}
