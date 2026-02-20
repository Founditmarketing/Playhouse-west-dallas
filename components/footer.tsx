import Link from "next/link"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-2" },
  { label: "Audit", href: "/audit-1" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-black py-14 md:py-20">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">
            {"Copyright \u00A9 2026 Playhouse West Dallas - All Rights Reserved."}
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-primary font-medium text-sm transition-colors uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
