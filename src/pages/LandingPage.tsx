export default function LandingPage() {
  const contactEmailLink = "mailto:chris@vrelte.com";
  const handleContactClick = () => {
    window.location.href = contactEmailLink;
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2A2114]">
      <section className="relative overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#FFE7A3]/40 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#FFD166]/20 blur-3xl" />
        </div>
        {/* NAV */}
        <header className="flex items-center justify-between  border border-[#F2E6C9] bg-white px-6 py-2 shadow-sm">
          <div className="flex items-center ">
            <img src="/logo.png" alt="Vrelte Logo" className="h-10 w-10 mr-3" />
            <span className="font-semibold tracking-wide">Vrelte</span>
          </div>

          <nav className="flex gap-8 text-sm text-[#5A4A2A]">
            <a className="hover:text-black">How it works</a>
            <a className="hover:text-black">Example</a>
            <a className="hover:text-black">Pricing</a>
          </nav>

          <button
            type="button"
            onClick={handleContactClick}
            className="block cursor-pointer rounded-full bg-[#1F2937] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Book demo
          </button>
        </header>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
          {/* HERO */}
          <div className="grid items-center gap-14 pt-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-[#FFF3D1] px-4 py-2 text-sm text-[#8A6B1F]">
                Setup takes less than 10 minutes
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                Your leads get texted instantly — and qualified automatically
              </h1>

              <p className="mt-6 text-lg text-[#5A4A2A] max-w-xl">
                Our AI assistant responds to new inquiries, asks the right
                questions, follows up, and sends you ready-to-go leads.
              </p>

              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="cursor-pointer rounded-full bg-[#F59E0B] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#D97706]"
                >
                  Try it free
                </button>
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="cursor-pointer rounded-full border border-[#E5D3A3] px-6 py-3 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3]"
                >
                  Book a demo
                </button>
              </div>
            </div>

            {/* RIGHT MOCK */}
            <div>
              <div className="rounded-2xl border border-[#EFE3C7] bg-white p-5 shadow-lg">
                <div className="mb-4 border-b border-[#F3EAD3] pb-3">
                  <p className="text-sm text-[#7C6A44]">Live lead</p>
                  <p className="font-semibold">Qualification in progress</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-[#FFF4DA] p-3 rounded-xl w-fit">
                    Hey I need help with my roof
                  </div>

                  <div className="bg-[#F59E0B] text-white p-3 rounded-xl w-fit ml-auto">
                    Got it — what address is the property?
                  </div>

                  <div className="bg-[#FFF4DA] p-3 rounded-xl w-fit">
                    123 Main St
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#FAF6EC] p-3 rounded-xl">
                    <p className="text-[#7A6A44]">Name</p>
                    <p className="font-semibold">John Smith</p>
                  </div>
                  <div className="bg-[#FAF6EC] p-3 rounded-xl">
                    <p className="text-[#7A6A44]">Status</p>
                    <p className="font-semibold">Qualified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl  px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Problem
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              You’re losing leads without realizing it
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#5A4A2A]">
              <p>
                Most leads don’t respond right away. Some forget. Some lose
                interest. Some never get followed up with.
              </p>

              <p>And even when they do respond, you still have to:</p>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "text back and forth",
                "ask the same questions every time",
                "figure out if they’re even a good fit",
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
              That’s time you don’t have.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  No instant reply
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  New inquiries sit too long, and by the time someone replies,
                  the lead has already cooled off.
                </p>
              </div>

              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  Manual follow-up
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  Your team keeps repeating the same questions just to collect
                  basic information.
                </p>
              </div>

              <div className="rounded-3xl border border-[#F2E6C9] bg-white p-5 sm:col-span-2">
                <p className="text-sm font-medium text-[#8A6B1F]">
                  Low-value conversations steal time
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A4A2A]">
                  You end up spending real time on people who were never
                  serious, while better leads wait for a response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT - SOLUTION TEXT */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Solution
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We handle the conversation for you
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#5A4A2A]">
              <p>The moment a lead comes in, your AI assistant texts them.</p>

              <p>
                It asks the right questions, understands their responses, and
                gathers everything you need — automatically.
              </p>

              <p className="text-[#3A2E16] font-medium">
                By the time you see the lead, it’s already qualified.
              </p>
            </div>
          </div>

          {/* RIGHT - VISUAL FLOW */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm md:p-8">
            <div className="space-y-4">
              {[
                {
                  title: "Lead comes in",
                  desc: "Form, call, or message triggers instantly",
                },
                {
                  title: "AI responds immediately",
                  desc: "No delay — keeps attention while interest is high",
                },
                {
                  title: "Conversation continues",
                  desc: "AI asks questions and follows up automatically",
                },
                {
                  title: "You get a qualified lead",
                  desc: "Structured info ready to act on",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-4 rounded-2xl border border-[#F2E6C9] bg-white px-5 py-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] text-white text-sm font-semibold">
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
                title: "Connect your business",
                desc: "Enter your website and we’ll understand what you do.",
              },
              {
                title: "Choose what info you want",
                desc: "Pick the questions you want answered — name, address, budget, timeline, anything.",
              },
              {
                title: "We handle the rest",
                desc: "The AI texts your leads, follows up, and keeps the conversation going until everything is collected.",
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
          {/* LEFT: conversation */}
          <div>
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              What it looks like in real life
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              A real conversation becomes a ready-to-use lead
            </h2>

            <div className="mt-8 rounded-[2rem] border border-[#EFE3C7] bg-white p-6 shadow-sm">
              <div className="space-y-4 text-sm">
                <div className="flex justify-start">
                  <div className="bg-[#FFF4DA] p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-[#9e7a34] mb-1">Lead</p>
                    Hey I need help with my roof
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#F59E0B] text-white p-4 rounded-2xl max-w-[80%]">
                    <p className="text-xs text-white/70 mb-1">AI</p>
                    Got it — happy to help. What address is the property?
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
                    Thanks. About how old is the roof?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: structured output */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7C6A44]">Result</p>
                <p className="font-semibold">Qualified lead</p>
              </div>
              <span className="bg-[#E6F7EC] text-[#1F7A4C] px-3 py-1 rounded-full text-xs font-medium">
                Qualified
              </span>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { label: "Name", value: "John Smith" },
                { label: "Address", value: "123 Main St" },
                { label: "Roof Issue", value: "Leak" },
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
          {/* LEFT: WHO IT'S FOR */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Built for businesses that rely on leads
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              If you get inbound inquiries, this is for you
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-xl">
              Any business that depends on responding quickly and qualifying
              potential customers can benefit from instant, structured
              follow-up.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Contractors (roofing, HVAC, plumbing)",
                "Law firms",
                "Real estate agents",
                "Home services",
                "Any business that gets inbound inquiries",
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

          {/* RIGHT: VISUAL CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Contractors",
                desc: "Capture every job inquiry without missing calls or texts",
              },
              {
                title: "Law firms",
                desc: "Screen potential clients before spending time on intake",
              },
              {
                title: "Real estate",
                desc: "Qualify buyers and sellers automatically",
              },
              {
                title: "Home services",
                desc: "Turn inbound leads into booked jobs faster",
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
          {/* LEFT: BENEFITS TEXT */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Why businesses use this
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              More qualified leads, less wasted time
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-xl">
              Instead of chasing every inquiry manually, you focus only on the
              people who are actually ready to move forward.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Respond instantly to every lead",
                "Stop chasing people who never reply",
                "Collect structured info automatically",
                "Spend time only on serious customers",
                "Increase conversion without hiring staff",
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

          {/* RIGHT: VISUAL METRICS / OUTCOME */}
          <div className="rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] p-8 shadow-sm md:p-10">
            <div className="space-y-6">
              {[
                {
                  title: "Faster response time",
                  desc: "Leads are contacted immediately instead of waiting minutes or hours",
                },
                {
                  title: "Higher conversion",
                  desc: "Engaging instantly keeps leads warm and increases close rates",
                },
                {
                  title: "Less manual work",
                  desc: "No more repetitive texting or intake questions",
                },
                {
                  title: "Better lead quality",
                  desc: "Only qualified leads reach you, saving time and effort",
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
            Not a chatbot — a focused assistant
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Built to qualify leads, not just talk
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-[#5A4A2A] max-w-3xl">
            <p>This isn’t a generic chatbot.</p>
            <p>
              It’s designed to do one thing well: qualify your leads and get you
              the information you need.
            </p>
            <p>
              It stays on task, follows up automatically, and hands off when
              needed.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Stays on task",
                desc: "Doesn’t drift into irrelevant conversations",
              },
              {
                title: "Follows up automatically",
                desc: "Keeps leads engaged without manual effort",
              },
              {
                title: "Delivers structured output",
                desc: "You get clean, usable lead data every time",
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
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <div className="inline-flex rounded-full bg-[#FFF3D1] px-4 py-2 text-sm font-medium text-[#8A6B1F]">
              Try it risk-free
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              We’ll set everything up for you
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5A4A2A] max-w-xl">
              If it doesn’t help your business, you don’t pay.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="cursor-pointer rounded-full bg-[#F59E0B] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#D97706]"
              >
                Get started
              </button>
              <button
                type="button"
                onClick={handleContactClick}
                className="cursor-pointer rounded-full border border-[#E5D3A3] px-6 py-3 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3]"
              >
                Try it free
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EFE3C7] bg-white p-8 shadow-sm">
            <p className="text-sm text-[#7C6A44]">Setup</p>
            <p className="text-xl font-semibold mt-1">We handle everything</p>

            <div className="mt-6 space-y-3 text-sm text-[#5A4A2A]">
              <div className="flex justify-between">
                <span>Initial setup</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Customization</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Risk</span>
                <span className="font-semibold">None</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#EFE3C7] bg-[#FFFCF6] px-8 py-12 text-center shadow-sm md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Want to see it in action?
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5A4A2A] max-w-2xl mx-auto">
            Reply to our email or book a quick demo — we’ll show you exactly how
            it works with your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={handleContactClick}
              className="cursor-pointer rounded-full bg-[#F59E0B] px-7 py-4 font-semibold text-white shadow-md hover:bg-[#D97706]"
            >
              Book demo
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="cursor-pointer rounded-full border border-[#E5D3A3] px-7 py-4 font-semibold text-[#3A2E16] hover:bg-[#FFF7E3]"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-[#EFE3C7] bg-white text-[#2A2114]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <img src="/logo.png" alt="Vrelte Logo" className="h-16 w-16" />
                Vrelte
              </div>

              <p className="mt-4 max-w-sm text-sm text-[#5A4A2A]">
                Vrelte helps businesses instantly respond to inbound leads,
                qualify them automatically, and focus only on real customers.
              </p>

              <div className="mt-4 text-xs text-[#7C6A44]">
                Built for speed. Built for conversion.
              </div>
            </div>

            {/* Product */}
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

            {/* Support */}
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

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col gap-4 border-t border-[#EFE3C7] pt-6 text-xs text-[#7C6A44] md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Vrelte. All rights reserved.</div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#2A2114] transition">
                Terms
              </a>
              <a href="#" className="hover:text-[#2A2114] transition">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
