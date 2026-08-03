import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight, Gift, MessageCircle, Sparkles, X } from "lucide-react"

export default function FloatingPopupMenu() {
  const [open, setOpen] = useState(true)

  return (
    <aside className="fixed right-4 sm:right-6 bottom-[146px] lg:bottom-[76px] z-40 flex flex-col items-end gap-3" aria-label="Quick actions">
      <div
        id="floating-quick-actions"
        className={`w-[min(19rem,calc(100vw-2rem))] origin-bottom-right transition-all duration-300 ease-out ${
          open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/20">
          <div className="relative px-5 py-4 text-white" style={{ background: "linear-gradient(135deg, #0A7A58, #065A42)" }}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Collapse quick actions"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
              <Sparkles className="h-4 w-4 text-accent" /> Quick Actions
            </div>
            <p className="mt-2 pr-8 text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              How can we help?
            </p>
          </div>

          <div className="grid gap-2 p-3">
            <Link
              to="/enroll"
              className="group flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Gift className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-foreground">3 Days Trial</span>
                <span className="block text-xs text-muted-foreground">Experience learning with us</span>
              </span>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-2xl border border-border p-3.5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-foreground">Contact Us</span>
                <span className="block text-xs text-muted-foreground">We are happy to assist you</span>
              </span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 items-center gap-2.5 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        aria-expanded={open}
        aria-controls="floating-quick-actions"
      >
        <Sparkles className="h-5 w-5" />
        <span>{open ? "Hide" : "Quick Help"}</span>
      </button>
    </aside>
  )
}
