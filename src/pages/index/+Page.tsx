import {
  AlertTriangle,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  DollarSign,
  Menu,
  PhoneCall,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import "@/index.css";

const demoUrl = "https://calendar.app.google/Q72zBkc18G6fYy8A7";
const contactEmailLink = "mailto:chris@vrelte.com";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-it-matters", label: "Why it matters" },
  { href: "#pricing", label: "Pricing" },
  { href: demoUrl, label: "Book a demo", external: true },
];

const lossStats = [
  {
    number: "42%",
    label: "average call booking rate across trades",
    meaning:
      "ServiceTitan benchmark data from thousands of HVAC, plumbing, electrical, and other trade businesses.",
    source: "1",
  },
  {
    number: "24%",
    label: "booking rate for shops with fewer than 5 techs",
    meaning:
      "This is the painful ICP number: smaller shops lose the majority of calls they already paid to generate.",
    source: "2",
  },
  {
    number: "7x",
    label: "more likely to qualify a lead if you respond within an hour",
    meaning:
      "The HBR study analyzed 1.25 million leads across 29 B2C and 13 B2B companies.",
    source: "3",
  },
  {
    number: "60x",
    label: "higher conversion probability inside that first hour",
    meaning:
      "The same study found a massive gap between responding within an hour and waiting a day.",
    source: "3",
  },
  {
    number: "Peak season",
    label: "concentrates a large share of annual HVAC revenue",
    meaning:
      "IBISWorld industry analysis reinforces the obvious operational problem: your busiest months are when the phone is hardest to answer.",
    source: "4",
  },
  {
    number: "$650",
    label: "estimated cost per HVAC callback",
    meaning:
      "ACCA's HVAC Blog puts real dollars on repeat visits, admin time, and lost service-call opportunity.",
    source: "5",
  },
];

const steps = [
  {
    title: "Lead comes in",
    text: "Phone call, website form, Angi, Thumbtack, or LSA. Day, night, Sunday, 2 AM thunderstorm.",
  },
  {
    title: "Vrelte responds instantly",
    text: "Natural conversation, your company's name, your service area. Not a chatbot. Not a voicemail tree.",
  },
  {
    title: "It asks the right questions",
    text: "Job type, address, urgency, system age, access, and exactly what your techs need.",
  },
  {
    title: "It books the job",
    text: "Qualified leads land in your calendar. Emergencies get flagged. Time-wasters get politely filtered.",
  },
  {
    title: "You show up and close",
    text: "Fully briefed, with context, on the right truck, at the right time.",
  },
];

const switchReasons = [
  {
    icon: Clock3,
    title: "Answers after 5 PM",
    text: "The majority of calls to HVAC businesses happen outside traditional business hours. That is when the AC died, the pipe burst, or the homeowner finally got home.",
    source: "6",
  },
  {
    icon: DollarSign,
    title: "Works at your existing booking rate - times two",
    text: "If the typical shop converts 42% of inbound calls, capturing the calls you are currently losing makes the math work even at conservative close rates.",
    source: "1",
  },
  {
    icon: ShieldCheck,
    title: "Never forgets a qualifying question",
    text: "Every call collects the same structured info so your techs roll up prepared.",
  },
  {
    icon: Zap,
    title: "Does not take a summer off",
    text: "During peak season your call volume spikes, your techs are out, and your office staff is drowning. Vrelte scales with no extra headcount.",
  },
];

const trades = [
  "HVAC contractors - emergency triage, system-age intake, peak-season surge handling",
  "Roofers - storm damage, insurance context, inspection bookings",
  "Plumbers - leak severity, water-off urgency, parts and brand capture",
  "Any 1-10 truck shop whose phone rings while crews are on a roof",
];

const features = [
  "Full setup done for you in under an hour",
  "AI lead response and qualification",
  "Instant booking to your calendar",
  "Emergency routing to your on-call tech",
  "Unlimited leads with no per-interaction charges",
  "Ongoing support and tuning",
];

const faqs = [
  {
    q: "Does it sound like a robot?",
    a: "No. Most callers do not realize they are talking to AI until you tell them.",
  },
  {
    q: "What if someone asks something the AI cannot answer?",
    a: 'It says "let me get a technician on that and call you right back," then texts you the transcript.',
  },
  {
    q: "Do I need to change my phone system?",
    a: "No. We forward your existing number. Setup in under an hour.",
  },
  {
    q: "What about my CRM?",
    a: "Vrelte drops qualified leads into ServiceTitan, Housecall Pro, Jobber, or whatever you use. If you do not have one, it texts you the lead directly.",
  },
  {
    q: "Is this just a chatbot?",
    a: "No. It handles real voice calls. Chat and SMS are included but optional.",
  },
];

