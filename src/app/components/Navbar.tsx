import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Moon, Sun, ChevronRight, ArrowRight, BookOpen } from "lucide-react"
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

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
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
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[280px] lg:hidden flex flex-col"
              style={{ background: "var(--card)", boxShadow: "4px 0 32px rgba(0,0,0,0.15)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 h-[68px] border-b border-border flex-shrink-0">
                <LogoMark size={160} dark={dark} />
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="flex flex-col gap-1">
                  {NAV.map((n, i) => (
                    <motion.li
                      key={n.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                    >
                      <Link
                        to={n.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                          pathname === n.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                      >
                        {n.label}
                        {pathname === n.href && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer actions */}
              <div className="px-5 py-5 border-t border-border flex flex-col gap-3 flex-shrink-0">
                <Link
                  to="/enroll"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 rounded-full text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
                >
                  <BookOpen className="w-4 h-4" /> Enroll Now
                </Link>
                <button
                  onClick={() => setDark(!dark)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {dark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
