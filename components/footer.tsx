export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-4">
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
          © 2025 HALAT ALI — NEURAL_INTERFACE_V1.0
        </span>
        <div className="flex gap-6">
          <span className="font-mono text-[10px] text-muted-foreground hover:text-primary cursor-pointer transition-colors">
            LATENCY: 14MS
          </span>
          <span className="font-mono text-[10px] text-muted-foreground hover:text-primary cursor-pointer transition-colors">
            STATUS: OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  )
}
