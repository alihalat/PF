"use client"

import type React from "react"

import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const [isSyncing, setIsSyncing] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const handlePortraitClick = async () => {
    if (isSyncing) return
    setIsSyncing(true)

    // Trigger a "neural surge" glitch sequence
    await controls.start({
      filter: [
        "grayscale(100%) contrast(100%)",
        "grayscale(0%) contrast(200%) brightness(150%)",
        "grayscale(100%) contrast(100%)",
      ],
      scale: [1, 1.05, 1],
      transition: { duration: 0.4, times: [0, 0.5, 1] },
    })

    setIsSyncing(false)
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10"
      >
        <div className="relative w-full h-full flex items-center justify-end pr-4 md:pr-12 neural-container">
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            onClick={handlePortraitClick}
            animate={{
              rotateY: mousePos.x * 20,
              rotateX: -mousePos.y * 20,
              y: [0, -15, 0],
            }}
            transition={{
              rotateY: { type: "spring", stiffness: 100, damping: 20 },
              rotateX: { type: "spring", stiffness: 100, damping: 20 },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="relative w-full aspect-square max-w-2xl hologram-frame border border-primary/20 bg-background/50 cursor-pointer group shadow-[0_0_50px_rgba(var(--primary),0.1)]"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={controls} className="relative w-full h-full">
              <Image
                src="/images/1760396600454.png"
                alt="Ali Halat"
                fill
                className="object-contain grayscale mix-blend-screen opacity-90 transition-opacity group-hover:opacity-100"
                priority
              />
            </motion.div>

            {isSyncing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.3, repeat: 2 }}
                className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none"
              />
            )}

            <div className="biometric-scanner" />

            {/* UI Overlays */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 space-y-1">
              <p>ID: HALAT_ALI_0921</p>
              <p>STATUS: {isSyncing ? "SYNCING_NEURAL_LINK..." : "ACTIVE_LINK"}</p>
              <p>FREQ: 432.12 MHZ</p>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/60 text-right">
              <p>LOC: OUJDA_MAR</p>
              <p>SYNC: 100%</p>
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <span className="text-primary font-mono tracking-[0.3em] text-xs mb-4 block bg-primary/10 w-fit px-3 py-1 rounded-sm border border-primary/20">
          SYSTEM_VERSION: 2.1.0_STABLE
        </span>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 leading-none">
          HALAT <br />
          <span className="text-primary glow-text">ALI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-light border-l-2 border-primary/30 pl-6">
          Full Stack MERN Developer & Commercial Strategist. Architecting high-performance digital neural networks for
          business optimization.
        </p>

        <div className="flex flex-wrap gap-8 items-center">
          <motion.div
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-3 text-primary font-mono text-sm group cursor-pointer"
          >
            <a href="#about" className="tracking-widest">
              ESTABLISH_LINK
            </a>
            <div className="w-12 h-px bg-primary scale-x-50 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.div>

          <motion.a
            href="https://github.com/alihalat"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: "rgba(var(--primary), 0.5)" }}
            className="flex items-center gap-3 px-6 py-3 rounded-sm border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all font-mono text-[10px] tracking-widest uppercase"
          >
            <Github className="w-4 h-4 text-primary" />
            GIT_DIRECTORY
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-px h-20 bg-linear-to-b from-primary to-transparent"
        />
      </div>
    </section>
  )
}
