import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFoundSVG = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 300"
      className="w-full max-w-[600px] h-auto"
   >
      <text
         x="50%"
         y="50%"
         dy=".35em"
         textAnchor="middle"
         className="text-6xl font-bold fill-transparent stroke-[4px] stroke-gray-900 dark:stroke-gray-100"
      >
         404
      </text>
   </svg>
)

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
         <div className="text-center space-y-6">
            <NotFoundSVG />
            <h1 className="text-2xl font-bold">Page Not Found</h1>
            <p className="text-muted-foreground">
               The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
               <Link href="/">Go Back Home</Link>
            </Button>
         </div>
      </div>
   )
}
