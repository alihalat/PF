"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "OCT 2025 - PRESENT",
    role: "MERN FULL STACK DEVELOPER",
    company: "ARK-X",
    description:
      "Developing robust full-stack applications using the MERN ecosystem with a focus on performance and scalability.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    period: "2023 - 2025",
    role: "REGIONAL COMMERCIAL MANAGER",
    company: "GLASSAUTO EXPRESS",
    description: "Led regional sales operations and automotive glass expertise implementation.",
    skills: ["Management", "Strategy", "Sales"],
  },
  {
    period: "2015 - 2019",
    role: "BANKER",
    company: "SOCIÉTÉ GÉNÉRALE",
    description: "Managed high-level financial operations and client relations in a corporate banking environment.",
    skills: ["Finance", "Client Relations"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="absolute left-[7px] md:left-[107px] top-24 bottom-24 w-px bg-linear-to-b from-primary/50 via-primary/10 to-transparent" />

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm font-mono text-primary mb-12 tracking-widest"
      >
        EXPERIENCE_LOGS
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid md:grid-cols-[200px_1fr] gap-4 group relative"
          >
            <div className="absolute left-[4px] md:left-[104px] top-2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] z-10 group-hover:scale-150 transition-transform" />

            <span className="text-muted-foreground font-mono text-[10px] pt-1.5 md:text-right md:pr-12 tracking-widest">
              {exp.period}
            </span>
            <div className="p-6 rounded-sm border border-transparent transition-all group-hover:bg-primary/[0.03] group-hover:border-primary/20 backdrop-blur-xs">
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
