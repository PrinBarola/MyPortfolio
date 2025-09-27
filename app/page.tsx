"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FriendsSection } from "@/components/friends-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { LoginModal } from "@/components/login-modal"

export default function Portfolio() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
    setIsLoading(false)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation isAuthenticated={isAuthenticated} onLogin={() => setShowLoginModal(true)} onLogout={handleLogout} />
      <HeroSection isAuthenticated={isAuthenticated} onLogin={() => setShowLoginModal(true)} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <FriendsSection />
      <ContactSection />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
    </main>
  )
}
