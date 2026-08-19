import Link from "next/link";

const services = [
  {
    title: "Business Formation & Advisory",
    description:
      "We help founders establish the right structure, protect commercial interests, and plan for sustainable growth.",
  },
  {
    title: "Family Law",
    description:
      "We provide clear and respectful representation in divorce, custody, support, and mediation matters.",
  },
  {
    title: "Estate Planning",
    description:
      "We design tailored plans to protect assets, reduce uncertainty, and provide peace of mind for your family.",
  },
  {
    title: "Commercial Contracts",
    description:
      "We review and draft agreements that reduce risk and support better decision-making in business operations.",
  },
  {
    title: "Real Estate Transactions",
    description:
      "We guide buyers, sellers, and investors through purchase, sale, and dispute resolution with careful attention to detail.",
  },
  {
    title: "Litigation Support",
    description:
      "We prepare strong strategies for negotiations, settlements, and courtroom advocacy when disputes arise.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-[#f8f6f1]">
      <section className="bg-[linear-gradient(135deg,_#163a2e_0%,_#1f4a3d_40%,_#f1ead2_100%)] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c280]">
            Our services
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Practical legal support for Kenyan businesses and families.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e6efe9]">
            Whether you are managing a business decision in Nairobi, planning
            your legacy in Nakuru, or resolving a dispute in Mombasa, our team
            provides strategic guidance designed to move you forward with
            clarity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.5rem] border border-[#dfe5df] bg-white p-6 shadow-[0_18px_32px_rgba(22,58,46,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d8ba60] text-base font-bold text-[#163a2e]">
                {service.title.charAt(0)}
              </div>
              <h2 className="text-xl font-semibold text-[#163a2e]">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#4d6761]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f2ebd8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#355e4d]">
              Why work with us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163a2e] sm:text-4xl">
              Thoughtful advocacy with a clear path to resolution.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              "Tailored legal strategy based on your goals and risk profile.",
              "Responsive communication and practical next steps at every stage.",
              "Focused representation designed to protect what matters most.",
            ].map((point, index) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-[#d7c280] bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#163a2e] text-sm font-semibold text-[#f6e7b6]">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-[#34514a]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] bg-[#163a2e] px-6 py-10 text-center text-white lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c280]">
            Ready to talk?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get practical legal advice from a team that listens first.
          </h2>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#d8ba60] px-6 py-3 text-sm font-semibold text-[#163a2e] transition hover:bg-[#e5cf7d]"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
