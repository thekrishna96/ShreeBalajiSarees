import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import { getRegion } from "@lib/data/regions"
import ProductCard from "@modules/products/components/product-card"
import { HttpTypes } from "@medusajs/types"

export const metadata: Metadata = {
  title: "Shree Balaji Sarees - Traditional & Modern Sarees",
  description:
    "Discover beautiful traditional and modern sarees at Shree Balaji Sarees. Quality fabrics, elegant designs, and affordable prices.",
}

const mockProducts: HttpTypes.StoreProduct[] = [
  {
    id: "prod_1",
    title: "Elegant Silk Saree",
    handle: "elegant-silk-saree",
    thumbnail: "/images/hero-2.jpg",
    variants: [
      {
        id: "variant_1",
        title: "Red",
        prices: [
          {
            amount: 5000,
            currency_code: "inr",
          },
        ],
      },
    ],
  },
  {
    id: "prod_2",
    title: "Classic Cotton Saree",
    handle: "classic-cotton-saree",
    thumbnail: "/images/hero-3.jpg",
    variants: [
      {
        id: "variant_2",
        title: "Blue",
        prices: [
          {
            amount: 3500,
            currency_code: "inr",
          },
        ],
      },
    ],
  },
  {
    id: "prod_3",
    title: "Modern Georgette Saree",
    handle: "modern-georgette-saree",
    thumbnail: "/images/home-hero.png",
    variants: [
      {
        id: "variant_3",
        title: "Green",
        prices: [
          {
            amount: 4200,
            currency_code: "inr",
          },
        ],
      },
    ],
  },
] as any

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

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured Collection
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our handpicked selection of the finest sarees, crafted
              with passion and elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Shree Balaji Sarees is a celebration of India's rich textile
                heritage. We are a family-owned business dedicated to bringing
                you the most beautiful sarees, handcrafted by skilled artisans
                from across the country. Our mission is to preserve the timeless
                art of saree making while embracing modern designs that appeal
                to the contemporary woman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
