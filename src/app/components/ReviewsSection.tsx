import { useState } from "react"
import { CheckCircle, Send, Star } from "lucide-react"
import { IslamicPattern, Reveal, TESTI } from "../shared"

const REVIEW_ENDPOINT = "https://formsubmit.co/ajax/info@openislamicacademy.com"

export default function ReviewsSection() {
  const [form, setForm] = useState({ name: "", email: "", review: "", website: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const submitReview = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch(REVIEW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.review,
          _replyto: form.email,
          _subject: `New website review from ${form.name}`,
          _template: "table",
          _honey: form.website,
        }),
      })

      if (!response.ok) throw new Error("Review delivery failed")
      setForm({ name: "", email: "", review: "", website: "" })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative overflow-hidden bg-card py-24 lg:py-32" id="reviews">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.035} /></div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Community Reviews</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground lg:text-5xl">
            What Our <span className="italic text-primary">Students Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Read experiences from our learning community or share your own journey with Open Islamic Academy.
          </p>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {TESTI.slice(0, 4).map((review, index) => (
              <Reveal key={review.name} delay={(index % 2) * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    “{review.text}”
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: review.col }}>
                      {review.init}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.loc}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-border bg-background p-6 shadow-2xl shadow-primary/8 sm:p-8 lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Share Your Experience</span>
              <h3 className="mt-2 text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Submit a Review</h3>
              <p className="mb-7 mt-2 text-sm leading-relaxed text-muted-foreground">Your review will be emailed to our team and published after approval.</p>

              {status === "sent" ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-8 text-center">
                  <CheckCircle className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h4 className="font-bold text-foreground">JazakAllahu Khairan!</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Your review has been sent for approval.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-5 text-sm font-bold text-primary hover:underline">Write another review</button>
                </div>
              ) : (
                <form onSubmit={submitReview} className="flex flex-col gap-5">
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} className="hidden" aria-hidden="true" />
                  <div>
                    <label htmlFor="review-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">Name *</label>
                    <input id="review-name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="review-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">Email Address *</label>
                    <input id="review-email" required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="your@email.com" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="review-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">Review *</label>
                    <textarea id="review-message" required minLength={20} rows={5} value={form.review} onChange={(event) => setForm({ ...form, review: event.target.value })} placeholder="Tell us about your learning experience..." className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20" />
                  </div>
                  {status === "error" && <p role="alert" className="text-sm font-medium text-red-500">We could not send your review. Please check your connection and try again.</p>}
                  <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70">
                    <Send className="h-4 w-4" /> {status === "sending" ? "Sending Review..." : "Submit Review"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
