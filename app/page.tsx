import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const practiceAreas = [
  {
    title: "Business Law",
    description:
      "Entity formation, contracts, governance, and strategic counsel for growing businesses.",
  },
  {
    title: "Family Law",
    description:
      "Compassionate support for divorce, custody, support, and mediation matters.",
  },
  {
    title: "Estate Planning",
    description:
      "Tailored plans to protect your assets, preserve your legacy, and reduce future risk.",
  },
  {
    title: "Real Estate",
    description:
      "Purchase, sale, and dispute guidance for residential and commercial property transactions.",
  },
  {
    title: "Employment Law",
    description:
      "Practical guidance for workplace disputes, compliance concerns, and executive agreements.",
  },
  {
    title: "Litigation",
    description:
      "Strong advocacy and strategic representation in negotiations, trials, and dispute resolution.",
  },
];

const attorneyProfiles = [
  {
    name: "Njeri Kivutha",
    title: "Managing Partner",
    bio: "Njeri advises founders and executives on governance, risk strategy, and complex commercial matters across Kenya.",
  },
  {
    name: "Daniel Opiyo",
    title: "Family Law Advocate",
    bio: "Daniel is known for calm, practical guidance during high-stakes family and matrimonial disputes.",
  },
  {
    name: "Achieng Wambui",
    title: "Estate Planning Counsel",
    bio: "Achieng helps clients build lasting plans that protect family wealth and reduce future uncertainty.",
  },
];

const processSteps = [
  "Initial consultation to understand your priorities and concerns.",
  "Clear legal strategy and practical next steps tailored to your matter.",
  "Consistent guidance, negotiation, and advocacy through resolution.",
];

const testimonials = [
  {
    quote:
      "They made a stressful legal transition feel manageable. Every step was explained clearly and strategically, just as we needed in Nairobi.",
    name: "Wambui N.",
    role: "Business Owner",
  },
  {
    quote:
      "Professional, responsive, and deeply knowledgeable. We felt prepared and protected from the very beginning of our case in Kisumu.",
    name: "Otieno K.",
    role: "Family Law Client",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#d3c38a] bg-white p-8 shadow-[0_20px_40px_rgba(22,58,46,0.08)] animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
              About the firm
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
              Counsel grounded in clarity, strategy, and trust.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#43645c] animate-fade-up">
            <p>
              At Kivutha & Opiyo Advocates, we partner with clients facing
              important legal decisions that affect their future. Our team
              brings practical experience, measured judgment, and a client-first
              approach to every matter.
            </p>
            <p>
              Whether you are building a business, managing a family transition,
              protecting your legacy, or resolving a dispute, we provide
              thoughtful counsel designed to protect your interests and move
              your goals forward.
            </p>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="bg-[#163a2e] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c280]">
              Practice areas
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Legal services built around real-world needs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {practiceAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[1.5rem] border border-[#2c584a] bg-[#1d4a3d] p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d8ba60] text-base font-bold text-[#163a2e]">
                  {area.title.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#d9e7e3]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-[#d8ba60] bg-[#d8ba60] px-5 py-3 text-sm font-semibold text-[#163a2e] transition hover:bg-[#e6cd76]"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
            Meet the team
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
            Experienced counsel with a practical, human approach.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {attorneyProfiles.map((attorney) => (
            <article
              key={attorney.name}
              className="rounded-[1.75rem] border border-[#dfe5df] bg-white p-6 shadow-[0_18px_32px_rgba(22,58,46,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#163a2e] text-xl font-bold text-[#f6e7b6]">
                {attorney.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#163a2e]">
                {attorney.name}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-[#c29b2d]">
                {attorney.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4d6761]">
                {attorney.bio}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
            Why clients choose us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
            Advice that balances legal strength with practical perspective.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            [
              "Responsive communication",
              "You will never be left wondering what happens next.",
            ],
            [
              "Strategic planning",
              "We help you make informed choices before issues escalate.",
            ],
            [
              "Strong advocacy",
              "From negotiation to courtroom preparation, we stay focused on outcomes.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-[#dfe5df] bg-white p-7 shadow-[0_18px_32px_rgba(22,58,46,0.06)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f4ee] text-lg font-bold text-[#163a2e]">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-[#163a2e]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4d6761]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3eddc] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
                A straightforward path to confident legal decisions.
              </h2>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-5 rounded-[1.5rem] border border-[#d7c280] bg-white p-5 shadow-[0_18px_32px_rgba(22,58,46,0.06)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163a2e] text-sm font-semibold text-[#f6e7b6]">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-[#34514a]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
              Client feedback
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
              Trusted by clients navigating important life moments.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-[1.5rem] border border-[#dfe5df] bg-white p-7 shadow-[0_18px_32px_rgba(22,58,46,0.06)]"
            >
              <p className="text-lg leading-8 text-[#34514a]">“{item.quote}”</p>
              <footer className="mt-6">
                <div className="font-semibold text-[#163a2e]">{item.name}</div>
                <div className="text-sm text-[#5a7068]">{item.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#163a2e] py-20 text-white dark:bg-[#0d1117] dark:text-[#dfe8e5]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c280]">
              Schedule a consult
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl dark:text-white">
              Tell us what you need, and we’ll help you take the next step.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#dfe8e5]">
              We respond quickly to new inquiries and aim to schedule a first
              conversation within one business day across Nairobi, Mombasa, and
              other Kenyan offices.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#0d221d] py-20 text-white dark:bg-[#000000]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c280]">
              Start today
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need clear legal direction? We're ready to help.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-[#d8ba60] px-6 py-3 text-sm font-semibold text-[#163a2e] transition hover:bg-[#e4c975] dark:bg-[#d8ba60] dark:text-[#163a2e] dark:hover:bg-[#e6cd76]"
          >
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
