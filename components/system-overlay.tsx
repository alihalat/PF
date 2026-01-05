"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SystemOverlay() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollPercent(Math.round(scrolled))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Coordinates */}
      <div className="absolute bottom-6 left-6 font-mono text-[8px] text-primary/40 space-y-1">
        <p>X: {mousePos.x.toString().padStart(4, "0")}</p>
        <p>Y: {mousePos.y.toString().padStart(4, "0")}</p>
      </div>

      {/* Progress */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-4">
        <div className="h-40 w-px bg-white/10 relative overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-full bg-primary" style={{ height: `${scrollPercent}%` }} />
        </div>
        <span className="font-mono text-[10px] text-primary/60 rotate-90 origin-center whitespace-nowrap">
          BUFFER_{scrollPercent}%
        </span>
      </div>

      {/* Viewport Corners */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-primary/20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-primary/20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-primary/20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-primary/20" />
    </div>
  )
}
