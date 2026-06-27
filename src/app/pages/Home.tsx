import { useRef } from "react"
import { Link } from "react-router"
import { motion, useInView } from "motion/react"
import {
  BookOpen, Star, ArrowRight, Play, Award, CheckCircle,
  ChevronRight, Users, GraduationCap,
} from "lucide-react"
import {
  STAR_PATH, IslamicPattern, Reveal, COURSES, WHY, STEPS, StatsBar, CTASection, titleToSlug, SEO,
} from "../shared"

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[30px]">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background" />
      <IslamicPattern color="#0A7A58" opacity={0.055} />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="self-start inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" style={{ width: 14, height: 14 }}>
                <path d={STAR_PATH} />
              </svg>
              Authentic Islamic Education · Worldwide
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] sm:text-4xl lg:text-[2.9rem] xl:text-[3.2rem] font-bold text-foreground leading-[1.1]">
              Master Islamic
              <span className="block text-primary italic">Knowledge</span>
              <span className="block">Through Authentic</span>
              <span className="block" style={{ color: "var(--accent)" }}>Learning</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-[520px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Join thousands of students learning the Quran, Hadith, Arabic, Aqeedah, and Islamic
              sciences through structured online courses taught by qualified scholars.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-row gap-3">
              <Link to="/enroll"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                Enroll Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link to="/courses"
                className="inline-flex items-center gap-1.5 bg-card text-foreground font-bold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full border border-border shadow-sm hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" /> Explore Courses
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="flex items-center gap-8 pt-1">
              {[["5000+", "Students"], ["25+", "Courses"], ["20+", "Scholars"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</div>
                  <div className="text-xs text-muted-foreground font-semibold">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative" style={{ width: 320, height: 320 }}>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/15" style={{ animation: "spin 36s linear infinite" }}>
                {[0, 90, 180, 270].map((deg) => (
                  <div key={deg} className="absolute w-3.5 h-3.5 rounded-full bg-primary/50 shadow-lg shadow-primary/30"
                    style={{ top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(157px) translate(-50%, -50%)` }} />
                ))}
              </div>
              <div className="absolute inset-10 rounded-full border border-accent/20" style={{ animation: "spin 55s linear infinite reverse" }} />
              <div className="absolute inset-12 rounded-[2.5rem] flex items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(10,122,88,0.12), rgba(201,164,84,0.08))", backdropFilter: "blur(12px)", border: "1px solid rgba(10,122,88,0.18)", boxShadow: "0 24px 80px rgba(10,122,88,0.12)" }}>
                <IslamicPattern color="#0A7A58" opacity={0.14} />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0A7A58, #065A42)", boxShadow: "0 16px 48px rgba(10,122,88,0.45)" }}>
                    <BookOpen style={{ width: 36, height: 36, color: "white" }} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-primary text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Open Islamic</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Academy</p>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-6 rounded-2xl px-4 py-3 shadow-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>5 000+</div>
                <div className="text-xs text-muted-foreground font-semibold">Global Students</div>
              </motion.div>
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-6 rounded-2xl px-4 py-3 shadow-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} style={{ width: 12, height: 12, fill: "#C9A454", color: "#C9A454" }} />)}
                </div>
                <div className="text-xs font-semibold text-muted-foreground">95% Satisfaction</div>
              </motion.div>
              <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                className="absolute top-1/2 -right-[68px] -translate-y-1/2 rounded-2xl px-3.5 py-3 shadow-2xl" style={{ background: "#0A7A58" }}>
                <Award style={{ width: 18, height: 18, color: "white", marginBottom: 4 }} />
                <div className="text-xs font-bold text-white leading-none">Certified</div>
                <div className="text-[10px] text-white/75 mt-0.5">Scholars</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

// ─── About Preview ───────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
          <Reveal className="h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <img
                src="/Images/Home/About Open Islamic Academy.webp"
                alt="About Open Islamic Academy"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4 justify-center">
                  {[["30+", "Countries"], ["5000+", "Students"]].map(([v, l]) => (
                    <div key={l} className="bg-white/15 backdrop-blur rounded-xl px-4 py-3 text-center border border-white/20">
                      <div className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</div>
                      <div className="text-[10px] text-white/80 font-semibold">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">About Us</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  About Open Islamic <span className="text-primary italic">Academy</span>
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Open Islamic Academy is dedicated to providing authentic Islamic education through structured,
                easy-to-understand, and professionally designed online courses taught by qualified scholars worldwide.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Our mission is to make Islamic knowledge accessible for students around the world while maintaining
                authenticity, academic excellence, and spiritual growth.
              </p>
              <div className="flex flex-col gap-3 pt-1">
                {["Qualified Teachers", "Authentic Sources", "Flexible Online Learning", "Worldwide Students"].map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-3">
                <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-200">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-primary/6 transition-all duration-200" style={{ border: "1px solid rgba(10,122,88,0.28)" }}>
                  Contact Us <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Featured Courses ────────────────────────────────────────────────────────
function FeaturedCourses() {
  const shown = COURSES.slice(0, 6)
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "var(--secondary)" }}>
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.048} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Our Curriculum</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-primary italic">Courses</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            From foundational Quran recitation to advanced Islamic sciences — structured pathways for every level.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map(({ title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.07}>
              <div className="group h-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/28 hover:shadow-2xl hover:shadow-primary/7 hover:-translate-y-1.5 transition-all duration-300">
                <div className="overflow-hidden flex-shrink-0">
                  <img src={`/Images/Courses Images/${title}.webp`} alt={title} loading="lazy"
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-accent/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col gap-2 flex-1 p-4">
                  <h3 className="font-bold text-foreground text-sm leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                </div>
                <div className="flex items-center gap-2 px-4 pb-4">
                  <Link to={`/enroll?course=${encodeURIComponent(title)}`}
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold px-3 py-1.5 rounded-full text-xs shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
                    Enroll Now
                  </Link>
                  <Link to={`/courses/${titleToSlug(title)}`}
                    className="inline-flex items-center justify-center bg-card text-foreground font-bold px-3 py-1.5 rounded-full border border-border text-xs hover:border-primary/30 transition-all">
                    See Details
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/courses"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200">
            View All {COURSES.length} Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Why Choose Preview ───────────────────────────────────────────────────────
function WhyPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.04} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Why Choose Us</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            The Open Islamic Academy <span className="text-primary italic">Difference</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.slice(0, 4).map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="group h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/6 hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/18 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/why-choose-us"
            className="inline-flex items-center gap-2 text-primary font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-primary/6 transition-all border border-primary/25">
            See All Reasons <ChevronRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Process ─────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-60"><IslamicPattern color="#C9A454" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">How It Works</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Your <span className="text-primary italic">Learning Journey</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-7 relative">
          <div className="hidden md:block absolute top-[46px] left-[14%] right-[14%] h-px"
            style={{ background: "linear-gradient(to right, rgba(10,122,88,0.1), rgba(10,122,88,0.5), rgba(10,122,88,0.1))" }} />
          {STEPS.map(({ num, title, desc }, i) => (
            <Reveal key={num} delay={i * 0.11}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0A7A58, #065A42)", boxShadow: "0 16px 48px rgba(10,122,88,0.32)" }}>
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link to="/enroll"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200">
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home | Open Islamic Academy",
    "url": "https://openislamicacademy.com",
    "description": "Open Islamic Academy — authentic online Islamic education covering Quran, Arabic, Hadith, Aqeedah, Fiqh and more, taught by qualified scholars worldwide.",
    "isPartOf": { "@type": "WebSite", "name": "Open Islamic Academy", "url": "https://openislamicacademy.com" }
  }
  return (
    <>
      <SEO
        title="Authentic Online Islamic Education"
        description="Join 5,000+ students learning Quran, Tajweed, Arabic, Hadith, Aqeedah and Islamic sciences online with qualified scholars. Enroll in 25+ structured courses today."
        keywords="online Islamic education, Quran classes online, learn Quran with Tajweed, Islamic courses online, Arabic language online, Hadith studies, Islamic academy online, learn Islam"
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <AboutPreview />
      <FeaturedCourses />
      <WhyPreview />
      <Process />
      <StatsBar />
      <CTASection
        title={<>Start Your Journey of <span className="italic" style={{ color: "#C9A454" }}>Islamic Knowledge Today</span></>}
        subtitle="Whether you are beginning your first Quran lesson or pursuing advanced Islamic sciences, Open Islamic Academy provides the guidance, scholars, and structure you need."
      />
    </>
  )
}
