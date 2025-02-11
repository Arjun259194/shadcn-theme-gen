import ThemePicker from "@/components/ThemePicker";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="">
      <ModeToggle />
      <ThemePicker />
    </div>
  );
}
