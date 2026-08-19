export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(216,186,96,0.14),_transparent_28%),linear-gradient(135deg,_#f7f1e2_0%,_#fffaf4_45%,_#edf4ef_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(216,186,96,0.08),_transparent_28%),linear-gradient(135deg,_#0d1117_0%,_#1a3d35_45%,_#0d1117_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
        <div className="flex flex-col justify-center animate-fade-up">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d3c38a] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d453d] shadow-sm backdrop-blur-sm dark:border-[#3d6a5e] dark:bg-[#1a3d35]/80 dark:text-[#d8ba60]">
            <span className="h-2 w-2 rounded-full bg-[#d8ba60]" />
            Trusted counsel for life & business
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#163a2e] sm:text-5xl lg:text-6xl dark:text-white">
            Smart legal guidance when every decision matters.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4b6761] dark:text-[#d9e7e3]">
            We help individuals, founders, and families navigate complex legal
            matters with clarity, confidence, and practical strategy.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#163a2e] px-6 py-3 text-sm font-semibold text-[#f7f0dc] shadow-sm transition hover:bg-[#1c473f] dark:bg-[#d8ba60] dark:text-[#163a2e] dark:hover:bg-[#e6cd76]"
            >
              Book a consultation
            </a>
            <a
              href="#practice-areas"
              className="inline-flex items-center justify-center rounded-md border border-[#d3c38a] bg-white px-6 py-3 text-sm font-semibold text-[#163a2e] shadow-sm transition hover:bg-[#fdf9f1] dark:border-[#3d6a5e] dark:bg-[#1a3d35] dark:text-[#dfe8e5] dark:hover:bg-[#2d564b]"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
            {[
              ["25+", "Years of combined experience"],
              ["1,200+", "Clients represented"],
              ["98%", "Client satisfaction"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-[#dfe5df] bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-[#3d6a5e] dark:bg-[#1a3d35]/80"
              >
                <div className="text-2xl font-bold text-[#163a2e] dark:text-white">
                  {value}
                </div>
                <div className="mt-2 text-xs leading-5 text-[#4d6761] dark:text-[#d9e7e3]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-[#d8ba60]/40 blur-3xl dark:bg-[#d8ba60]/20" />
          <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-[#c7e0d5]/60 blur-3xl dark:bg-[#1a3d35]/40" />

          <div className="relative rounded-[2rem] border border-[#dfe5df] bg-white p-6 shadow-[0_30px_80px_rgba(13,34,29,0.12)] dark:border-[#3d6a5e] dark:bg-[#1a3d35] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="rounded-[1.5rem] bg-[#163a2e] p-5 text-white dark:bg-[#0d1117]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#dfe8e5]">
                  Case overview
                </p>
                <span className="rounded-full bg-[#d8ba60]/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5de93]">
                  Active
                </span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d9e7e3]">
                    Matter type
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Business advisory
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d9e7e3]">
                    Status
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Strategy review in progress
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#dfe5df] bg-[#f6f1e8] p-5 dark:border-[#3d6a5e] dark:bg-[#0d1117]">
              <p className="text-sm font-semibold text-[#163a2e] dark:text-[#dfe8e5]">
                Why clients choose us
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#4d6761] dark:text-[#d9e7e3]">
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8ba60]" />
                  Clear communication
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8ba60]" />
                  Practical legal strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8ba60]" />
                  Responsive support from day one
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
