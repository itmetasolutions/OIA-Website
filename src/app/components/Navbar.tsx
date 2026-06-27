import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { motion } from "motion/react"
import { Menu, X, Moon, Sun, ChevronRight, ArrowRight } from "lucide-react"
import { LogoMark } from "../shared"

const NAV = [
  { label: "Home",          href: "/" },
  { label: "About",         href: "/about" },
  { label: "Courses",       href: "/courses" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact",       href: "/contact" },
]

export default function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 44)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-card/90 backdrop-blur-2xl shadow-sm border-b border-border" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark size={180} dark={dark} />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <li key={n.label}>
              <Link
                to={n.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === n.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/enroll"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/25 hover:bg-primary/90 hover:-translate-y-px transition-all duration-200"
          >
            Enroll Now <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-card/95 backdrop-blur-2xl border-b border-border px-5 pb-6 pt-1"
        >
          <ul className="flex flex-col gap-4 mb-5">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === n.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/enroll"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-full text-sm"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </header>
  )
}
