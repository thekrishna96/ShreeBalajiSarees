import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Shree Balaji Sarees - Traditional & Modern Sarees",
  description:
    "Discover beautiful traditional and modern sarees at Shree Balaji Sarees. Quality fabrics, elegant designs, and affordable prices.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
        <div className="content-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-purple-700 text-sm font-semibold">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Crafted with Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional craftsmanship and
              modern elegance in every saree
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5L6 13l1.41-1.41L10.5 14.5 16.59 8.41 18 9.82l-7.5 7.68z",
                iconType: "premium", // Custom premium badge icon
                title: "Premium Quality",
                description:
                  "Handpicked fabrics with authentic designs and superior craftsmanship",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
              },
              {
                icon: "M12 2l1.09 3.26L16 5.18l-2.91 2.91L14 12l-2-1.09L10 12l.91-3.91L8 5.18l2.91-.92L12 2z",
                iconType: "collection", // Elegant diamond/gem icon
                title: "Curated Collection",
                description:
                  "Carefully selected traditional and contemporary styles for every occasion",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
                iconType: "delivery", // Professional grid/logistics icon
                title: "Fast Delivery",
                description:
                  "Quick and secure shipping across India with real-time tracking",
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-50 to-orange-50",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`}
                ></div>
                <div className="relative p-8 text-center space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {index === 0 && (
                      // Premium Quality - Elegant Shield with Crown
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        <path
                          d="M12 7l-1.5 3h-3l2.5 2-1 3 3-2 3 2-1-3 2.5-2h-3L12 7z"
                          fill="rgba(255,255,255,0.3)"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      // Curated Collection - Elegant Lotus/Flower
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2.5 4.5C7 14 6 16 6 18c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2-1-4-2.5-5.5C13 11.5 14 10 14 8c0-3.5-2.5-6-6-6z" />
                        <path
                          d="M18 8c0-2-1-3.5-2.5-4.5C17 2 18 1 20 1c2.2 0 4 1.8 4 4 0 2-1 4-2.5 5.5C23 11.5 24 13 24 15c0 3.5-2.5 6-6 6-2 0-3.5-1-4.5-2.5C15 20 16 21 18 21c2.2 0 4-1.8 4-4 0-2-1-4-2.5-5.5z"
                          opacity="0.3"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      // Fast Delivery - Professional Truck with Motion Lines
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        <path
                          d="M1 6h4M1 8h3M1 10h2"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.4"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <span className="text-purple-700 text-sm font-semibold">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Beautiful Collection
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We're preparing our exquisite collection of sarees for you. Each
                piece is carefully selected to bring you the finest in
                traditional and modern elegance.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get Notified First
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when our collection launches
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
