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
      <div className="py-12">
        <div className="content-container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're preparing our beautiful collection of sarees for you. Please
              check back soon!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Traditional Sarees
                </h3>
                <p className="text-gray-600 text-sm">
                  Classic designs with authentic craftsmanship
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Modern Collection
                </h3>
                <p className="text-gray-600 text-sm">
                  Contemporary styles for the modern woman
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600 text-sm">
                  Finest fabrics and superior craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
