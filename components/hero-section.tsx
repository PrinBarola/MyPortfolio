"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { LogIn } from "lucide-react"

interface HeroSectionProps {
  isAuthenticated: boolean
  onLogin: () => void
}

export function HeroSection({ isAuthenticated, onLogin }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Prin Barola"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-6xl lg:text-8xl font-bold mb-4">
                <span className="text-primary typewriter inline-block">{displayText}</span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6">IT Student • Developer • Problem Solver</div>
              <p className="text-lg text-gray-400 max-w-2xl">
                A 21-year-old Filipino who strives to balance academics and work, with over two years of professional
                experience and a passion for technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-secondary transition-colors"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-colors"
                  >
                    Get In Touch
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onLogin}
                    className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-5 h-5" />
                    Access Portfolio
                  </button>
                  <button
                    onClick={onLogin}
                    className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-colors"
                  >
                    View My Work
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl hover-lift">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prin%20Barola%20Picture.jpg-yaBFHuyGo92r9nOQURCMEYhROkzTPV.jpeg"
                  alt="Prin Barola"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
