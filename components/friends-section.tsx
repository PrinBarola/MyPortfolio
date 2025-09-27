"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const friendPhotos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1bc0b80d-e78c-4f0a-80d8-fbb514ff5ee7-qMB4XjHykNJ27vaEADC1wAyLjcNkTC.jpeg",
    alt: "Family and friends group photo",
    caption: "Family bonds that last forever",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/friendss.jpg-FKcDAsG6mROPIR37gXwgrluXHFK4Xq.jpeg",
    alt: "Friends at the mall",
    caption: "Great times with amazing friends",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Friends.jpg-3zwMJ4Zq8W4qngWL1IQe3hho7PFXfJ.jpeg",
    alt: "Friends at restaurant",
    caption: "Enjoying good food and great company",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4478adf-bbb6-489b-aa32-d67bc1fdcabe-WHrk6ui8ZkTRMkI22I1AtBnboA0lRx.jpeg",
    alt: "Casual selfie with friends",
    caption: "Spontaneous moments are the best",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6bc8e1de-dd2e-448c-9da1-e150f6a39045-j2AzSkRPBUdFuR6AJWyTliPBzrVNnA.jpeg",
    alt: "McDonald's hangout",
    caption: "Simple joys with great friends",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a92a328-5b63-4ddb-b1b9-ba78c1fd851e-pm7KQWZ4CI4bjvESljfg0YXFpoNxrX.jpeg",
    alt: "Community street photo",
    caption: "Adventures in our neighborhood",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b857e237-3cc0-42be-b33c-af2d3df02ce2-R8YmNtq2rkpVcJ1lEZISUO2lUBfnSb.jpeg",
    alt: "Solo portrait at restaurant",
    caption: "Moments of reflection",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a67f188e-2716-4cf0-9789-7a739c3f327b-cWz7z6dVJGE1es1P8pxJRCztzfC731.jpeg",
    alt: "Large group photo with masks",
    caption: "Together through all seasons",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/74ddef7d-a8e8-4501-809d-2c2708455b13-bVEPC36Bw4INLcnvbnw3y81R2iwWOD.jpeg",
    alt: "Casual group dining",
    caption: "Food court memories",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a1da88ec-9012-495c-bbba-ae0ae83a49ff-11MNBGA5X9znBG3yaFfKA0YQDRufyU.jpeg",
    alt: "Night selfie with friends",
    caption: "Late night adventures",
  },
]

export function FriendsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % friendPhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="friends" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Friends & <span className="text-yellow-400">Memories</span>
          </h2>

          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 p-6 rounded-lg shadow-lg inline-block max-w-2xl">
              <p className="text-white text-base leading-relaxed">
                "No matter what life throws at us, we can all rise through the ashes. True friendship means standing
                together through hardships and celebrating every victory as one."
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Film strip holes */}
            <div className="absolute -left-4 top-0 bottom-0 w-8 bg-black border-l-2 border-r-2 border-yellow-400/30 z-10">
              <div className="flex flex-col justify-evenly h-full px-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400/20 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute -right-4 top-0 bottom-0 w-8 bg-black border-l-2 border-r-2 border-yellow-400/30 z-10">
              <div className="flex flex-col justify-evenly h-full px-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400/20 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Main slideshow container */}
            <div className="relative h-64 bg-black border-2 border-yellow-400/30 rounded-lg overflow-hidden shadow-2xl">
              {/* Current slide */}
              <div className="relative w-full h-full">
                <Image
                  src={friendPhotos[currentSlide].src || "/placeholder.svg"}
                  alt={friendPhotos[currentSlide].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="text-yellow-400 font-medium text-sm bg-black/50 px-3 py-1 rounded-full inline-block">
                    {friendPhotos[currentSlide].caption}
                  </p>
                </div>

                {/* Slide counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-2 py-1 rounded text-xs font-mono">
                  {String(currentSlide + 1).padStart(2, "0")}/{String(friendPhotos.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {friendPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-yellow-400 w-6" : "bg-yellow-400/30 hover:bg-yellow-400/50"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 flex justify-center space-x-2 overflow-x-auto pb-2">
              {friendPhotos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex-shrink-0 relative w-16 h-12 rounded border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? "border-yellow-400 scale-110"
                      : "border-yellow-400/30 hover:border-yellow-400/60"
                  }`}
                >
                  <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover rounded" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
