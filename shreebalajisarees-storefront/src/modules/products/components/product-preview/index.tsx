import { memo } from "react"
import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

const ProductPreview = memo(async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block w-full h-full"
    >
      <div
        data-testid="product-wrapper"
        className="flex flex-col h-full space-y-4"
      >
        <div className="flex-shrink-0">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
        </div>
        <div className="px-2 space-y-3 flex-grow flex flex-col justify-between">
          <Text
            className="text-gray-900 font-semibold text-base leading-snug line-clamp-2 group-hover:text-purple-700 transition-colors duration-200"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <div className="flex items-center justify-start mt-auto">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
})

ProductPreview.displayName = "ProductPreview"

export default ProductPreview
