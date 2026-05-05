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
        <div className="relative flex flex-col items-center">
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
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mt-6 px-4">
            <Link
              href="https://filmfreeway.com/PlayhouseWestFilmFestival-Dallas-1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOpenChange(false)}
              className="flex-1 bg-zinc-900 text-white text-center px-6 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors shadow-xl border border-zinc-700"
            >
              Submit Now
            </Link>
            <Link
              href="https://events.ticketleap.com/events/playhouse-west-dallas"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOpenChange(false)}
              className="flex-1 bg-red-600 text-white text-center px-6 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-xl"
            >
              Purchase Tickets
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
