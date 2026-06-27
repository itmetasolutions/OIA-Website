import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { IslamicPattern, Reveal, PageHero, CTASection, SEO } from "../shared"

const CONTACT_ITEMS = [
  { Icon: Mail,          label: "Email Us", value: "info@openislamicacademy.com", sub: "We reply within 24 hours",   col: "#0A7A58" },
  { Icon: Phone,         label: "Call Us",  value: "+1 (800) 123-4567",           sub: "Mon - Fri, 9 AM - 6 PM EST", col: "#C9A454" },
  { Icon: MessageCircle, label: "WhatsApp", value: "+1 (800) 123-4567",           sub: "Quick support via WhatsApp", col: "#25D366" },
  { Icon: MapPin,        label: "Location", value: "Online - Worldwide",          sub: "Serving 30+ countries",      col: "#7C3AED" },
]

const FAQS = [
  { q: "How do online classes work?",                  a: "Classes are conducted live via Zoom/Google Meet and are also recorded for later viewing. You receive login credentials upon enrollment." },
  { q: "Do I need prior Islamic knowledge to enroll?", a: "No. We have courses for all levels from complete beginners to advanced students. Our advisors can help you choose the right starting point." },
  { q: "How long does each course take?",              a: "Course durations range from 2 months to 3 years depending on the subject. Each course page lists the expected duration and schedule." },
  { q: "Are certificates recognised?",                 a: "Yes. Our certificates are issued under the supervision of qualified Islamic scholars and are recognised by Islamic institutions worldwide." },
  { q: "Can I get a refund if not satisfied?",         a: "We offer a 7-day satisfaction guarantee. If you are unhappy for any reason, contact us within 7 days for a full refund." },
  { q: "Do you offer scholarships or discounts?",      a: "Yes. We have special pricing for students in developing countries and offer scholarships for those unable to afford the fees. Contact us to apply." },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.04} /></div>
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Got Questions?</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 0.05}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/40 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q}</span>
                  {open === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.035} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Form */}
          <Reveal>
            <div className="bg-background rounded-3xl p-8 lg:p-10 border border-border shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Have a question? We would love to hear from you. Fill in the form and we will get back to you promptly.
              </p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thank you for reaching out. We will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Email Address *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Phone (Optional)</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (000) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Subject *</label>
                      <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Get In Touch</span>
                <h2 className="mt-3 text-4xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We are Here to <span className="text-primary italic">Help You</span>
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Whether you have questions about our courses, need guidance on which programme is right for you,
                  or want to discuss scholarship opportunities — our team is ready to assist.
                </p>
              </div>

              <div className="grid gap-4">
                {CONTACT_ITEMS.map(({ Icon, label, value, sub, col }) => (
                  <div key={label} className="flex items-start gap-4 bg-background rounded-2xl p-5 border border-border hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${col}18` }}>
                      <Icon style={{ width: 22, height: 22, color: col }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">{label}</div>
                      <div className="font-semibold text-foreground text-sm">{value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us — Get in Touch with Open Islamic Academy"
        description="Have a question about our Islamic courses? Contact Open Islamic Academy via email, phone or WhatsApp. Our team responds within 24 hours."
        keywords="contact Islamic academy, Islamic course enquiry, online Islamic school contact, Islamic education support"
        canonical="/contact"
      />
      <PageHero
        badge="Contact Us" crumb="Contact"
        title={<>We would Love to <span className="text-primary italic">Hear From You</span></>}
        subtitle="Have a question about our courses, pricing, or anything else? Our team is here to help. Reach out and we will respond within 24 hours."
        photo="/Images/About Us/Community.webp"
      />
      <ContactForm />
      <FAQ />
      <CTASection
        title={<>Ready to Start <span className="italic" style={{ color: "#C9A454" }}>Learning Today?</span></>}
        subtitle="Do not wait — enroll in one of our 25+ courses and begin your journey toward authentic Islamic knowledge."
      />
    </>
  )
}
