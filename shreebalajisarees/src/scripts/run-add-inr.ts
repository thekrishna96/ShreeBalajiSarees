import { MedusaContainer } from "@medusajs/framework/types"
import addINRRegion from "./add-inr-region"

export default async function runAddINR(container: MedusaContainer) {
  console.log("🚀 Starting INR region setup...")
  
  try {
    await addINRRegion(container)
    console.log("🎉 INR region setup completed successfully!")
  } catch (error) {
    console.error("💥 Failed to setup INR region:", error)
    process.exit(1)
  }
}
