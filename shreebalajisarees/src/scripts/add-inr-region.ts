import { MedusaContainer } from "@medusajs/framework/types"

export default async function addINRRegion(container: MedusaContainer) {
  const regionModuleService = container.resolve("region")
  const currencyModuleService = container.resolve("currency")
  const countryModuleService = container.resolve("country")

  try {
    // Check if INR currency exists, if not create it
    let inrCurrency
    try {
      inrCurrency = await currencyModuleService.retrieveCurrency("inr")
    } catch (error) {
      console.log("Creating INR currency...")
      inrCurrency = await currencyModuleService.createCurrencies({
        code: "inr",
        symbol: "₹",
        symbol_native: "₹",
        name: "Indian Rupee",
      })
    }

    // Check if India country exists, if not create it
    let indiaCountry
    try {
      indiaCountry = await countryModuleService.retrieveCountry("in")
    } catch (error) {
      console.log("Creating India country...")
      indiaCountry = await countryModuleService.createCountries({
        iso_2: "in",
        iso_3: "ind",
        num_code: 356,
        name: "India",
        display_name: "India",
      })
    }

    // Check if INR region already exists
    const existingRegions = await regionModuleService.listRegions({
      currency_code: "inr"
    })

    if (existingRegions.length > 0) {
      console.log("INR region already exists!")
      return existingRegions[0]
    }

    // Create INR region
    console.log("Creating INR region...")
    const inrRegion = await regionModuleService.createRegions({
      name: "India",
      currency_code: "inr",
      countries: ["in"],
      payment_providers: ["manual"],
      fulfillment_providers: ["manual"],
      is_tax_inclusive: false,
      metadata: {
        tax_rate: 18
      }
    })

    console.log("✅ INR region created successfully!")
    console.log("Region details:", {
      id: inrRegion.id,
      name: inrRegion.name,
      currency_code: inrRegion.currency_code,
      countries: inrRegion.countries
    })

    return inrRegion

  } catch (error) {
    console.error("❌ Error creating INR region:", error)
    throw error
  }
}
