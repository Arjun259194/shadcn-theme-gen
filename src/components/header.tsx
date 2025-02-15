import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header className="mx-5 flex border-b border-border justify-between items-center p-3">
      <h1 className="text-2xl capitalize font-semibold">Themecn</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/popular-themes" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Popular Themes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ModeToggle />
      </NavigationMenu>
    </header>
  );
}
