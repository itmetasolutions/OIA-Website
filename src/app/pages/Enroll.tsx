import { useState } from "react"
import { useSearchParams, Link } from "react-router"
import { CheckCircle, BookOpen, Users, Award, Clock, Star, ArrowRight } from "lucide-react"
import { IslamicPattern, Reveal, PageHero, COURSES, TESTI, CTASection, STAR_PATH , SEO } from "../shared"

const SCHEDULES  = ["Morning (6 AM – 12 PM)", "Afternoon (12 PM – 6 PM)", "Evening (6 PM – 10 PM)", "Flexible / Recorded Only"]
const COUNTRIES  = ["United States", "United Kingdom", "Pakistan", "Saudi Arabia", "UAE", "Canada", "Australia", "India", "Egypt", "Turkey", "Other"]

function EnrollForm({ preselected }: { preselected: string }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "",
    course: preselected || "", level: "", schedule: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedCourse = COURSES.find((c) => c.title === form.course)

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6" style={{ border: "2px solid rgba(10,122,88,0.2)" }}>
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Enrollment Submitted!
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          JazakAllahu Khairan! Your enrollment for <strong className="text-primary">{form.course}</strong> has been received.
          Our team will contact you at {form.email} within 24 hours to confirm your registration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all">
            Browse More Courses <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-primary/25 hover:bg-primary/6 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Course Selection */}
      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Select Course *</label>
        <select required value={form.course} onChange={(e) => set("course", e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
          <option value="">— Choose a course —</option>
          {COURSES.map((c) => (
            <option key={c.title} value={c.title}>{c.title}</option>
          ))}
        </select>
        {selectedCourse && (
          <div className="mt-3 p-4 rounded-xl bg-primary/5 border border-primary/15 flex gap-3 items-start">
            <selectedCourse.Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">{selectedCourse.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{selectedCourse.desc}</p>
              <div className="flex gap-3 mt-2">
                <span className="text-xs font-bold text-primary">Level: {selectedCourse.level}</span>
                <span className="text-xs font-bold text-muted-foreground">Duration: {selectedCourse.duration}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Personal Info */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Full Name *</label>
          <input required value={form.name} onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Email Address *</label>
          <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Phone / WhatsApp *</label>
          <input required value={form.phone} onChange={(e) => set("phone", e.target.value)}
            placeholder="+1 (000) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
        </div>
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Country *</label>
          <select required value={form.country} onChange={(e) => set("country", e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
            <option value="">— Select country —</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Your Level *</label>
          <select required value={form.level} onChange={(e) => set("level", e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
            <option value="">— Select level —</option>
            <option>Complete Beginner</option>
            <option>Some Knowledge</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Preferred Schedule *</label>
          <select required value={form.schedule} onChange={(e) => set("schedule", e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
            <option value="">— Choose schedule —</option>
            {SCHEDULES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5 block">Additional Message (Optional)</label>
        <textarea rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
          placeholder="Any specific goals, questions, or requirements..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none" />
      </div>

      <button type="submit"
        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 text-base">
        Submit Enrollment
      </button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our terms. No payment required at this stage — we'll contact you to confirm.
      </p>
    </form>
  )
}

function WhatToExpect() {
  const items = [
    { Icon: BookOpen, title: "Confirmation Email",     desc: "You'll receive a confirmation email within 24 hours with your class schedule and login details." },
    { Icon: Users,    title: "Meet Your Scholar",      desc: "We'll introduce you to your assigned scholar and you'll have an orientation session." },
    { Icon: Clock,    title: "First Class",            desc: "Your first class is a free trial — no obligation. Experience the quality before committing." },
    { Icon: Award,    title: "Start Learning",         desc: "Once confirmed, begin your structured journey toward Islamic knowledge and personal growth." },
  ]
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">After Enrollment</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            What to <span className="text-primary italic">Expect Next</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="text-center p-6 bg-background border border-border rounded-2xl hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-3">Step {i + 1}</div>
                <h3 className="font-bold text-foreground text-base mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialStrip() {
  const t = TESTI[0]
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A7A58 0%, #065A42 100%)" }}>
      <IslamicPattern color="#ffffff" opacity={0.06} />
      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <Reveal>
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((s) => <Star key={s} style={{ width: 18, height: 18, fill: "#C9A454", color: "#C9A454" }} />)}
          </div>
          <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" className="w-10 h-10 mx-auto mb-4">
            <path d={STAR_PATH} />
          </svg>
          <p className="text-xl text-white/90 leading-relaxed italic mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            "{t.text}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: t.col }}>
              {t.init}
            </div>
            <div className="text-left">
              <div className="font-bold text-white">{t.name}</div>
              <div className="text-white/60 text-sm">{t.loc}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Enroll() {
  const [params] = useSearchParams()
  const preselected = decodeURIComponent(params.get("course") || "")
  const course = COURSES.find((c) => c.title === preselected)

  return (
    <>
      <PageHero
        badge={course ? course.title : "Open Islamic Academy"}
        title={course
          ? <><span className="text-primary italic">Enroll</span> in {course.title}</>
          : <>Enroll in a <span className="text-primary italic">Course Today</span></>
        }
        subtitle={course
          ? `${course.desc} — Level: ${course.level} · Duration: ${course.duration}`
          : "Choose your course, complete the form below, and take the first step toward authentic Islamic knowledge."
        }
      />

      {/* Main Form Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.035} /></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">

            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-2xl">
                  <h2 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Enrollment Form
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Fill in your details below. Our team will confirm your enrollment within 24 hours.
                  </p>
                  <EnrollForm preselected={preselected} />
                </div>
              </Reveal>
            </div>

            {/* Sidebar — takes 2 columns */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Reveal delay={0.1}>
                {/* Why Enroll card */}
                <div className="bg-card border border-border rounded-3xl p-7">
                  <h3 className="font-bold text-foreground text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Why Enroll With Us?
                  </h3>
                  <div className="flex flex-col gap-4">
                    {[
                      "Free first trial class — no commitment",
                      "Learn from certified Islamic scholars",
                      "Flexible scheduling — live & recorded",
                      "Accredited certificate upon completion",
                      "Dedicated student mentor assigned",
                      "Cancel anytime, no hidden fees",
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                {/* Popular courses */}
                <div className="bg-card border border-border rounded-3xl p-7">
                  <h3 className="font-bold text-foreground text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Popular Right Now
                  </h3>
                  <div className="flex flex-col gap-3">
                    {COURSES.slice(0, 5).map((c) => (
                      <Link key={c.title} to={`/enroll?course=${encodeURIComponent(c.title)}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <c.Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground leading-tight">{c.title}</div>
                          <div className="text-[10px] text-muted-foreground">{c.duration}</div>
                        </div>
                      </Link>
                    ))}
                    <Link to="/courses" className="text-xs text-primary font-semibold text-center mt-2 hover:underline">
                      View all courses →
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1585036401990-e3e49d0f1e85?auto=format&fit=crop&w=600&h=300&q=80"
                    alt="Learning" className="w-full h-48 object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WhatToExpect />
      <TestimonialStrip />
      <CTASection
        title={<>Have Questions Before <span className="italic" style={{ color: "#C9A454" }}>Enrolling?</span></>}
        subtitle="Our advisors are available to answer any questions and help you choose the perfect course for your goals."
      />
    </>
  )
}
