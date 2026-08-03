import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/18001234567?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20learn%20more%20about%20Open%20Islamic%20Academy."

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-[76px] right-4 z-40 flex h-14 items-center rounded-full bg-[#25D366] px-4 text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:right-6 lg:bottom-3"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-white/15" />
      <span className="ml-2.5 hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  )
}
