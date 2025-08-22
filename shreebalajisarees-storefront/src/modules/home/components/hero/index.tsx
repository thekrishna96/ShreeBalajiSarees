"use client"

import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    image: "/images/home-hero.png",
    title: "Shree Balaji Sarees",
    subtitle: "Discover Beautiful Traditional & Modern Sarees",
    cta: "Shop Now",
    gradient: "from-amber-300 via-rose-300 to-pink-400",
  },
  {
    image: "/images/hero-2.jpg", // Add more hero images
    title: "Premium Collection",
    subtitle: "Handcrafted Elegance for Every Occasion",
    cta: "Explore Collection",
    gradient: "from-purple-300 via-pink-300 to-rose-400",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Festive Specials",
    subtitle: "Celebrate in Style with Our Festive Range",
    cta: "Shop Festive",
    gradient: "from-rose-300 via-pink-300 to-purple-400",
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide]) // Added currentSlide dependency to reset timer

  const currentHero = heroSlides[currentSlide]

  // Function to handle manual navigation with timer reset
  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide)
    setIsAutoPlaying(false) // Pause auto-play
    // Resume auto-play after 8 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <div className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center space-y-8">
          {/* Main Title */}
          <Heading
            level="h1"
            className="text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-white"
          >
            <span
              className={`block bg-gradient-to-r ${currentHero.gradient} text-transparent bg-clip-text animate-fade-in drop-shadow-lg`}
            >
              {currentHero.title}
            </span>
          </Heading>

          {/* Subtitle */}
          <Heading
            level="h2"
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white font-medium drop-shadow-md"
          >
            {currentHero.subtitle}
          </Heading>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <LocalizedClientLink href="/store">
              <button className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white text-gray-800 font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="relative z-10">{currentHero.cta}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </LocalizedClientLink>

            <LocalizedClientLink href="/store">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-lg">
                View Catalog
              </button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          handleSlideChange(
            (currentSlide - 1 + heroSlides.length) % heroSlides.length
          )
        }
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() =>
          handleSlideChange((currentSlide + 1) % heroSlides.length)
        }
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}

export default Hero
