"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import {
  FESTIVAL_DATE,
  FESTIVAL_PAGE_URL,
  FESTIVAL_TICKETS_URL,
} from "@/lib/festival"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-2" },
  { label: "Audit a Class", href: "/audit-1" },
  { label: "Classes", href: "/classes" },
  { label: "Film Festival", href: "/film-festival" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("filmFestivalBannerDismissed")
      if (dismissed === "true") {
        setIsBannerVisible(false)
      }
    }
  }, [])

  const handleDismissBanner = () => {
    setIsBannerVisible(false)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("filmFestivalBannerDismissed", "true")
    }
  }

  return (
    <header className="bg-primary">
      {/* Global Announcement Bar */}
      {isBannerVisible && (
        <div className="bg-zinc-900 text-white w-full relative">
          <div className="max-w-[1240px] mx-auto px-8 py-3 md:px-4 md:py-3 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <p className="text-[13px] sm:text-sm md:text-base font-medium text-center leading-snug">
              <span className="font-bold text-primary mr-1 md:mr-2 uppercase tracking-wider">Upcoming:</span>
              The first annual{" "}
              <Link href={FESTIVAL_PAGE_URL} className="font-bold text-primary underline underline-offset-4 decoration-primary/60 hover:text-white transition-colors cursor-pointer">Playhouse West Film Festival</Link>
              {" "}&mdash; {FESTIVAL_DATE}
            </p>
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <Link
                href={FESTIVAL_PAGE_URL}
                className="bg-transparent border border-white hover:bg-white hover:text-zinc-900 transition-colors text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2"
              >
                Learn More
              </Link>
              <a
                href={FESTIVAL_TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border border-primary hover:bg-white hover:border-white hover:text-primary transition-colors text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 md:px-5 md:py-2"
              >
                Buy Tickets
              </a>
            </div>

            <button
              onClick={handleDismissBanner}
              className="absolute bottom-2 right-2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white/60 hover:text-white p-1"
              aria-label="Close announcement"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

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
