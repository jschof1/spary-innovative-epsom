import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Tag, Clock } from "lucide-react"

// Set target date to end of February 2026 at 23:59:59 local time
const TARGET_DATE = new Date(2026, 1, 28, 23, 59, 59) // Month is 0-indexed, so 1 = February

function getTimeRemaining() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds,
    expired: false,
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export const PromoCountdown = () => {
  const [time, setTime] = useState(() => getTimeRemaining())
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("promo-countdown-dismissed") === "true"
    } catch {
      return false
    }
  })

  useEffect(() => {
    // Update immediately on mount
    setTime(getTimeRemaining())
    
    // Then update every second
    const intervalId = setInterval(() => {
      const remaining = getTimeRemaining()
      setTime(remaining)
      
      // Clear interval if expired
      if (remaining.expired) {
        clearInterval(intervalId)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (dismissed || time.expired) return null

  const handleDismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem("promo-countdown-dismissed", "true")
    } catch {
      // ignore
    }
  }

  return (
    <div className="relative z-40 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Subtle animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" />

      <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3 sm:gap-5 relative">
        {/* Tag icon */}
        <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 flex-shrink-0">
          <Tag className="w-4 h-4 text-orange-500" />
        </div>

        {/* Message */}
        <p className="text-xs sm:text-sm font-semibold text-center">
          <span className="text-orange-400 font-bold">15% OFF</span>
          <span className="mx-1.5 text-white/60 hidden sm:inline">|</span>
          <span className="hidden sm:inline">All Supplies &mdash; Limited Time Only</span>
          <span className="sm:hidden"> Supplies</span>
        </p>

        {/* Countdown */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          <Clock className="w-3.5 h-3.5 text-orange-400 hidden sm:block" />
          <div className="flex items-center gap-0.5 sm:gap-1 font-mono text-xs sm:text-sm font-bold tracking-wide">
            <span className="bg-white/10 rounded px-1.5 py-0.5">{pad(time.days)}<span className="text-[10px] text-white/50 ml-0.5 font-sans">d</span></span>
            <span className="text-white/40">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5">{pad(time.hours)}<span className="text-[10px] text-white/50 ml-0.5 font-sans">h</span></span>
            <span className="text-white/40">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5">{pad(time.minutes)}<span className="text-[10px] text-white/50 ml-0.5 font-sans">m</span></span>
            <span className="text-white/40">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5">{pad(time.seconds)}<span className="text-[10px] text-white/50 ml-0.5 font-sans">s</span></span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/contact#booking-form"
          className="hidden md:inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors shadow-lg shadow-orange-500/20 flex-shrink-0"
        >
          CLAIM NOW
        </Link>

        {/* Dismiss */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors"
          aria-label="Dismiss promotion"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
