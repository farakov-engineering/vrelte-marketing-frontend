import { useState } from "react";
import "@/index.css";

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contactEmailLink = "mailto:chris@vrelte.com";

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    window.location.href = contactEmailLink;
    fbq("track", "Contact");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2A2114]">
      <section className="relative overflow-hidden">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-[#FFFDF7] px-6 py-6 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Vrelte Logo"
                  className="mr-3 h-10 w-10"
                />
                <span className="font-semibold tracking-wide">Vrelte</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer rounded-full border border-[#E5D3A3] px-4 py-2 text-sm font-medium text-[#2A2114] hover:bg-[#FFF7E3]"
              >
                Close
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col gap-4 text-xl font-semibold text-[#2A2114]">
              <a
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-[#EFE3C7] bg-white px-5 py-4"
              >
                How it works
              </a>
              <a
                href="#example"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-[#EFE3C7] bg-white px-5 py-4"
              >
                Example
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl border border-[#EFE3C7] bg-white px-5 py-4"
              >
                Pricing
              </a>
            </nav>

            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://calendar.app.google/Q72zBkc18G6fYy8A7",
                    "_blank",
                  );
                  fbq("track", "Schedule");
                }}
                className="cursor-pointer rounded-full bg-[#1F2937] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Book demo
              </button>
              <button
                type="button"
                onClick={handleContactClick}
                className="cursor-pointer rounded-full border border-[#E5D3A3] px-5 py-3 text-sm font-medium text-[#3A2E16] hover:bg-[#FFF7E3]"
              >
                Contact us
              </button>
            </div>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#FFE7A3]/40 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#FFD166]/20 blur-3xl" />
        </div>

        <header className="border border-[#F2E6C9] bg-white px-4 py-3 shadow-sm md:px-6 md:py-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Vrelte Logo"
                className="h-10 w-10 mr-3"
              />
              <span className="font-semibold tracking-wide">Vrelte</span>
            </div>

            <nav className="hidden gap-8 text-sm text-[#5A4A2A] md:flex">
              <a href="#how-it-works" className="hover:text-black">
                How it works
              </a>
              <a href="#example" className="hover:text-black">
                Example
              </a>
              <a href="#pricing" className="hover:text-black">
                Pricing
              </a>
            </nav>

            <button
              type="button"
              onClick={() => {
                window.open(
                  "https://calendar.app.google/Q72zBkc18G6fYy8A7",
                  "_blank",
                );
                fbq("track", "Schedule");
              }}
              className="hidden cursor-pointer whitespace-nowrap rounded-full bg-[#1F2937] px-5 py-2 text-sm font-medium text-white hover:opacity-90 md:block"
            >
              Book demo
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="block cursor-pointer rounded-full border border-[#E5D3A3] px-4 py-2 text-sm font-medium text-[#2A2114] hover:bg-[#FFF7E3] md:hidden"
            >
              Menu
            </button>
          </div>
        </header>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
          <div className="grid items-center gap-14 pt-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-[#FFF3D1] px-4 py-2 text-sm text-[#8A6B1F]">
                Set up your plumbing lead follow-up in under 10 minutes
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                Every plumbing lead gets texted instantly and qualified
                automatically
              </h1>

              <p className="mt-6 text-lg text-[#5A4A2A] max-w-xl">
                Built for plumbing contractors. The moment someone fills out
                your form, Vrelte texts them, asks the right service questions,
                and sends you a ready-to-call lead. Your office spends less time
                chasing details, and your team gets to the right jobs faster.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="cursor-pointer rounded-full bg-[#F59E0B] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#D97706]"
                >
                  Try it free for 14 days
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://calendar.app.google/Q72zBkc18G6fYy8A7",
                      "_blank",
                    );
                    fbq("track", "Schedule");
                  }}
                  type="button"
                  className="cursor-pointer rounded-full border border-[#E5D3A3] px-6 py-3 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3]"
                >
                  Book a demo
                </button>
              </div>
              <p className="mt-3 text-xs text-[#9A8A6A]">
                No credit card required. Cancel anytime.
              </p>
            </div>

            <div>
              <div className="rounded-2xl border border-[#EFE3C7] bg-white p-5 shadow-lg">
                <div className="mb-4 border-b border-[#F3EAD3] pb-3">
                  <p className="text-sm text-[#7C6A44]">Live plumbing lead</p>
                  <p className="font-semibold">Qualification in progress</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-[#FFF4DA] p-3 rounded-xl w-fit">
                    Hey I have a pipe leaking under my sink
                  </div>

                  <div className="bg-[#F59E0B] text-white p-3 rounded-xl w-fit ml-auto">
                    Got it. What’s the address for the property that needs
                    service?
                  </div>

                  <div className="bg-[#FFF4DA] p-3 rounded-xl w-fit">
                    123 Main St
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#FAF6EC] p-3 rounded-xl">
                    <p className="text-[#7A6A44]">Issue</p>
                    <p className="font-semibold">Leaking pipe</p>
                  </div>
                  <div className="bg-[#FAF6EC] p-3 rounded-xl">
                    <p className="text-[#7A6A44]">Status</p>
                    <p className="font-semibold text-[#1F7A4C]">Qualified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Problem
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Plumbing leads go cold fast
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#5A4A2A]">
              <p>
                Someone fills out your form after hours because they have a
                leak, no hot water, a clogged drain, or a plumbing emergency. If
                nobody responds quickly, they move on to the next plumber.
              </p>
              <p>And even when your office does answer, you still have to:</p>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "text back and forth to get the address and plumbing issue",
                "ask the same service questions on every new inquiry",
                "figure out which calls are real jobs and which ones are not",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <p className="text-[#3A2E16]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-base leading-8 text-[#5A4A2A]">
              That is time your office and plumbers do not have during a busy
              day.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  Slow response time
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  The first plumbing company to reply often gets the job,
                  especially when the homeowner needs help now.
                </p>
              </div>

              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  Repetitive intake work
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  Your office keeps collecting the same basic info on every
                  plumbing request.
                </p>
              </div>

              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5 sm:col-span-2">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  Wasted time on weak leads
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  Your team spends time on low-intent inquiries while stronger
                  service calls wait for a callback.
                </p>
              </div>
              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5 sm:col-span-2">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  $100,000+ lost to slow response
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  Contractors who do not have a fast lead response system can
                  lose $100,000 or more each year from missed calls, delayed
                  follow-up, and leads booking with competitors first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Solution
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We handle the first plumbing conversation for you
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#5A4A2A]">
              <p>
                The moment someone fills out your website form, Vrelte texts
                them in under 60 seconds.
              </p>
              <p>
                It asks the right plumbing intake questions, understands the
                issue, and gathers the information your office needs before
                anyone has to step in.
              </p>
              <p className="text-[#3A2E16] font-medium">
                By the time you see the lead, it is already qualified and ready
                for a callback, dispatch, or estimate follow-up.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm md:p-8">
            <div className="space-y-4">
              {[
                {
                  title: "Homeowner fills out your form",
                  desc: "Leak, clogged drain, no hot water, fixture issue, or service request",
                },
                {
                  title: "Vrelte texts them in under 60 seconds",
                  desc: "You catch the lead while they are still ready to book",
                },
                {
                  title: "The conversation keeps moving",
                  desc: "Vrelte asks your intake questions and collects the job details",
                },
                {
                  title: "You get a qualified plumbing lead",
                  desc: "Structured info ready for your office to call, quote, or dispatch",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-4 rounded-2xl border border-[#F2E6C9] bg-white px-5 py-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-white text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2114]">{step.title}</p>
                    <p className="mt-1 text-sm text-[#5A4A2A] leading-6">
                      {step.desc}
                    </p>
                  </div>
                  {i !== 3 && (
                    <div className="absolute left-4 top-full h-6 w-px bg-[#E7D6A8]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="space-y-10">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              How it works
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Simple setup. Fast payoff.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Connect your plumbing business",
                desc: "Add your website and tell us how you want new plumbing and service inquiries handled.",
              },
              {
                title: "Choose what info you want collected",
                desc: "Pick the questions that matter - address, issue, urgency, water shutoff status, budget, anything you need.",
              },
              {
                title: "Vrelte handles the follow-up",
                desc: "New plumbing leads get an immediate text response and arrive with cleaner info for your office or dispatch team.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] text-white font-semibold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#2A2114]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5A4A2A]">
                  {step.desc}
                </p>
                {i !== 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-[#E7D6A8]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="example"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              What it looks like in real life
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              A real plumbing inquiry becomes a ready-to-use lead
            </h2>

            <div className="mt-8 rounded-[2rem] border border-[#EFE3C7] bg-white p-6 shadow-sm">
              <div className="space-y-4 text-sm">
                <div className="flex justify-start">
                  <div className="bg-[#FFF4DA] p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-[#9e7a34] mb-1">Lead</p>
                    Hey I have a leak under my sink
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#F59E0B] text-white p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-white/70 mb-1">AI</p>
                    Got it. What is the address for the property?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#FFF4DA] p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-[#9e7a34] mb-1">Lead</p>
                    123 Main St
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#F59E0B] text-white p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-white/70 mb-1">AI</p>
                    Thanks. Is the leak active right now or has the water been
                    shut off?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7C6A44]">Result</p>
                <p className="font-semibold">Qualified plumbing lead</p>
              </div>
              <span className="bg-[#E6F7EC] text-[#1F7A4C] px-3 py-1 rounded-full text-xs font-medium">
                Qualified
              </span>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { label: "Name", value: "John Smith" },
                { label: "Address", value: "123 Main St" },
                { label: "Issue", value: "Leaking pipe under sink" },
                { label: "Urgency", value: "High" },
                { label: "Status", value: "Qualified" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl bg-white border border-[#F2E6C9] px-4 py-3"
                >
                  <span className="text-[#7A6A44]">{item.label}</span>
                  <span className="font-semibold text-[#2A2114]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Built for plumbing contractors
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              If you run plumbing leads, this is built for you
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-xl">
              Vrelte works best for plumbing companies that depend on fast
              follow-up, cleaner intake, and getting service requests to the
              right person quickly.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Service calls and repair inquiries",
                "Leaks, clogs, and no hot water requests",
                "Replacement and installation leads",
                "After-hours website form submissions",
                "Plumbing offices that want cleaner handoff to dispatch",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <p className="text-[#3A2E16]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Repair calls",
                desc: "Respond faster when homeowners need help with leaks, clogs, or urgent plumbing issues",
              },
              {
                title: "Replacement leads",
                desc: "Collect better info before following up on water heater or fixture replacements",
              },
              {
                title: "After-hours inquiries",
                desc: "Catch website leads at night instead of waiting until morning",
              },
              {
                title: "Office efficiency",
                desc: "Reduce repetitive intake work for your CSR or dispatch team",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-[#F2E6C9] bg-white p-6 shadow-sm"
              >
                <p className="font-semibold text-[#2A2114]">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Why plumbing companies use this
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              More qualified plumbing leads, less wasted office time
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-xl">
              Instead of manually chasing every inquiry, your team focuses on
              the people who are actually ready to book service or talk about a
              replacement.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Respond instantly to every new plumbing lead",
                "Stop losing after-hours website inquiries",
                "Collect structured service details automatically",
                "Spend more time on serious homeowners",
                "Improve response speed without adding office staff",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#F4E9CF] bg-[#FFFBF2] px-4 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <p className="text-[#3A2E16]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="space-y-6">
              {[
                {
                  title: "Faster response time",
                  desc: "New plumbing leads get contacted in under 60 seconds instead of waiting hours",
                },
                {
                  title: "Higher booking rate",
                  desc: "Following up first helps you win more service calls and estimates",
                },
                {
                  title: "Less manual intake",
                  desc: "No more repetitive texting just to collect the basics",
                },
                {
                  title: "Better lead quality",
                  desc: "Your office gets cleaner info before calling back or dispatching",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#F2E6C9] bg-white p-5"
                >
                  <p className="font-semibold text-[#2A2114]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
          <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
            No bloat. No surprises.
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Built to do one plumbing job really well
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-2xl">
            Most plumbing companies do not need another bloated platform with
            complicated onboarding and features nobody uses. They need faster
            lead response, better intake, and a cleaner handoff to the office.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "No long contracts",
                desc: "Cancel anytime. No lock-in and no painful cancellation process.",
              },
              {
                title: "No setup headache",
                desc: "Go live quickly without weeks of onboarding calls.",
              },
              {
                title: "No hidden fees",
                desc: "Straightforward pricing without surprise usage charges.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#F2E6C9] bg-white p-5"
              >
                <p className="font-semibold text-[#2A2114]">{item.title}</p>
                <p className="mt-2 text-sm text-[#5A4A2A] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
      >
        <div className="space-y-10">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Pricing
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We set it up. You use it. Pay when it is working.
            </h2>
            <p className="mt-4 text-base text-[#5A4A2A]">
              We do not believe in charging upfront for something you have not
              seen work yet. Get fully set up, start qualifying plumbing leads,
              and only talk about payment once you are seeing value.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 md:p-10 max-w-3xl shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-[#2A2114]">
                  Everything included from day one
                </p>
                <p className="mt-2 text-sm text-[#5A4A2A] max-w-md">
                  Full setup, AI text follow-up, plumbing lead qualification,
                  and ongoing support are all included. Pricing stays simple.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <button
                  onClick={() => {
                    window.open(
                      "https://calendar.app.google/Q72zBkc18G6fYy8A7",
                      "_blank",
                    );
                    fbq("track", "Schedule");
                  }}
                  type="button"
                  className="cursor-pointer rounded-full bg-[#F59E0B] px-7 py-3 font-semibold text-white shadow-md hover:bg-[#D97706] whitespace-nowrap"
                >
                  Get started for free
                </button>
                <a
                  href="https://demo.vrelte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full border border-[#E5D3A3] px-7 py-3 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3] text-center whitespace-nowrap"
                >
                  View demo
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 text-sm">
              {[
                "Full setup done for you",
                "AI text qualification for plumbing leads",
                "Instant lead response",
                "No credit card required",
                "Unlimited leads",
                "Ongoing support included",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <span className="text-[#3A2E16]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#7C6A44]">
            Still not sure? See exactly how it works before committing to
            anything —{" "}
            <a
              href="https://demo.vrelte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#8A6B1F]"
            >
              view the live demo
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] px-8 py-12 text-center shadow-sm md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Want to see it on real plumbing leads?
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5A4A2A] max-w-2xl mx-auto">
            Book a quick demo and we will show you exactly how Vrelte fits into
            your plumbing lead flow.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                window.open(
                  "https://calendar.app.google/Q72zBkc18G6fYy8A7",
                  "_blank",
                );
                fbq("track", "Schedule");
              }}
              type="button"
              className="cursor-pointer rounded-full bg-[#F59E0B] px-7 py-4 font-semibold text-white shadow-md hover:bg-[#D97706]"
            >
              Get started for free
            </button>
            <a
              href="https://demo.vrelte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-[#E5D3A3] px-7 py-4 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3]"
            >
              View demo
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-[#EFE3C7] bg-white text-[#2A2114]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <img src="/logo.png" alt="Vrelte Logo" className="h-16 w-16" />
                Vrelte
              </div>
              <p className="mt-4 max-w-sm text-sm text-[#5A4A2A]">
                Vrelte helps plumbing companies instantly respond to inbound
                leads, qualify them automatically, and focus on real service
                calls and estimates.
              </p>
              <div className="mt-4 text-xs text-[#7C6A44]">
                Built for speed. Built for conversion.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#2A2114]">
                Product
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#5A4A2A]">
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-black transition"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#example" className="hover:text-black transition">
                    Example
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-black transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Book demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#2A2114]">
                Support
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#5A4A2A]">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[#EFE3C7] pt-6 text-xs text-[#7C6A44] md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Vrelte. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#2A2114] transition">
                Terms
              </a>
              <a
                href="/privacy-policy"
                className="hover:text-[#2A2114] transition"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
