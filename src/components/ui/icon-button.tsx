import React, { ReactNode } from "react"
import { Button } from "./button"

type Props = Parameters<typeof Button>[0] & {
   icon: ReactNode
   reverse?: boolean
}

const IconButton: React.FC<Props> = ({
   children,
   icon,
   reverse,
   className,
   ...props
}: Props) => {
   return (
      <Button
         className={`flex ${!reverse ? "flex-row" : "flex-row-reverse"} items-center gap-1 ${className}`}
         {...props}
      >
         <span>{icon}</span>
         <span>{children}</span>
      </Button>
   )
}

export default IconButton
