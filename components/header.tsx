"use client"

import { motion } from "framer-motion"

export function Header() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs flex items-center gap-4"
        >
          <span className="text-primary font-bold tracking-widest border-r border-white/10 pr-4">HALAT_ALI_OS</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Connection_Stable</span>
          </div>
        </motion.div>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
