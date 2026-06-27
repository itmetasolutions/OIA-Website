import { useState } from "react"
import { Link } from "react-router"
import { motion } from "motion/react"
import { ArrowRight, CheckCircle, Star, Heart, Globe, BookOpen, Shield, Award } from "lucide-react"
import { IslamicPattern, Reveal, PageHero, TESTI, StatsBar, CTASection, STAR_PATH } from "../shared"

// ─── Our Story ────────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfcfb?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Quran study"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-2xl shadow-primary/30">
                <div className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>2018</div>
                <div className="text-sm text-white/75 font-medium mt-1">Founded with a mission</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Our Story</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  A Legacy of <span className="text-primary italic">Authentic Learning</span>
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Founded in 2018, Open Islamic Academy was born from a simple yet powerful vision: to make authentic
                Islamic education accessible to every Muslim, regardless of location or background.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                What began as a small initiative with a handful of scholars has grown into a global platform serving
                over 5,000 students across 30+ countries, all united by their love for knowledge and Islam.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  ["5,000+", "Active Students"],
                  ["25+",    "Courses Offered"],
                  ["20+",    "Expert Scholars"],
                  ["30+",    "Countries Reached"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-background rounded-2xl p-4 border border-border">
                    <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</div>
                    <div className="text-xs text-muted-foreground font-semibold mt-1">{l}</div>
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

// ─── Mission & Vision ─────────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.04} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Our Purpose</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Mission & <span className="text-primary italic">Vision</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=800&h=500&q=80"
                alt="Islamic architecture"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 h-64 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">Our Mission</span>
              </div>
              <div className="p-8 bg-card border border-border rounded-b-3xl -mt-4 relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Making Islamic Knowledge Accessible
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  To provide authentic, structured, and accessible Islamic education to Muslims worldwide, bridging
                  the gap between classical scholarship and the needs of modern learners through technology.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  {["Authentic Scholarship", "Global Accessibility", "Modern Delivery"].map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.14}>
            <div className="relative rounded-3xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&h=500&q=80"
                alt="Arabic calligraphy"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 h-64 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute top-6 left-6">
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#C9A454" }}>Our Vision</span>
              </div>
              <div className="p-8 bg-card border border-border rounded-b-3xl -mt-4 relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A World United Through Knowledge
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  To become the world's most trusted Islamic educational platform, empowering a generation of
                  Muslims grounded in authentic knowledge, strong character, and a vibrant connection to their faith.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  {["Global Muslim Community", "Spiritual Growth", "Academic Excellence"].map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#C9A454" }} />
                      <span className="text-sm font-medium text-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Our Values ───────────────────────────────────────────────────────────────
function Values() {
  const vals = [
    { Icon: Shield,   title: "Authenticity",   desc: "Every course is grounded in the Quran, Sunnah, and the consensus of qualified scholars.",        col: "#0A7A58" },
    { Icon: Heart,    title: "Compassion",      desc: "We care deeply about each student's spiritual, intellectual, and personal growth.",               col: "#C9A454" },
    { Icon: Globe,    title: "Accessibility",   desc: "We believe Islamic knowledge should be available to every Muslim, regardless of where they are.", col: "#7C3AED" },
    { Icon: BookOpen, title: "Excellence",      desc: "We hold ourselves to the highest academic and ethical standards in everything we do.",             col: "#0A7A58" },
    { Icon: Award,    title: "Accountability",  desc: "We take full responsibility for the quality of education and the trust our students place in us.", col: "#C9A454" },
    { Icon: Star,     title: "Dedication",      desc: "Our scholars and staff are passionately committed to the mission of Islamic education.",           col: "#7C3AED" },
  ]
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "var(--secondary)" }}>
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.045} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">What We Stand For</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Our Core <span className="text-primary italic">Values</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vals.map(({ Icon, title, desc, col }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="group bg-card border border-border rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${col}18` }}>
                  <Icon className="w-7 h-7" style={{ color: col }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Islamic Images Strip ─────────────────────────────────────────────────────
function IslamicImagesStrip() {
  const images = [
    { src: "photo-1585036401990-e3e49d0f1e85", label: "Quran Studies" },
    { src: "photo-1507842217343-583bb7270b66", label: "Knowledge" },
    { src: "photo-1481627834876-b7833e8f5570", label: "Library" },
    { src: "photo-1543269865-cbf427effbad", label: "Community" },
  ]
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map(({ src, label }, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=400&h=300&q=80`}
                  alt={label}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "var(--secondary)" }}>
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Student Stories</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            What Our <span className="text-primary italic">Students Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Thousands of students from around the world have transformed their understanding of Islam through our academy.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {TESTI.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="h-full bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => <Star key={s} style={{ width: 13, height: 13, fill: "#C9A454", color: "#C9A454" }} />)}
                </div>
                <div className="text-3xl font-serif leading-none text-primary/30">"</div>
                <p className="text-sm leading-relaxed flex-1 text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: t.col }}>
                    {t.init}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.loc}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Us Strip ─────────────────────────────────────────────────────────────
function WhyStrip() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500&q=80"
                alt="Online learning"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Our Commitment</span>
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Why Students <span className="text-primary italic">Trust Us</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                We combine the rigour of traditional Islamic scholarship with the convenience and quality of modern
                online learning, delivering an experience that is both deeply authentic and practically accessible.
              </p>
              <div className="flex gap-4">
                <Link to="/why-choose-us" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all">
                  Why Choose Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/enroll" className="inline-flex items-center gap-2 text-primary font-bold px-6 py-3 rounded-full border border-primary/25 hover:bg-primary/6 transition-all">
                  Enroll Now
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        badge="Open Islamic Academy"
        title={<>About <span className="text-primary italic">Our Academy</span></>}
        subtitle="Dedicated to authentic Islamic education since 2018 — serving students across 30+ countries with structured, scholar-led online courses."
        photo="photo-1481627834876-b7833e8f5570"
      />
      <OurStory />
      <MissionVision />
      <Values />
      <IslamicImagesStrip />
      <StatsBar />
      <Testimonials />
      <WhyStrip />
      <CTASection
        title={<>Begin Your Islamic <span className="italic" style={{ color: "#C9A454" }}>Learning Journey</span></>}
        subtitle="Join thousands of students worldwide who have transformed their understanding of Islam through our authentic, scholar-led courses."
      />
    </>
  )
}
