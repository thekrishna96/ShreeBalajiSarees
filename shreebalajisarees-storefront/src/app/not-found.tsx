import { ArrowUpRightMini } from "@medusajs/icons"
import { Metadata } from "next"
import Link from "next/link"

// Custom Icons
const HomeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const ShoppingBagIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
)

export const metadata: Metadata = {
  title: "404 - Page Not Found | Shree Balaji Sarees",
  description:
    "The page you're looking for doesn't exist. Explore our beautiful collection of authentic handwoven sarees.",
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-none animate-bounce-in">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 animate-fade-in">
              Oops! This Thread Seems to be Missing
            </h2>
            <p
              className="text-base sm:text-lg text-gray-600 max-w-md mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              The page you're looking for has wandered off like a silk thread in
              the wind. Let's help you find your way back to our beautiful
              collection.
            </p>
          </div>

          {/* Saree-themed Icon */}
          <div
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <HomeIcon />
              <span>Return Home</span>
              <ArrowUpRightMini className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </Link>

            <Link
              href="/store"
              className="group flex items-center gap-3 px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingBagIcon />
              <span>Browse Sarees</span>
              <ArrowUpRightMini className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          {/* Additional Help Text */}
          <div
            className="mt-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm text-gray-500 mb-4">
              Looking for something specific? Try these popular sections:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link
                href="/collections"
                className="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
              >
                Collections
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/account"
                className="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
              >
                My Account
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/cart"
                className="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
              >
                Shopping Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
