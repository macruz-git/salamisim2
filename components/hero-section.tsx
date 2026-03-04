"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Play, X } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Decorative gold ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold/10 animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gold/5 pointer-events-none" style={{ animationDelay: '1s' }} />

      <div
        className={`relative z-10 transition-all duration-1000 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tagline */}
        <p className="mb-4 text-sm tracking-[0.3em] uppercase text-gold/80 font-[var(--font-inter)]">
          A HUMSS Strand Advocacy
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
          <span className="text-gold">Salamisim</span>
          <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-2 font-normal italic">
            Beyond Hiraya
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gold/40" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-gold"
            aria-hidden="true"
          >
            <path
              d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-foreground/60 leading-relaxed font-[var(--font-inter)]">
          Kung bibigyan ka ng pagkakataong bumalik sa nakaraan, babalikan mo ba ito? SALAMISIM: Beyond Hiraya is a meaningful pause a moment of reflection on everything we have learned, experienced, and discovered throughout our journey as HUMSS students.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-3 text-sm text-gold hover:bg-gold/20 transition-all duration-300 tracking-wide font-[var(--font-inter)]"
          >
            Explore HUMSS
          </a>
          
          {/* Play Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gold hover:bg-gold/90 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Play HUMSS video"
          >
            <Play size={28} className="fill-current text-primary-foreground ml-1" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gold/40" size={28} />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="text-white" />
            </button>
            <iframe
              src="https://drive.google.com/file/d/1ls0z7NZGicCInIo2H6CUvbobpFboVqpA/preview"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}
