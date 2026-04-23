'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

export function FestivalPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenFestivalPopup')
    if (!hasSeenPopup) {
      // Small delay so it doesn't abruptly pop up the millisecond the page loads
      const timer = setTimeout(() => {
        setOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      sessionStorage.setItem('hasSeenFestivalPopup', 'true')
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
        <div className="relative">
          <Link
            href="https://filmfreeway.com/PlayhouseWestFilmFestival-Dallas-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOpenChange(false)}
            className="block transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/Regular-Deadline-June-15_-2026-rectangle.png"
              alt="Playhouse West Film Festival - Regular Deadline June 15, 2026"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
