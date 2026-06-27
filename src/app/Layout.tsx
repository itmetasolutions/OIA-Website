import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
    </div>
  )
}
