import { useState, useEffect } from "react";
import "@/index.css";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#D97706]"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
      <path
        d="M5 8.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#DC2626]"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contactEmailLink = "mailto:chris@vrelte.com";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    window.location.href = contactEmailLink;
    fbq("track", "Contact");
  };

  const handleScheduleClick = () => {
    window.open("https://calendar.app.google/Q72zBkc18G6fYy8A7", "_blank");
    fbq("track", "Schedule");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2A2114]">
      {/* ── Mobile menu overlay ── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#FFFDF7] px-6 py-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="Vrelte Logo" className="mr-3 h-10 w-10" />
              <span className="font-semibold tracking-wide">Vrelte</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="cursor-pointer rounded-full border border-[#E5D3A3] px-4 py-2 text-sm font-medium text-[#2A2114] transition-colors duration-150 hover:bg-[#FFF7E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              Close
            </button>
          </div>

          <nav
            className="mt-12 flex flex-1 flex-col gap-3 text-xl font-semibold text-[#2A2114]"
            aria-label="Mobile navigation"
          >
            {[
              { href: "#how-it-works", label: "How it works" },
              { href: "#example", label: "Example" },
              { href: "#pricing", label: "Pricing" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-[#EFE3C7] bg-white px-5 py-4 transition-colors duration-150 hover:bg-[#FFFBF2]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-6 grid gap-3">
            <button
              type="button"
              onClick={handleScheduleClick}
              className="cursor-pointer rounded-full bg-[#1F2937] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2937]"
            >
              Book demo
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="cursor-pointer rounded-full border border-[#E5D3A3] px-5 py-3 text-sm font-semibold text-[#3A2E16] transition-colors duration-150 hover:bg-[#FFF7E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              Contact us
            </button>
          </div>
        </div>
      )}

      {/* ── Hero section ── */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#FFE7A3]/50 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#FFD166]/25 blur-3xl" />
          <div className="absolute -left-20 top-48 h-64 w-64 rounded-full bg-[#FFF3D1]/60 blur-3xl" />
        </div>

        {/* Header */}
        <header
          className={[
            "sticky top-0 z-40 border-b px-4 py-3 transition-all duration-200 md:px-6 md:py-2",
            isScrolled
              ? "border-[#F2E6C9] bg-white/90 shadow-sm backdrop-blur-md"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <a href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 rounded-lg">
              <img src="/logo.png" alt="Vrelte Logo" className="mr-3 h-10 w-10" />
              <span className="font-semibold tracking-wide">Vrelte</span>
            </a>

            <nav className="hidden gap-8 text-sm text-[#5A4A2A] md:flex" aria-label="Main navigation">
              {[
                { href: "#how-it-works", label: "How it works" },
                { href: "#example", label: "Example" },
                { href: "#pricing", label: "Pricing" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="relative py-1 transition-colors duration-150 hover:text-[#2A2114] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#F59E0B] after:transition-all after:duration-200 hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={handleScheduleClick}
              className="hidden cursor-pointer whitespace-nowrap rounded-full bg-[#1F2937] px-5 py-2 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2937] md:block"
            >
              Book demo
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="block cursor-pointer rounded-full border border-[#E5D3A3] px-4 py-2 text-sm font-medium text-[#2A2114] transition-colors duration-150 hover:bg-[#FFF7E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] md:hidden"
            >
              Menu
            </button>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-4 md:px-10 lg:px-12">
          <div className="grid items-center gap-14 pt-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2D97A]/60 bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D97706]" aria-hidden="true" />
                AI lead qualification in under 60 seconds
              </div>

              <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
                New leads get texted back and qualified automatically
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A4A2A]">
                Vrelte handles the intake conversation, collects job details,
                and tells you which leads are worth your team's time. No manual
                chasing, no cold leads sitting unanswered, no guessing what the
                customer actually needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="cursor-pointer rounded-full bg-[#F59E0B] px-7 py-3.5 font-semibold text-white shadow-md shadow-[#F59E0B]/25 transition-all duration-150 hover:bg-[#D97706] hover:shadow-[#D97706]/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  Join the beta
                </button>
                <button
                  onClick={handleScheduleClick}
                  type="button"
                  className="cursor-pointer rounded-full border border-[#E5D3A3] px-7 py-3.5 font-semibold text-[#3A2E16] transition-colors duration-150 hover:bg-[#FFF7E3] hover:border-[#D4B87A] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  Book a demo
                </button>
              </div>

              <p className="mt-3 text-xs text-[#9A8A6A]">
                No credit card required. Cancel anytime.
              </p>
            </div>

            {/* Hero demo card */}
            <div className="lg:pl-4">
              <div className="rounded-2xl border border-[#EFE3C7] bg-white p-5 shadow-xl shadow-[#D4B87A]/10 ring-1 ring-[#EFE3C7]/50">
                <div className="mb-4 flex items-center justify-between border-b border-[#F3EAD3] pb-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#9A8A6A]">Live lead</p>
                    <p className="mt-0.5 font-semibold text-[#2A2114]">Qualification in progress</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#E6F7EC] px-3 py-1 text-xs font-medium text-[#1F7A4C]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1F7A4C]" aria-hidden="true" />
                    Live
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-[#FFF4DA] px-4 py-3 leading-6">
                    Hi, I'm interested in getting more information
                  </div>
                  <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-[#F59E0B] px-4 py-3 leading-6 text-white">
                    Happy to help. What's the best email or phone number to reach you?
                  </div>
                  <div className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-[#FFF4DA] px-4 py-3 leading-6">
                    chris@example.com
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-[#FAF6EC] px-4 py-3">
                    <p className="text-xs font-medium text-[#9A8A6A]">Lead type</p>
                    <p className="mt-1 font-semibold text-[#2A2114]">Inbound inquiry</p>
                  </div>
                  <div className="rounded-xl bg-[#FAF6EC] px-4 py-3">
                    <p className="text-xs font-medium text-[#9A8A6A]">Status</p>
                    <p className="mt-1 font-semibold text-[#1F7A4C]">Qualified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem / Pain points ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Problem
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Most businesses are too slow to follow up
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#5A4A2A]">
              <p>
                A new lead comes in, but by the time someone replies, the moment
                has already passed. The prospect loses interest, contacts a
                competitor, or disappears entirely.
              </p>
              <p>And even when your team follows up, they still have to:</p>
            </div>

            <ul className="mt-6 space-y-3" aria-label="Pain points">
              {[
                "reply manually to every inquiry",
                "ask the same qualifying questions again and again",
                "sort serious leads from low-intent ones",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-3.5 text-[#3A2E16]"
                >
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-8 text-[#5A4A2A]">
              That means slower response times, more manual work, and missed
              revenue.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Slow first response",
                  desc: "Leads go cold quickly when nobody answers right away.",
                },
                {
                  title: "Repetitive intake work",
                  desc: "Your team wastes time collecting the same basic details every day.",
                },
                {
                  title: "Low-quality lead noise",
                  desc: "Valuable time gets spent on people who were never ready to move forward in the first place.",
                  wide: true,
                },
              ].map(({ title, desc, wide }) => (
                <div
                  key={title}
                  className={[
                    "rounded-3xl border border-[#F2E6C9] bg-white p-5 transition-shadow duration-200 hover:shadow-md",
                    wide ? "sm:col-span-2" : "",
                  ].join(" ")}
                >
                  <p className="text-sm font-semibold text-[#8A6B1F]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Solution
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We handle the first part of the conversation automatically
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#5A4A2A]">
              <p>
                The moment a lead comes in, Vrelte follows up automatically.
              </p>
              <p>
                It asks the right questions, gathers the information you need,
                and keeps the conversation moving without requiring your team to
                jump in immediately.
              </p>
              <p className="font-medium text-[#3A2E16]">
                By the time you see the lead, it's already organized, qualified,
                and easier to act on.
              </p>
              <p>
                You keep your existing process. Vrelte simply makes the response
                faster and the handoff cleaner.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm md:p-8">
            <div className="space-y-3">
              {[
                {
                  title: "A lead comes in",
                  desc: "From your website, ad campaign, landing page, or any other inbound source",
                },
                {
                  title: "Vrelte responds instantly",
                  desc: "The conversation starts while interest is still high",
                },
                {
                  title: "Information gets collected automatically",
                  desc: "The AI asks questions, follows up, and keeps the lead moving",
                },
                {
                  title: "You get a qualified lead",
                  desc: "Clean, structured information ready for the next step",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-start gap-4 rounded-2xl border border-[#F2E6C9] bg-white px-5 py-5 transition-shadow duration-200 hover:shadow-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2114]">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#5A4A2A]">{step.desc}</p>
                    </div>
                  </div>
                  {i !== 3 && (
                    <div
                      className="absolute left-[2.25rem] top-full z-10 flex h-5 w-px flex-col items-center"
                      aria-hidden="true"
                    >
                      <div className="h-full w-px bg-gradient-to-b from-[#E7D6A8] to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="space-y-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              How it works
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Simple setup. Fast value.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Connect your business",
                desc: "Tell us about your business, your lead flow, and how you want new inquiries handled.",
              },
              {
                title: "Choose what you want collected",
                desc: "Decide which details matter most so every lead arrives with the information you actually need.",
              },
              {
                title: "Let Vrelte handle the follow-up",
                desc: "New leads get an immediate response and move through a consistent qualification flow automatically.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] font-bold text-white text-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#2A2114]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5A4A2A]">{step.desc}</p>
                {i !== 2 && (
                  <div
                    className="absolute top-1/2 -right-3 hidden h-px w-6 bg-[#E7D6A8] md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Example ── */}
      <section
        id="example"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              What it looks like in real life
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              A lead conversation becomes a clean handoff
            </h2>

            <div className="mt-8 rounded-[2rem] border border-[#EFE3C7] bg-white p-6 shadow-sm">
              <div className="space-y-4 text-sm">
                {[
                  { role: "Lead", text: "Hi, I'm interested in learning more", align: "left" },
                  { role: "AI", text: "Happy to help. What's the best way to reach you?", align: "right" },
                  { role: "Lead", text: "You can text me here or email me at chris@example.com", align: "left" },
                  { role: "AI", text: "Great. Can you tell me a little about what you're looking for?", align: "right" },
                ].map(({ role, text, align }) => (
                  <div
                    key={text}
                    className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={[
                        "max-w-[80%] rounded-2xl px-4 py-3 leading-6",
                        align === "right"
                          ? "rounded-tr-sm bg-[#F59E0B] text-white"
                          : "rounded-tl-sm bg-[#FFF4DA] text-[#2A2114]",
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "mb-1 text-xs",
                          align === "right" ? "text-white/70" : "text-[#9e7a34]",
                        ].join(" ")}
                      >
                        {role}
                      </p>
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualified lead card */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#9A8A6A]">Result</p>
                <p className="mt-0.5 font-semibold text-[#2A2114]">Qualified lead</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-[#E6F7EC] px-3 py-1 text-xs font-semibold text-[#1F7A4C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F7A4C]" aria-hidden="true" />
                Qualified
              </span>
            </div>

            <dl className="space-y-2.5 text-sm">
              {[
                { label: "Name", value: "Chris Johnson" },
                { label: "Contact", value: "chris@example.com" },
                { label: "Source", value: "Website form" },
                { label: "Intent", value: "Requested more info" },
                { label: "Status", value: "Qualified" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-[#F2E6C9] bg-white px-4 py-3"
                >
                  <dt className="text-[#7A6A44]">{label}</dt>
                  <dd className="font-semibold text-[#2A2114]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Built for inbound-driven businesses
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              If new leads matter to your business, this fits
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5A4A2A]">
              Vrelte works best for businesses that depend on responding
              quickly, collecting the right information, and turning inquiries
              into real conversations.
            </p>
            <ul className="mt-8 space-y-3" aria-label="Who Vrelte is for">
              {[
                "Service businesses handling inbound inquiries",
                "Sales teams that need faster response times",
                "Businesses running ads or lead generation campaigns",
                "Teams that want cleaner qualification before handoff",
                "Any business losing leads because follow-up is too slow",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-3.5 text-[#3A2E16]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Local services",
                desc: "Respond to inbound requests before they go somewhere else",
              },
              {
                title: "Sales teams",
                desc: "Reduce response time and hand reps better-qualified opportunities",
              },
              {
                title: "Agencies",
                desc: "Capture and pre-qualify leads more consistently across campaigns",
              },
              {
                title: "Growing businesses",
                desc: "Scale follow-up without adding more manual work",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-[#F2E6C9] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <p className="font-semibold text-[#2A2114]">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Vrelte ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Why businesses use Vrelte
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Better response times without more manual effort
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5A4A2A]">
              Instead of relying on someone to answer every inquiry manually,
              Vrelte gives every lead immediate attention and a consistent
              qualification experience.
            </p>
            <ul className="mt-8 space-y-3" aria-label="Benefits">
              {[
                "Respond instantly to every new lead",
                "Reduce manual intake work",
                "Collect structured information automatically",
                "Spend more time on serious opportunities",
                "Improve speed without adding headcount",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-3.5 text-[#3A2E16]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="space-y-4">
              {[
                {
                  title: "Faster response",
                  desc: "Leads hear back right away instead of waiting for manual follow-up",
                },
                {
                  title: "Cleaner qualification",
                  desc: "Every inquiry goes through a consistent process before it reaches your team",
                },
                {
                  title: "Less repetitive work",
                  desc: "Stop asking the same intake questions over and over again",
                },
                {
                  title: "Higher-quality handoff",
                  desc: "Your team gets better context before taking the next step",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#F2E6C9] bg-white p-5 transition-shadow duration-200 hover:shadow-md"
                >
                  <p className="font-semibold text-[#2A2114]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Simple software ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
            No bloat. No surprises.
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple software focused on one core job
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5A4A2A]">
            Vrelte is designed to do one thing really well: respond to new leads
            quickly and qualify them automatically. No overloaded dashboards, no
            complicated onboarding, and no unnecessary features.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "No long setup process",
                desc: "Get started quickly without weeks of configuration and onboarding calls.",
              },
              {
                title: "No bloated feature set",
                desc: "Focused functionality that supports lead response and qualification.",
              },
              {
                title: "No hidden fees",
                desc: "Beta shops get 90 days free before pricing gets worked out together.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#F2E6C9] bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <p className="font-semibold text-[#2A2114]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="space-y-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Pricing
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We're in beta.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5A4A2A]">
              First shops get it free for 90 days, then we'll work out pricing
              together based on what actually delivered value.
            </p>
          </div>

          <div className="max-w-3xl rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-lg font-semibold text-[#2A2114]">
                  Free for the first 90 days
                </p>
                <p className="mt-2 max-w-md text-sm leading-7 text-[#5A4A2A]">
                  Full setup, automated lead response, qualification flows, and
                  support are all included while we prove the value.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <button
                  onClick={handleScheduleClick}
                  type="button"
                  className="cursor-pointer whitespace-nowrap rounded-full bg-[#F59E0B] px-7 py-3 font-semibold text-white shadow-md shadow-[#F59E0B]/25 transition-all duration-150 hover:bg-[#D97706] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  Get started for free
                </button>
                <a
                  href="https://demo.vrelte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer whitespace-nowrap rounded-full border border-[#E5D3A3] px-7 py-3 text-center font-semibold text-[#3A2E16] transition-colors duration-150 hover:bg-[#FFF7E3] hover:border-[#D4B87A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  View demo
                </a>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2" aria-label="What's included">
              {[
                "Full setup done for you",
                "AI lead qualification",
                "Instant lead response",
                "No credit card required",
                "Unlimited leads",
                "Ongoing support included",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-[#3A2E16]">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-[#7C6A44]">
            Still not sure? See exactly how it works before committing to
            anything —{" "}
            <a
              href="https://demo.vrelte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 transition-colors duration-150 hover:text-[#8A6B1F]"
            >
              view the live demo
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Roadmap
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              What we're building
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5A4A2A]">
              Tools that answer, qualify, and route your leads so your team
              stays focused on the jobs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                label: "Shipping now",
                title: "AI text and email qualification",
                desc: "New leads get an instant response, answer the intake questions you'd normally ask, and land in your office as a clean, ready-to-call summary.",
              },
              {
                label: "Building next",
                title: "Voice calls and calendar booking",
                desc: "Vrelte will handle inbound voice calls and drop qualified leads straight onto your Google Calendar.",
              },
              {
                label: "On the roadmap",
                title: "Team routing and CRM integrations",
                desc: "Techs sign up, set their service area and availability, and Vrelte auto-routes work to the right person. Integrations with Jobber and Housecall Pro keep the rest of your workflow in sync.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-[#EFE3C7] bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#8A6B1F]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#2A2114]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5A4A2A]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[#F2E6C9] bg-[#FFFCF6] p-7">
            <p className="text-base font-semibold text-[#2A2114]">
              Design partners get every new feature free as it ships.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5A4A2A]">
              Early shops help shape the product and keep access without extra
              charges during beta.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] px-8 py-14 text-center shadow-sm md:px-12">
          {/* subtle glow */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-64 w-64 rounded-full bg-[#FFE7A3]/40 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Want to see it in action?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5A4A2A]">
              Book a quick demo and we'll show you how Vrelte can fit into your
              lead flow. Setup takes less than 10 minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleScheduleClick}
                type="button"
                className="cursor-pointer rounded-full bg-[#F59E0B] px-8 py-4 font-semibold text-white shadow-lg shadow-[#F59E0B]/30 transition-all duration-150 hover:bg-[#D97706] hover:shadow-[#D97706]/35 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Get started for free
              </button>
              <a
                href="https://demo.vrelte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full border border-[#E5D3A3] px-8 py-4 font-semibold text-[#3A2E16] transition-colors duration-150 hover:bg-[#FFF7E3] hover:border-[#D4B87A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                View demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-[#EFE3C7] bg-white text-[#2A2114]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <a href="/" className="inline-flex items-center gap-2 text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 rounded-lg">
                <img src="/logo.png" alt="Vrelte Logo" className="h-14 w-14" />
                Vrelte
              </a>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#5A4A2A]">
                Vrelte helps businesses instantly respond to inbound leads,
                qualify them automatically, and focus on the opportunities most
                likely to convert.
              </p>
              <p className="mt-4 text-xs font-medium text-[#7C6A44]">
                Built for speed. Built for conversion.
              </p>
            </div>

            <nav aria-label="Product links">
              <p className="text-sm font-semibold text-[#2A2114]">Product</p>
              <ul className="mt-4 space-y-2.5 text-sm text-[#5A4A2A]">
                {[
                  { href: "#how-it-works", label: "How it works" },
                  { href: "#example", label: "Example" },
                  { href: "#pricing", label: "Pricing" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="transition-colors duration-150 hover:text-[#2A2114]">
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={handleScheduleClick}
                    className="cursor-pointer transition-colors duration-150 hover:text-[#2A2114] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                  >
                    Book demo
                  </button>
                </li>
              </ul>
            </nav>

            <nav aria-label="Support links">
              <p className="text-sm font-semibold text-[#2A2114]">Support</p>
              <ul className="mt-4 space-y-2.5 text-sm text-[#5A4A2A]">
                <li>
                  <a
                    href="mailto:chris@vrelte.com"
                    onClick={() => fbq("track", "Contact")}
                    className="transition-colors duration-150 hover:text-[#2A2114] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                  >
                    chris@vrelte.com
                  </a>
                </li>
                <li>
                  <a href="/privacy.pdf" className="transition-colors duration-150 hover:text-[#2A2114]">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms.pdf" className="transition-colors duration-150 hover:text-[#2A2114]">
                    Terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[#EFE3C7] pt-6 text-xs text-[#7C6A44] md:flex-row md:items-center md:justify-between">
            <div>
              <p>Built by Chris and Jake.</p>
              <p className="mt-1">
                Reach us at{" "}
                <a
                  href="mailto:chris@vrelte.com"
                  className="transition-colors duration-150 hover:text-[#2A2114]"
                >
                  chris@vrelte.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:jake@vrelte.com"
                  className="transition-colors duration-150 hover:text-[#2A2114]"
                >
                  jake@vrelte.com
                </a>
                .
              </p>
              <p className="mt-1">
                © {new Date().getFullYear()} Vrelte. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/terms.pdf" className="transition-colors duration-150 hover:text-[#2A2114]">
                Terms
              </a>
              <a href="/privacy.pdf" className="transition-colors duration-150 hover:text-[#2A2114]">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
