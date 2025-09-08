import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  priority?: boolean
}

const Logo = ({ size = "md", className, priority = false }: LogoProps) => {
  const sizeConfig = {
    sm: { width: 120, height: 40, className: "h-6 sm:h-8 w-auto" },
    md: { width: 180, height: 60, className: "h-8 sm:h-10 w-auto" },
    lg: { width: 240, height: 80, className: "h-10 sm:h-12 w-auto" }
  }

  const config = sizeConfig[size]

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/Logo.svg"
        alt="PM Contabilidad"
        width={config.width}
        height={config.height}
        className={cn(config.className, "logo-sharp")}
        priority={priority}
        style={{
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  )
}

export default Logo
