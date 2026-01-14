import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { PromoBanner } from "@/components/layout/PromoBanner"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingCTA } from "@/components/layout/FloatingCTA"
import { HomePage } from "@/pages/HomePage"
import { ServicesPage } from "@/pages/ServicesPage"
import { ServicePage } from "@/pages/ServicePage"
import { LocationPage } from "@/pages/LocationPage"
import { ServiceLocationPage } from "@/pages/ServiceLocationPage"
import { ContactPage } from "@/pages/ContactPage"
import { ReviewsPage } from "@/pages/ReviewsPage"
import { AboutPage } from "@/pages/AboutPage"
import FeedbackPage from "@/pages/FeedbackPage"
import { DiscountPage } from "@/pages/DiscountPage"
import { Toaster } from "@/components/ui/toaster"

// Progress bar component for engagement
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) {
        setScrollProgress(0)
        return
      }
      setScrollProgress((currentScrollY / totalHeight) * 100)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
      <div 
        className="h-full bg-orange-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,87,34,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

function App() {
  const location = useLocation()
  
  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 antialiased bg-white selection:bg-orange-500/30 selection:text-orange-900">
      <ScrollProgress />
      
      {/* Global Branding Accents - Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-dot-pattern" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <PromoBanner />
        <Header />
        
        <main className="flex-grow">
          {/* Main content wrapper with subtle side borders on large screens for a "framed" premium layout */}
          <div className="max-w-[1920px] mx-auto bg-white xl:border-x border-gray-100/80 shadow-sm relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/services/:serviceSlug" element={<ServicePage />} />
              <Route path="/locations/:locationSlug" element={<LocationPage />} />
              <Route path="/locations/:locationSlug/:serviceSlug" element={<ServiceLocationPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/discount" element={<DiscountPage />} />
            </Routes>
            
            {/* Branded accent divider at the very bottom of main content area */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" />
          </div>
        </main>

        <Footer />
        <FloatingCTA />
        <Toaster />
      </div>

      {/* Branded Corner Accents for depth */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-navy-900/[0.02] rounded-bl-full pointer-events-none -mr-32 -mt-32 z-0" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-orange-500/[0.02] rounded-tr-full pointer-events-none -ml-32 -mb-32 z-0" />
    </div>
  )
}

export default App
