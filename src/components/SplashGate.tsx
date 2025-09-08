"use client"

import { usePathname } from "next/navigation"
import SplashScreen from "@/components/SplashScreen"

export default function SplashGate() {
  const pathname = usePathname()
  if (pathname !== "/") return null
  return <SplashScreen />
}
