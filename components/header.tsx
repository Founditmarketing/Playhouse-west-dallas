"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-2" },
  { label: "Audit", href: "/audit-1" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-primary">
      <nav className="relative bg-white border-b border-zinc-200">
        <div className="flex items-center justify-between px-4 py-2 lg:px-8 lg:py-0 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-2">
              <span className="sr-only">Playhouse West Dallas Home</span>
              <Image
                src="/images/playhouselogo.webp"
                alt="Playhouse West Dallas Logo"
                width={200}
                height={66}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-center px-5 py-6 text-sm uppercase font-serif transition-all ${isActive ? "text-primary" : "text-[#333333] hover:text-primary"
                      }`}
                  >
                    <span className="relative tracking-[4px]">
                      {link.label}
                      <span className={`absolute left-0 right-[4px] -bottom-1 border-b-2 transition-all ${isActive ? "border-primary" : "border-transparent"
                        }`} />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-primary p-2"
            aria-label="Open navigation menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-foreground p-2"
              aria-label="Close navigation menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xl font-serif uppercase tracking-wider transition-colors ${isActive ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
