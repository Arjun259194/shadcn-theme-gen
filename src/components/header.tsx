import Link from "next/link"
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { ModeToggle } from "./ui/mode-toggle"
import { AuthButton } from "./AuthButton"
import { auth } from "@/auth"

export default async function Header() {
   const session = await auth()
   return (
      <header className="mx-5 flex border-b border-border justify-between items-center p-3">
         <div className="flex items-center space-x-4">
            <h1 className="text-2xl capitalize font-semibold">Themecn</h1>
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           Home
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           About
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  {session ? (
                     <NavigationMenuItem>
                        <Link href="/profile" legacyBehavior passHref>
                           <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                           >
                              Profile
                           </NavigationMenuLink>
                        </Link>
                     </NavigationMenuItem>
                  ) : null}
               </NavigationMenuList>
            </NavigationMenu>
         </div>
         <div>
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <AuthButton />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <ModeToggle />
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </div>
      </header>
   )
}
