"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "CORE_TECH",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "Node.js", "Nest.js", "Redux"],
  },
  {
    title: "INFRA_DB",
    skills: ["Supabase", "PostgreSQL", "Clerk", "Tailwind CSS", "XML"],
  },
  {
    title: "BUSINESS_ERP",
    skills: ["Sage Commercial", "Sage X3", "CRM Systems", "Financial Management"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm font-mono text-primary mb-12 tracking-widest"
      >
        NEURAL_CAPABILITIES
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-sm bg-white/[0.01] border border-white/5 hover:border-primary/30 transition-all group/card"
          >
            <h3 className="font-mono text-[10px] text-primary/60 mb-6 tracking-widest flex items-center gap-2">
              <span className="w-2 h-px bg-primary/40" />
              {group.title}
            </h3>
            <ul className="space-y-4">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all shadow-none group-hover:shadow-[0_0_8px_var(--primary)]" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-mono tracking-tight">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