const sources = [
  {
    id: "1",
    title:
      "ServiceTitan - Data Report: Average Call Booking Rates, October 2022",
    href: "https://www.servicetitan.com/blog/data-call-booking-rates",
  },
  {
    id: "2",
    title:
      "ServiceTitan - Same benchmark report, booking rates by business size",
    href: "https://www.servicetitan.com/blog/data-call-booking-rates",
  },
  {
    id: "3",
    title:
      "Oldroyd, McElheran, and Elkington - The Short Life of Online Sales Leads, Harvard Business Review, March 2011",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    id: "4",
    title:
      "IBISWorld - HVAC industry seasonal revenue analysis, original report available by subscription",
    href: "https://www.ibisworld.com/",
  },
  {
    id: "5",
    title:
      "Air Conditioning Contractors of America - The True Cost of Callbacks, ACCA HVAC Blog, October 2025",
    href: "https://hvac-blog.acca.org/the-true-cost-of-callbacks-and-how-to-stop-the-bleeding/",
  },
  {
    id: "6",
    title: "ACHR News - Using Software to Convert Calls into Cash",
    href: "https://achrnews.com/articles/132458-using-software-to-convert-calls-into-cash",
  },
];

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const track = (event: "Contact" | "Schedule") => {
    if (typeof fbq === "function") {
      fbq("track", event);
    }
  };

  const startSetup = () => {
    setIsMobileMenuOpen(false);
    window.location.href = contactEmailLink;
    track("Contact");
  };

  const bookDemo = () => {
    setIsMobileMenuOpen(false);
    window.open(demoUrl, "_blank");
    track("Schedule");
  };

  return (
    <div className="min-h-screen bg-[#F7F8F2] text-[#141711]">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F8F2] px-5 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <Brand />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="grid h-11 w-11 place-items-center border border-[#D5D7CA] bg-white text-[#141711]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between border border-[#D5D7CA] bg-white px-4 py-4 text-lg font-semibold"
              >
                {link.label}
                <ChevronRight className="h-5 w-5 text-[#D94827]" />
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={startSetup}
            className="mt-6 w-full bg-[#D94827] px-5 py-4 text-base font-bold text-white"
          >
            Get set up free
          </button>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-[#D5D7CA] bg-[#F7F8F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#4E5549] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:text-[#141711]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={bookDemo}
              className="border border-[#AEB4A7] bg-white px-4 py-2 text-sm font-semibold text-[#141711] hover:border-[#141711]"
            >
              Book demo
            </button>
            <button
              type="button"
              onClick={startSetup}
              className="bg-[#D94827] px-4 py-2 text-sm font-bold text-white hover:bg-[#B83218]"
            >
              Get set up free
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="grid h-11 w-11 place-items-center border border-[#D5D7CA] bg-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-[#D5D7CA] bg-[#141711] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 md:py-18 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 bg-[#F2C14E] px-3 py-2 text-xs font-black uppercase tracking-wide text-[#141711]">
                <AlertTriangle className="h-4 w-4" />
                Built for contractors: HVAC · Roofing · Plumbing
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                A typical contractor books just 42% of the calls they already
                paid to generate.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#DDE2D7] md:text-xl">
                That number comes from ServiceTitan's own benchmark data - not
                a guess.<sup>1</sup>{" "}
                <strong className="text-white">
                  The other 58% walk, hang up, or call your competitor.
                </strong>
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#C5CDC0]">
                Vrelte is the system that catches the leads your phone and your
                inbox are dropping. It answers instantly, qualifies the job, and
                books it - 24/7.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={startSetup}
                  className="inline-flex items-center justify-center gap-2 bg-[#D94827] px-6 py-4 text-base font-black text-white hover:bg-[#B83218]"
                >
                  Get set up free
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={bookDemo}
                  className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white px-6 py-4 text-base font-bold text-[#141711] hover:bg-[#F2C14E]"
                >
                  See the 2-min demo
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-sm text-[#AEB8A8]">
                No credit card. No contract. You only talk pricing once it is
                winning you jobs.
              </p>
            </div>

            <div className="border border-white/15 bg-[#20251D] p-4 shadow-2xl md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#F2C14E]">
                    Live call
                  </p>
                  <p className="mt-1 text-xl font-black">9:47 PM · AC down</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center bg-[#D94827]">
                  <PhoneCall className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-5 grid gap-3 text-sm">
                <Bubble label="Caller" tone="light">
                  Hi, my AC just stopped blowing cold. It is 94 in the house.
                </Bubble>
                <Bubble label="Vrelte" tone="accent">
                  I am sorry to hear that. Can I get your address and the best
                  number to reach you?
                </Bubble>
                <Bubble label="Caller" tone="light">
                  It is maybe 8 years old. Fan runs but it is blowing hot.
                </Bubble>
              </div>
              <div className="mt-5 border border-[#345E50] bg-[#EAF7EF] p-4 text-[#123227]">
                <p className="text-xs font-black uppercase tracking-wide">
                  Lead in your dashboard
                </p>
                <div className="mt-3 grid gap-2 text-sm font-semibold sm:grid-cols-2">
                  <span>Qualified: Yes</span>
                  <span>Emergency: Yes</span>
                  <span>System age: 8yr</span>
                  <span>Booked: tomorrow 8:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-it-matters"
          className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20"
        >
          <SectionIntro
            eyebrow="The real numbers"
            title="This is not AI-hype math. It is the data your industry already publishes."
            text="You are not losing jobs because your work is bad. You are losing them because the phone rang while you were in an attic, the lead went to voicemail, and the homeowner called the next name on Google."
          />
          <div className="mt-8 divide-y divide-[#D5D7CA] border-y border-[#D5D7CA] bg-white">
            {lossStats.map((stat) => (
              <div
                key={stat.label}
                className="grid gap-3 px-4 py-5 md:grid-cols-[0.28fr_0.38fr_0.34fr] md:px-6"
              >
                <p className="text-3xl font-black text-[#D94827]">
                  {stat.number}
                  <sup className="ml-1 text-xs text-[#697064]">
                    {stat.source}
                  </sup>
                </p>
                <p className="text-base font-bold text-[#141711]">
                  {stat.label}
                </p>
                <p className="text-sm leading-6 text-[#4E5549]">
                  {stat.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-[#D5D7CA] bg-white py-14 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionIntro
              eyebrow="How it works"
              title="From ring to booked job while the customer still has their phone in hand."
              text="You do not change how you work. You just stop losing the majority of jobs your phone system is eating."
            />
            <div className="mt-10 grid gap-3 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-[#D5D7CA] bg-[#F7F8F2] p-5"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#141711] text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4E5549]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionIntro
            eyebrow="Why it works"
            title="Four things voicemail and a busy office will never do."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {switchReasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="border border-[#D5D7CA] bg-white p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#F2C14E] text-[#141711]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black">
                    {reason.title}
                    {reason.source && (
                      <sup className="ml-1 text-xs text-[#697064]">
                        {reason.source}
                      </sup>
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E5549]">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#D5D7CA] bg-[#EAF1F6] py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-[#245D7A]">
                Who it is for
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Built specifically for the trades.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#3E505A]">
                Not a generic chatbot. Not a call center reading from a script.
                Vrelte is built around the way HVAC, roofing, and plumbing calls
                actually happen.
              </p>
            </div>
            <div className="grid gap-3">
              {trades.map((trade) => (
                <div
                  key={trade}
                  className="flex gap-3 border border-[#B5C6D1] bg-white px-4 py-4"
                >
                  <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#D94827]" />
                  <p className="text-sm font-semibold leading-6">{trade}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionIntro
            eyebrow="A real call, start to finish"
            title="Caller panics. Vrelte qualifies. Your calendar gets the job."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-3 border border-[#D5D7CA] bg-white p-4 md:p-6">
              <Transcript speaker="Caller" time="9:47 PM">
                Hi, my AC just stopped blowing cold. It is 94 in the house.
              </Transcript>
              <Transcript speaker="Vrelte">
                I am sorry to hear that. Let us get someone out. Can I get your
                address and the best number to reach you?
              </Transcript>
              <Transcript speaker="Caller">
                It is maybe 8 years old. Fan runs but it is blowing hot.
              </Transcript>
              <Transcript speaker="Vrelte">
                Got it. I can book our on-call tech for tonight at the
                after-hours rate, or the first morning slot at 8:30. Which works
                better?
              </Transcript>
            </div>
            <div className="border border-[#345E50] bg-[#123227] p-5 text-white md:p-6">
              <p className="text-sm font-black uppercase tracking-wide text-[#84D69A]">
                Booked lead
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  ["Status", "Qualified"],
                  ["Emergency", "Yes"],
                  ["System age", "8 years"],
                  ["Symptom", "Warm air, fan running"],
                  ["Booked", "Next morning, 8:30 AM"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border border-white/15 bg-white/8 px-4 py-3"
                  >
                    <span className="text-sm text-[#B9D8C2]">{label}</span>
                    <span className="text-sm font-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="border-y border-[#D5D7CA] bg-white py-14 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-[#D94827]">
                  Pricing
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  We set it up. You use it. You pay once it is making you money.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#4E5549]">
                  No setup fee. No demo charge. No annual contract. Use Vrelte
                  free for 14 days. Count the jobs it books. Then we talk
                  pricing.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={startSetup}
                    className="inline-flex items-center justify-center gap-2 bg-[#D94827] px-6 py-4 font-black text-white hover:bg-[#B83218]"
                  >
                    Get set up free
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={bookDemo}
                    className="inline-flex items-center justify-center gap-2 border border-[#AEB4A7] bg-white px-6 py-4 font-bold hover:border-[#141711]"
                  >
                    Book a 15-min demo
                  </button>
                </div>
              </div>
              <div className="border border-[#D5D7CA] bg-[#F7F8F2] p-5 md:p-7">
                <p className="text-xl font-black">Included from day one</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 border border-[#D5D7CA] bg-white p-4"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1E7E4F]" />
                      <p className="text-sm font-semibold leading-6">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <SectionIntro eyebrow="Fast answers" title="What owners ask first." />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-[#D5D7CA] bg-white p-5">
                <h3 className="text-lg font-black">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4E5549]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#D94827] px-4 py-14 text-white md:px-8 md:py-18">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-wide text-[#FFE2BE]">
              The 42% your industry books is already the ceiling.
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Vrelte raises it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#FFE8DA]">
              Your competitor answered on the second ring. Yours went to
              voicemail. Get a working system by end of day.
            </p>
            <button
              type="button"
              onClick={startSetup}
              className="mt-8 inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-base font-black text-[#141711] hover:bg-[#F2C14E]"
            >
              Get set up free - running by end of day
              <CalendarCheck className="h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-[#FFE8DA]">
              No credit card. No contract. No sales call.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D5D7CA] bg-[#141711] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <Brand inverse />
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#B8C0B2]">
                AI lead qualification for HVAC, roofing, and plumbing
                contractors.
              </p>
              <p className="mt-6 text-xs text-[#87907F]">
                © {new Date().getFullYear()} Vrelte. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-[#F2C14E]">
                Sources
              </p>
              <ol className="mt-4 grid gap-2 text-xs leading-6 text-[#B8C0B2] md:grid-cols-2">
                {sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {source.id}. {source.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Vrelte Logo" className="h-10 w-10" />
      <span
        className={`text-lg font-black tracking-tight ${
          inverse ? "text-white" : "text-[#141711]"
        }`}
      >
        Vrelte
      </span>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-black uppercase tracking-wide text-[#D94827]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#4E5549]">
          {text}
        </p>
      )}
    </div>
  );
}

function Bubble({
  label,
  children,
  tone,
}: {
  label: string;
  children: ReactNode;
  tone: "light" | "accent";
}) {
  return (
    <div
      className={`max-w-[92%] p-4 ${
        tone === "accent"
          ? "ml-auto bg-[#D94827] text-white"
          : "bg-white text-[#141711]"
      }`}
    >
      <p
        className={`mb-1 text-xs font-black uppercase tracking-wide ${
          tone === "accent" ? "text-[#FFE8DA]" : "text-[#697064]"
        }`}
      >
        {label}
      </p>
      <p className="leading-6">{children}</p>
    </div>
  );
}

function Transcript({
  speaker,
  time,
  children,
}: {
  speaker: string;
  time?: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-[#D5D7CA] bg-[#F7F8F2] p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#697064]">
        <span>{speaker}</span>
        {time && <span>{time}</span>}
      </div>
      <p className="text-sm leading-7 text-[#141711] md:text-base">
        {children}
      </p>
    </div>
  );
}
