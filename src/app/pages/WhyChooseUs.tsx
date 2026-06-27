import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { IslamicPattern, Reveal, PageHero, WHY, STEPS, StatsBar, CTASection, SEO } from "../shared"

// ─── Alternating Feature Rows ─────────────────────────────────────────────────
function FeatureRow({ Icon, title, desc, flip, index }: {
  Icon: React.ElementType; title: string; desc: string; photo?: string; flip: boolean; index: number
}) {
  return (
    <Reveal delay={0.05}>
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Text */}
        <div className="flex flex-col gap-5 justify-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-primary">
            0{index + 1} / 0{WHY.length}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {desc}
          </p>
          <div className="h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Image */}
        <div className="relative h-full">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
            <img
              src={`/Images/Why Choose/${title}.webp`}
              alt={title}
              className="w-full h-full object-cover"
              style={{ minHeight: 280 }}
            />
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl -z-10"
            style={{ background: "linear-gradient(135deg, rgba(10,122,88,0.2), rgba(201,164,84,0.15))", border: "1px solid rgba(10,122,88,0.15)" }}
          />
          <div
            className="absolute -top-5 -left-5 w-16 h-16 rounded-xl -z-10"
            style={{ background: "rgba(201,164,84,0.12)", border: "1px solid rgba(201,164,84,0.2)" }}
          />
        </div>
      </div>
    </Reveal>
  )
}

function AlternatingSections() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.035} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 flex flex-col gap-24 lg:gap-32">
        {WHY.map((item, i) => (
          <FeatureRow key={item.title} {...item} flip={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  )
}

// ─── Process Steps ────────────────────────────────────────────────────────────
function Process() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">How It Works</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Your <span className="text-primary italic">Learning Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Getting started is simple. Four steps to begin your path to authentic Islamic knowledge.
          </p>
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

// ─── Comparison Table ─────────────────────────────────────────────────────────
function Comparison() {
  const rows = [
    { feature: "Qualified Islamic Scholars",     us: true,  others: false },
    { feature: "Structured Curriculum",          us: true,  others: false },
    { feature: "Live & Recorded Classes",        us: true,  others: false },
    { feature: "Accredited Certificates",        us: true,  others: false },
    { feature: "Dedicated Student Support",      us: true,  others: false },
    { feature: "Affordable Pricing",             us: true,  others: false },
    { feature: "Lifetime Access to Resources",   us: true,  others: false },
    { feature: "Authentic Quran & Sunnah Focus", us: true,  others: false },
  ]
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "var(--secondary)" }}>
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.04} /></div>
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">The Advantage</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Open Islamic Academy <span className="text-primary italic">vs. Others</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-primary/5 border-b border-border px-6 py-4">
              <div className="text-sm font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Feature</div>
              <div className="text-sm font-bold text-primary text-center">Open Islamic Academy</div>
              <div className="text-sm font-bold text-muted-foreground text-center">Others</div>
            </div>
            {rows.map(({ feature, us, others }, i) => (
              <div key={feature} className={`grid grid-cols-3 px-6 py-4 items-center ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
                <div className="text-sm text-foreground font-medium">{feature}</div>
                <div className="text-center">
                  {us ? <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm">✓</span>
                       : <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-400 font-bold text-sm">✗</span>}
                </div>
                <div className="text-center">
                  {others ? <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm">✓</span>
                           : <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground font-bold text-sm">✗</span>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function WhyChooseUs() {
  return (
    <>
      <SEO
        title="Why Choose Open Islamic Academy for Online Islamic Learning"
        description="Discover why 5,000+ students trust Open Islamic Academy — qualified scholars, structured curriculum, live classes, accredited certificates, affordable pricing and lifetime access."
        keywords="why choose Islamic academy, best online Islamic school, qualified Islamic teachers, Islamic certificate online, structured Islamic curriculum, affordable Islamic education"
        canonical="/why-choose-us"
      />
      <PageHero
        badge="Why Choose Us"
        title={<>The Open Islamic Academy <span className="text-primary italic">Difference</span></>}
        subtitle="We combine the rigour of traditional Islamic scholarship with the accessibility of modern online learning — so you never have to compromise on quality or convenience."
        photo="photo-1522202176988-66273c2fd55f"
      />
      <AlternatingSections />
      <Comparison />
      <Process />
      <StatsBar />
      <CTASection
        title={<>Experience the <span className="italic" style={{ color: "#C9A454" }}>Difference Today</span></>}
        subtitle="Join thousands of students who chose Open Islamic Academy for its unmatched combination of authentic scholarship and modern learning."
      />
    </>
  )
}
