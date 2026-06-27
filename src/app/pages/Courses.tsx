import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight, Search } from "lucide-react"
import { IslamicPattern, Reveal, PageHero, COURSES, CTASection, titleToSlug, SEO } from "../shared"

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"]

export default function Courses() {
  const [search, setSearch] = useState("")
  const [level, setLevel] = useState("All Levels")

  const filtered = COURSES.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
    const matchLevel  = level === "All Levels" || c.level === level || c.level === "All Levels"
    return matchSearch && matchLevel
  })

  return (
    <>
      <SEO
        title="All Islamic Courses — Quran, Arabic, Hadith, Fiqh & More"
        description="Browse 25+ online Islamic courses covering Quran recitation, Tajweed, Hifz, Arabic language, Hadith, Aqeedah, Fiqh, Seerah and more. All levels. Taught by qualified scholars."
        keywords="Islamic courses online, Quran recitation course, Tajweed online, learn Arabic online, Hadith course, Aqeedah course, Fiqh online, Islamic jurisprudence, Seerah course, Hifz programme online"
        canonical="/courses"
      />
      <PageHero
        badge="Our Curriculum" crumb="Courses"
        title={<>All <span className="text-primary italic">Courses</span></>}
        subtitle="Explore our full catalogue of Islamic courses — from foundational Quran recitation to advanced Islamic sciences. Every course is taught by qualified scholars."
        photo="/Images/About Us/Quran Studies.webp"
      />

      {/* Filter Bar */}
      <section className="py-10 bg-card border-b border-border sticky top-[68px] z-40 backdrop-blur-xl bg-card/90">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                  style={{
                    background: level === l ? "#0A7A58" : "var(--background)",
                    color: level === l ? "white" : "var(--muted-foreground)",
                    border: level === l ? "1px solid #0A7A58" : "1px solid var(--border)",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "var(--secondary)" }}>
        <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.04} /></div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No courses found. Try a different search or filter.</p>
              <button onClick={() => { setSearch(""); setLevel("All Levels") }} className="mt-4 text-primary font-semibold underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(({ title, desc, level: lvl, duration }, i) => (
                <Reveal key={title} delay={(i % 4) * 0.06}>
                  <div className="group h-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/28 hover:shadow-2xl hover:shadow-primary/7 hover:-translate-y-1.5 transition-all duration-300">
                    {/* Image */}
                    <div className="overflow-hidden flex-shrink-0">
                      <img
                        src={`/Images/Courses Images/${title}.webp`}
                        alt={title}
                        loading="lazy"
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Level badge */}
                    <div className="px-4 pt-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: lvl === "Beginner" ? "rgba(10,122,88,0.1)" : lvl === "Advanced" ? "rgba(124,58,237,0.1)" : "rgba(201,164,84,0.12)",
                          color: lvl === "Beginner" ? "#0A7A58" : lvl === "Advanced" ? "#7C3AED" : "#92742A",
                        }}>
                        {lvl}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 flex-1 px-4 pt-2 pb-2">
                      <h3 className="font-bold text-foreground text-sm leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                      <p className="text-xs text-primary font-semibold">Duration: {duration}</p>
                    </div>

                    <div className="flex items-center gap-2 px-4 pb-4">
                      <Link
                        to={`/courses/${titleToSlug(title)}`}
                        className="flex-1 inline-flex items-center justify-center border border-primary text-primary font-bold px-3 py-2 rounded-full text-xs hover:bg-primary/8 transition-all"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/enroll?course=${encodeURIComponent(title)}`}
                        className="flex-1 inline-flex items-center justify-center bg-primary text-primary-foreground font-bold px-3 py-2 rounded-full text-xs shadow-md shadow-primary/25 hover:bg-primary/90 transition-all"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.035} /></div>
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our advisors are happy to guide you to the perfect course for your level, goals, and schedule. Reach out anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
                Talk to an Advisor <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/enroll" className="inline-flex items-center gap-2 text-primary font-bold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full border border-primary/25 hover:bg-primary/6 transition-all">
                Enroll Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={<>Ready to Begin Your <span className="italic" style={{ color: "#C9A454" }}>Islamic Journey?</span></>}
        subtitle="Enroll in any of our 25+ courses today and start learning from certified scholars in a structured, flexible environment."
      />
    </>
  )
}
