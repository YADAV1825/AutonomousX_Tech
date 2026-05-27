import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/foundation", label: "Foundation Track" },
  { href: "/advanced", label: "Advanced AI Track" },
  { href: "/#pricing", label: "Pricing" },
];

const socialLinks = [
  { label: "Twitter / X", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "GitHub", href: "#", icon: "GH" },
  { label: "YouTube", href: "#", icon: "YT" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush-dark to-transparent opacity-60" />

      <div className="glass-strong border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 no-underline mb-4">
                <img
                  src="/images/autonomousX.png"
                  alt="AutonomousX"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-text-muted leading-relaxed">
                Master AI tools, build real products, and future-proof your career with hands-on AI bootcamps.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 list-none p-0 m-0">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted no-underline transition-colors hover:text-soft-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tracks */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Tracks
              </h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li>
                  <Link href="/foundation" className="text-sm text-text-muted no-underline transition-colors hover:text-soft-red">
                    Foundation Track
                  </Link>
                  <span className="block text-xs text-text-light mt-0.5">Ages 13–18 · School Students</span>
                </li>
                <li>
                  <Link href="/advanced" className="text-sm text-text-muted no-underline transition-colors hover:text-soft-red">
                    Advanced AI Track
                  </Link>
                  <span className="block text-xs text-text-light mt-0.5">Ages 18+ · College & Graduates</span>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Contact
              </h4>
              <a
                href="mailto:yrohit1825@gmail.com"
                className="text-sm text-soft-red no-underline font-medium hover:underline"
              >
                yrohit1825@gmail.com
              </a>

              <div className="flex gap-3 mt-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xs font-bold text-text-muted no-underline transition-all hover:text-soft-red hover:shadow-md hover:-translate-y-0.5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-light">
              © {new Date().getFullYear()} AutonomousX AI Academy. All rights reserved.
            </p>
            <p className="text-xs text-text-light">
              Built with passion for AI education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
