export default function Footer() {
  return (
    <footer className="bg-[#0d221d] text-[#dfe8e5] dark:bg-[#0d1117] dark:text-[#a7bdb6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.7fr_0.8fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8ba60] text-sm font-bold text-[#163a2e] dark:bg-[#d8ba60] dark:text-[#0d1117]">
              K
            </div>
            <div>
              <div className="text-lg font-semibold text-white">
                Kivutha & Opiyo
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#d7c280]">
                Advocates
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#cfe0db]">
            Strategic legal representation for individuals, entrepreneurs, and
            families seeking clear guidance and confident decision-making.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f7f0dc]">
            Practice Areas
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#dfe8e5] dark:text-[#a7bdb6]">
            <li>Business Law</li>
            <li>Family Law</li>
            <li>Estate Planning</li>
            <li>Real Estate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f7f0dc]">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#dfe8e5] dark:text-[#a7bdb6]">
            <li>Diani, Kwale, Kenya</li>
            <li>+254 20 555 0148</li>
            <li>+254 703 123 456</li>
            <li>
              <a
                href="mailto:matthewsrickypro@gmail.com"
                className="hover:text-[#d8ba60] transition"
              >
                matthewsrickypro@gmail.com
              </a>
            </li>
            <li>Mon–Fri • 8:00 AM–5:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a3d35] dark:border-[#2d564b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-[#a7bdb6] lg:px-10">
          <p>© 2026 Kivutha & Opiyo Advocates. All rights reserved.</p>
          <p>Privacy Policy • Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
