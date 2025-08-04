import { redirect } from "next/navigation"
import { listRegions } from "@lib/data/regions"

export default async function RootPage() {
  try {
    // Get available regions
    const regions = await listRegions()

    // Default to India for Shree Balaji Sarees
    let countryCode = "in"

    // Check if India region exists, otherwise use first available region
    if (regions && regions.length > 0) {
      const indiaRegion = regions.find((region) =>
        region.countries?.some((country) => country.iso_2 === "in")
      )

      if (indiaRegion) {
        countryCode = "in"
      } else {
        // Fallback to first available country
        const firstRegion = regions[0]
        countryCode = firstRegion.countries?.[0]?.iso_2 || "us"
      }
    }

    // Redirect to country-specific page
    redirect(`/${countryCode}`)
  } catch (error) {
    console.error("Error in root page:", error)
    // Fallback redirect to India
    redirect("/in")
  }
}
