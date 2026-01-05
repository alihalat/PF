"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Phone, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm font-mono text-primary mb-12 tracking-widest"
      >
        INITIATE_CONNECTION
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold tracking-tighter">Ready to sync?</h3>
          <p className="text-muted-foreground max-w-md">
            Whether you have a technical project in mind or a business opportunity, my interface is always open.
          </p>
          <div className="space-y-4">
            <a
              href="https://github.com/alihalat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <Github className="w-4 h-4 text-primary" />
              </div>
              <span className="font-mono text-xs tracking-tighter group-hover:text-primary transition-colors uppercase">
                github.com/alihalat
              </span>
            </a>
            <a href="mailto:halat.pro@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm group-hover:text-primary transition-colors">halat.pro@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ali-halat" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm group-hover:text-primary transition-colors">
                linkedin.com/in/ali-halat
              </span>
            </a>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm">+212-705-051743</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Name</label>
              <input
                type="text"
                className="w-full bg-background border border-white/10 rounded-md p-3 focus:border-primary outline-hidden transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Email</label>
              <input
                type="email"
                className="w-full bg-background border border-white/10 rounded-md p-3 focus:border-primary outline-hidden transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Message</label>
              <textarea className="w-full bg-background border border-white/10 rounded-md p-3 focus:border-primary outline-hidden transition-colors min-h-[120px]" />
            </div>
            <button className="w-full bg-primary text-primary-foreground font-mono text-sm py-4 rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)]">
              SEND_PACKET
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
