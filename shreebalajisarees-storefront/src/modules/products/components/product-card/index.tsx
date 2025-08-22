import { HttpTypes } from "@medusajs/types"
import React from "react"
import { getProductPrice } from "@lib/util/get-product-price"
import Thumbnail from "../thumbnail"
import Link from "next/link"

type ProductCardProps = {
  product: HttpTypes.StoreProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cheapestPrice } = getProductPrice({
    product,
    variantId: product.variants?.[0]?.id,
  })

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block overflow-hidden"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Thumbnail thumbnail={product.thumbnail} size="full" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
          {product.title}
        </h3>
        {cheapestPrice && (
          <p className="mt-1 text-md text-gray-600">
            {cheapestPrice.calculated_price}
          </p>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
