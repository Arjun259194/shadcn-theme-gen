import { AuthButton } from "@/components/AuthButton"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
      {/* Blurred Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50 dark:from-blue-800 dark:to-purple-800 dark:opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl px-4 relative z-10">
        <h1 className="text-6xl font-bold text-foreground  capitalize">
          Shadcn Theme Generator
        </h1>
        <p className="mt-6 text-lg text-secondary-foreground ">
          Craft stunning, customizable themes for your shadcn UI projects with
          ease. Whether you're building a sleek dashboard or a vibrant
          portfolio, our generator empowers you to create themes that shine in
          both light and dark modes.
        </p>
        <div className="mt-8 space-x-5">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="/generate">Get Started</a>
          </Button>
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
