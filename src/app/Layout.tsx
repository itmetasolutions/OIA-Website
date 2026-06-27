import { useState, useEffect } from "react"
import { Outlet, useLocation, Link } from "react-router"
import { BookOpen, Phone } from "lucide-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-border"
      style={{ background: "var(--card)", boxShadow: "0 -4px 24px rgba(0,0,0,0.08)" }}>
      <Link
        to="/courses"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-muted-foreground hover:text-primary transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-[10px] font-bold tracking-wide">Courses</span>
      </Link>
      <div className="w-px bg-border" />
      <Link
        to="/contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-muted-foreground hover:text-primary transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-bold tracking-wide">Contact Us</span>
      </Link>
    </div>
  )
}

export default function Layout() {
  const [dark, setDark] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <div className="bg-background text-foreground overflow-x-hidden pb-[60px] lg:pb-0">
      <Navbar dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
