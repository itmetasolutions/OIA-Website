import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "motion/react"
import { Link } from "react-router"
import { Helmet } from "react-helmet-async"
import {
  BookOpen, Star, Bookmark, Eye, FileText, Layers,
  Shield, ShieldCheck, Heart, GraduationCap, Globe, Compass,
  Award, Feather, Search, Lightbulb, Users,
  ArrowRight, CheckCircle,
} from "lucide-react"

const SITE = "https://openislamicacademy.com"
const SITE_NAME = "Open Islamic Academy"
const DEFAULT_IMG = `${SITE}/Images/OIA Logo Light Mode.webp`

export function SEO({
  title,
  description,
  keywords = "",
  canonical = "",
  ogImage = DEFAULT_IMG,
  schema,
}: {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  schema?: object
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const url = canonical ? `${SITE}${canonical}` : SITE
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}

export function titleToSlug(title: string): string {
  return title
    .replace(/ﷺ/g, "pbuh")
    .replace(/&/g, "and")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export const STAR_PATH =
  "M50,12 L55.74,36.14 L76.87,23.13 L63.86,44.26 L88,50 L63.86,55.74 L76.87,76.87 L55.74,63.86 L50,88 L44.26,63.86 L23.13,76.87 L36.14,55.74 L12,50 L36.14,44.26 L23.13,23.13 L44.26,36.14 Z"

export function IslamicPattern({ color = "#0A7A58", opacity = 0.06 }: { color?: string; opacity?: number }) {
  const id = `pat-${color.replace("#", "")}-${opacity}`
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d={STAR_PATH} fill="none" stroke={color} strokeWidth="0.9" opacity={opacity} />
          <circle cx="50" cy="50" r="11" fill="none" stroke={color} strokeWidth="0.5" opacity={opacity * 0.55} />
          <circle cx="0"   cy="0"   r="6" fill="none" stroke={color} strokeWidth="0.4" opacity={opacity * 0.35} />
          <circle cx="100" cy="0"   r="6" fill="none" stroke={color} strokeWidth="0.4" opacity={opacity * 0.35} />
          <circle cx="0"   cy="100" r="6" fill="none" stroke={color} strokeWidth="0.4" opacity={opacity * 0.35} />
          <circle cx="100" cy="100" r="6" fill="none" stroke={color} strokeWidth="0.4" opacity={opacity * 0.35} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function LogoMark({ dark = false, size = 156 }: { dark?: boolean; size?: number }) {
  return (
    <div className="flex-shrink-0 overflow-hidden" style={{ width: size, height: 70 }}>
      <img
        src={dark ? "/Images/OIA Logo Dark Mode.webp" : "/Images/OIA Logo Light Mode.webp"}
        alt="Open Islamic Academy logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export function useCounter(end: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    const tick = (ts: number) => {
      if (startTime === null) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, active])
  return count
}

export function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const count = useCounter(value, 2400, inView)
  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2 py-8 px-4">
      <div className="text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/60 tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</div>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #0A7A58 0%, #065A42 55%, #084D38 100%)" }}>
      <IslamicPattern color="#ffffff" opacity={0.065} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,164,84,0.18), transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-6">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/55">Our Impact</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-white">Trusted by Students Worldwide</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {STATS.map(({ value, suffix, label }, i) => (
            <div key={label} style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : undefined }}>
              <StatCell value={value} suffix={suffix} label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0C1B2E 0%, #0A1F38 50%, #0C1B2E 100%)" }}>
      <IslamicPattern color="#C9A454" opacity={0.065} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(10,122,88,0.15), transparent 70%)" }} />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ border: "2px solid rgba(201,164,84,0.3)" }}>
              <svg viewBox="0 0 100 100" fill="none" stroke="#C9A454" strokeWidth="3" style={{ width: 40, height: 40 }}>
                <path d={STAR_PATH} />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/enroll" className="inline-flex items-center gap-2.5 text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full hover:-translate-y-0.5 transition-all duration-200" style={{ background: "#0A7A58", boxShadow: "0 16px 48px rgba(10,122,88,0.45)" }}>
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2.5 text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full hover:-translate-y-0.5 transition-all duration-200" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}>
              Contact Us
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-7" style={{ color: "rgba(255,255,255,0.45)" }}>
            {["No Hidden Fees", "Cancel Anytime", "Certified Scholars", "24/7 Support"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <CheckCircle className="w-4 h-4 text-primary" /> {t}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function PageHero({ badge, title, subtitle, photo }: { badge: string; title: React.ReactNode; subtitle: string; photo?: string }) {
  return (
    <section className="relative pt-[68px] overflow-hidden">
      {photo ? (
        <div className="relative h-[420px] lg:h-[500px]">
          <img src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&h=600&q=80`} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,27,46,0.88) 0%, rgba(10,122,88,0.55) 100%)" }} />
          <IslamicPattern color="#C9A454" opacity={0.04} />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
              <HeroContent badge={badge} title={title} subtitle={subtitle} light />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #0C1B2E 0%, #0A1F38 60%, #065A42 100%)" }}>
          <IslamicPattern color="#C9A454" opacity={0.04} />
          <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
            <HeroContent badge={badge} title={title} subtitle={subtitle} light />
          </div>
        </div>
      )}
    </section>
  )
}

function HeroContent({ badge, title, subtitle, light }: { badge: string; title: React.ReactNode; subtitle: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-5" style={{ background: "rgba(201,164,84,0.15)", color: "#C9A454", border: "1px solid rgba(201,164,84,0.25)" }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" style={{ width: 12, height: 12 }}>
          <path d={STAR_PATH} />
        </svg>
        {badge}
      </span>
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: light ? "white" : "var(--foreground)" }}>
        {title}
      </h1>
      <p className="text-lg leading-relaxed max-w-2xl" style={{ color: light ? "rgba(255,255,255,0.72)" : "var(--muted-foreground)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {subtitle}
      </p>
    </motion.div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const COURSES = [
  { Icon: BookOpen,      title: "Quran Reading & Pronunciation",              desc: "Master Tajweed rules and recite with precise, beautiful articulation.",      level: "Beginner",     duration: "3 months"  },
  { Icon: Star,          title: "Quran Memorization (Hifz-ul-Quran)",         desc: "Systematic Hifz programme with expert supervision and proven methods.",     level: "All Levels",   duration: "1-3 years" },
  { Icon: Bookmark,      title: "Essential Surahs Memorization",              desc: "Memorize key Surahs for daily salah and a stronger spiritual routine.",      level: "Beginner",     duration: "2 months"  },
  { Icon: Eye,           title: "Understanding Quran Through Translation",    desc: "Grasp every verse with clear, modern-language translation.",                level: "Beginner",     duration: "4 months"  },
  { Icon: FileText,      title: "Word-to-Word Quran Translation",             desc: "Build Quranic vocabulary by studying each Arabic word directly.",           level: "Intermediate", duration: "6 months"  },
  { Icon: Layers,        title: "Quranic Tafseer & Explanation",              desc: "Explore the deeper meanings and contexts behind Quranic verses.",           level: "Intermediate", duration: "1 year"    },
  { Icon: Search,        title: "Hadith & Sunnah Studies",                   desc: "Study authenticated hadith collections and the Prophet's noble way.",       level: "Intermediate", duration: "6 months"  },
  { Icon: Shield,        title: "Fundamentals of Islamic Beliefs",           desc: "Solid grounding in Aqeedah — core tenets every Muslim must know.",         level: "Beginner",     duration: "3 months"  },
  { Icon: ShieldCheck,   title: "Detailed Islamic Beliefs (Aqeedah)",        desc: "In-depth theology and rational proofs for Islamic beliefs.",                level: "Advanced",     duration: "8 months"  },
  { Icon: Heart,         title: "Islamic Etiquette & Manners",               desc: "Cultivate refined character through authentic Islamic adab.",               level: "Beginner",     duration: "2 months"  },
  { Icon: Compass,       title: "Five Pillars of Islam",                     desc: "Comprehensive study of Shahada, Salah, Zakat, Sawm, and Hajj.",            level: "Beginner",     duration: "4 months"  },
  { Icon: GraduationCap, title: "Dars-e-Nizami",                             desc: "The traditional Islamic seminary curriculum for advanced seekers.",         level: "Advanced",     duration: "2-3 years" },
  { Icon: Globe,         title: "Islamic Sharia",                            desc: "Islamic law, its sources, principles, and contemporary relevance.",         level: "Advanced",     duration: "1 year"    },
  { Icon: Award,         title: "Finality of Prophethood (Khatm-e-Nabuwwat)", desc: "Scholarly proof and detailed study of the seal of prophethood.",         level: "Advanced",     duration: "5 months"  },
  { Icon: Feather,       title: "Arabic Language",                           desc: "Learn classical and modern Arabic from beginner to proficiency.",           level: "All Levels",   duration: "6 months"  },
  { Icon: BookOpen,      title: "Islamic Jurisprudence (Fiqh)",              desc: "Practical rulings on worship, transactions, and daily Muslim life.",        level: "Intermediate", duration: "8 months"  },
  { Icon: Lightbulb,     title: "Islamic Philosophy & Theology",             desc: "Rational proofs for Islamic beliefs and classical kalam sciences.",         level: "Advanced",     duration: "1 year"    },
  { Icon: Bookmark,      title: "Stories of the Prophets",                   desc: "Timeless wisdom from the lives of all Prophets in the Quran.",             level: "Beginner",     duration: "4 months"  },
  { Icon: Feather,       title: "Biography of Prophet Muhammad ﷺ",          desc: "The complete Seerah — his life, character, and eternal legacy.",           level: "All Levels",   duration: "6 months"  },
  { Icon: Search,        title: "Critical Study of Liberal Ideologies",      desc: "Islamic scholarly responses to modern secular and liberal thought.",       level: "Advanced",     duration: "5 months"  },
]

export const WHY = [
  { Icon: BookOpen,      title: "Authentic Islamic Knowledge",  desc: "Every lesson is grounded in the Quran, Sunnah, and classical scholarship.",                   photo: "photo-1578662996442-48f60103fc96" },
  { Icon: GraduationCap, title: "Qualified Scholars",           desc: "Learn directly from certified, experienced Islamic scholars from around the world.",            photo: "photo-1522202176988-66273c2fd55f" },
  { Icon: Layers,        title: "Structured Curriculum",        desc: "Purposefully designed learning pathways from beginner to advanced levels.",                     photo: "photo-1434030216411-0b793f4b4173" },
  { Icon: Users,         title: "Interactive Online Classes",   desc: "Live sessions, Q&A discussions, and peer learning for a truly rich experience.",                photo: "photo-1516321318423-f06f85e504b3" },
  { Icon: Heart,         title: "Affordable Learning",          desc: "Premium Islamic education made accessible to every background and budget worldwide.",           photo: "photo-1564769662533-4f00a87b4056" },
  { Icon: Award,         title: "Certificate Upon Completion",  desc: "Earn accredited certificates recognised by Islamic institutions globally.",                    photo: "photo-1523050854058-8df90110c9f1" },
  { Icon: Lightbulb,     title: "Dedicated Student Support",    desc: "Dedicated mentors and advisors guide you through every step of your learning journey.",        photo: "photo-1543269865-cbf427effbad" },
  { Icon: Bookmark,      title: "Lifetime Learning Resources",  desc: "Access recorded lectures, notes, and references anytime, from anywhere, forever.",             photo: "photo-1481627834876-b7833e8f5570" },
]

export const TESTI = [
  { name: "Ahmad Hassan",    loc: "London, UK",          init: "AH", col: "#0A7A58", text: "Open Islamic Academy transformed my understanding of the Quran. The scholars are incredibly knowledgeable and patient. I completed the Tafseer course in six months and feel spiritually enriched like never before." },
  { name: "Fatima Al-Zahra", loc: "Toronto, Canada",     init: "FA", col: "#C9A454", text: "As a working mother, flexible scheduling was essential. The recorded classes and live Q&A sessions fit perfectly around my life. The Arabic course gave me confidence I never thought possible." },
  { name: "Muhammad Yusuf",  loc: "Karachi, Pakistan",   init: "MY", col: "#0C1B2E", text: "I enrolled in the Dars-e-Nizami programme and the depth of knowledge from the teachers is extraordinary. The structured curriculum is on par with any traditional seminary. Highly recommend." },
  { name: "Aisha Rahman",    loc: "Dubai, UAE",          init: "AR", col: "#7C3AED", text: "The Hifz programme is outstanding. My son memorised 10 Juz in one year under expert guidance. The personalised attention each student receives is what sets this academy apart." },
  { name: "Ibrahim Abdullah", loc: "New York, USA",      init: "IA", col: "#0A7A58", text: "I was sceptical about online Islamic education but Open Islamic Academy proved me wrong. The course on Islamic Beliefs was thorough, academically rigorous, and spiritually uplifting." },
  { name: "Khadijah Malik",  loc: "Birmingham, UK",      init: "KM", col: "#C9A454", text: "The Biography of Prophet Muhammad ﷺ course brought me to tears multiple times. The scholar's delivery is passionate and deeply knowledgeable. A life-changing experience, alhamdulillah." },
]

export const STEPS = [
  { num: "01", title: "Choose Your Course",             desc: "Browse our catalogue and select the course that matches your level and goals." },
  { num: "02", title: "Register Online",                desc: "Complete a simple registration and connect with your assigned scholar." },
  { num: "03", title: "Attend Live & Recorded Classes", desc: "Join interactive live sessions or learn at your own pace with recordings." },
  { num: "04", title: "Receive Your Certificate",       desc: "Pass your assessment and earn a recognised certificate of completion." },
]

export const STATS = [
  { value: 5000, suffix: "+", label: "Students Worldwide" },
  { value: 25,   suffix: "+", label: "Professional Courses" },
  { value: 20,   suffix: "+", label: "Qualified Teachers" },
  { value: 95,   suffix: "%", label: "Student Satisfaction" },
]
