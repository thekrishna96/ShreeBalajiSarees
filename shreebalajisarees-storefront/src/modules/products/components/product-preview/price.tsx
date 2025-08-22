import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      {price.price_type === "sale" && (
        <Text
          className="line-through text-gray-400 text-sm"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("font-bold text-lg", {
          "text-red-600": price.price_type === "sale",
          "text-gray-900": price.price_type !== "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
      {price.price_type === "sale" && (
        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
          Sale
        </span>
      )}
    </div>
  )
}
