"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Maximize, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCustomFullscreen, setIsCustomFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsCustomFullscreen(true)
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCustomFullscreen(false)
    }
    window.addEventListener("keydown", handleEsc)

    if (isCustomFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }
  }, [isCustomFullscreen])

  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Hero Video */}
        <div className="w-full lg:w-1/2 p-[12px] lg:pr-0">
          <div
            className={cn(
              "relative aspect-[984/509] w-full h-full overflow-hidden bg-black cursor-pointer group transition-all duration-300",
              isCustomFullscreen ? "fixed inset-0 z-[100] aspect-auto p-4 md:p-12 flex items-center justify-center bg-black" : ""
            )}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/images/playhousesnewvideo.mp4"
              className={cn(
                "w-full h-full object-cover transition-all duration-300",
                isCustomFullscreen ? "object-contain max-w-full max-h-full" : ""
              )}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play Overlay */}
            {!isPlaying && !isCustomFullscreen && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Custom Fullscreen Close Button */}
            {isCustomFullscreen && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsCustomFullscreen(false)
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all z-[110]"
                aria-label="Close fullscreen"
              >
                <X className="w-8 h-8" />
              </button>
            )}

            {/* Custom Fullscreen Trigger Button */}
            {!isCustomFullscreen && (
              <button
                onClick={handleFullscreen}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label="Full screen"
              >
                <Maximize className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-primary px-8 py-12 lg:py-20">
          <div className="max-w-lg text-center lg:text-center">
            <h1 className="font-serif text-primary-foreground text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider leading-relaxed text-balance">
              Authentic Meisner training and repertory theater company at Playhouse West Dallas
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
