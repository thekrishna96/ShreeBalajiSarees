const { Medusa } = require("@medusajs/js-sdk")

async function addINRRegion() {
  // Initialize Medusa client
  const medusa = new Medusa({
    baseUrl: "http://localhost:9000",
    debug: true,
  })

  try {
    console.log("🚀 Adding INR region to Medusa...")

    // First, let's check existing regions
    console.log("📋 Checking existing regions...")
    const { regions } = await medusa.admin.region.list()
    console.log("Existing regions:", regions.map(r => ({ id: r.id, name: r.name, currency: r.currency_code })))

    // Check if INR region already exists
    const existingINRRegion = regions.find(r => r.currency_code === 'inr')
    if (existingINRRegion) {
      console.log("✅ INR region already exists:", existingINRRegion.name)
      return existingINRRegion
    }

    // Create INR region
    console.log("🔧 Creating INR region...")
    const newRegion = await medusa.admin.region.create({
      name: "India",
      currency_code: "inr",
      countries: ["in"],
      payment_providers: ["manual"],
      fulfillment_providers: ["manual"],
      is_tax_inclusive: false,
    })

    console.log("✅ INR region created successfully!")
    console.log("Region details:", {
      id: newRegion.region.id,
      name: newRegion.region.name,
      currency_code: newRegion.region.currency_code,
      countries: newRegion.region.countries
    })

    return newRegion.region

  } catch (error) {
    console.error("❌ Error adding INR region:", error.message)
    if (error.response) {
      console.error("Response data:", error.response.data)
    }
    throw error
  }
}

// Run the function
addINRRegion()
  .then(() => {
    console.log("🎉 INR region setup completed!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("💥 Failed to setup INR region:", error)
    process.exit(1)
  })
