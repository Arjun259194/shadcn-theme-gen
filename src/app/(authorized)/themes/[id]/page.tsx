import { CSSPreview } from "@/components/css-preview"
import { getThemeByID } from "@/db"
import Image from "next/image"

interface Props {
   params: { id: string }
}

export default async function page({ params }: Props) {
   const theme = (await getThemeByID(params.id))[0]

   if (!theme) {
      return (
         <div>
            <h1>No Theme Found</h1>
         </div>
      )
   }

   const { id: bid, ...dark } = theme.darkScheme!
   const { id: lid, ...light } = theme.darkScheme!

   return (
      <div className="">
         <div>
            <h2>{theme.title}</h2>
            <p>{theme.description}</p>
            <div className="flex space-x-4">
               <Image
                  alt="profile picture"
                  src={theme.user?.image ?? ""}
                  width={200}
                  height={200}
               />
            </div>
         </div>
         <CSSPreview dark={dark} light={light} />
      </div>
   )
}
