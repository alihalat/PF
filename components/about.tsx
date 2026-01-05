"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square max-w-sm mx-auto"
        >
          {/* Advanced Neural Overlay */}
          <div className="absolute inset-0 border-[0.5px] border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-2 border-[0.5px] border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          <div className="absolute inset-10 rounded-full overflow-hidden border border-primary/50 group">
            <img
              src="/images/1760396600454.jpeg"
              alt="Ali Halat Profile"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

          {/* Biometric Data Points */}
          <div className="absolute top-0 right-0 p-2 bg-background border border-primary/20 rounded-md font-mono text-[8px] text-primary animate-pulse">
            BPM: 72_STABLE
          </div>
          <div className="absolute bottom-0 left-0 p-2 bg-background border border-primary/20 rounded-md font-mono text-[8px] text-primary animate-pulse">
            OXY: 99%_OPT
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-sm font-mono text-primary mb-6 tracking-widest">BIO_DATA</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am a <span className="text-foreground">Full Stack Developer</span> with a unique background
              transitioning from a high-level corporate career in finance and management. This allows me to approach
              technical problems with a sharp business perspective.
            </p>
            <p>
              Currently pursuing an <span className="text-foreground">Engineering Cycle in Computer Science</span> at
              SUP MTI Oujda, I specialize in building scalable applications using the MERN stack, while leveraging my
              deep expertise in CRM and ERP systems like Sage X3.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <span className="block text-primary font-mono text-xs mb-1">FORMATION</span>
                <span className="text-foreground text-sm">Ingénieur Informatique</span>
              </div>
              <div>
                <span className="block text-primary font-mono text-xs mb-1">LANGUES</span>
                <span className="text-foreground text-sm">FR / EN / DE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
