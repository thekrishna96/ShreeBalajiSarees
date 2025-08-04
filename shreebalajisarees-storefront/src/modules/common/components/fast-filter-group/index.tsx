"use client"

import { memo, useCallback } from "react"
import { clx } from "@medusajs/ui"

type FastFilterGroupProps = {
  title: string
  items: {
    value: string
    label: string
    icon?: React.ReactNode
  }[]
  value: any
  handleChange: (value: any) => void
  "data-testid"?: string
}

const FastFilterGroup = memo(({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FastFilterGroupProps) => {
  return (
    <div className="space-y-3">
      {/* Compact Title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Fast Options */}
      <div className="space-y-2" data-testid={dataTestId}>
        {items?.map((item) => (
          <FilterOption
            key={item.value}
            item={item}
            isSelected={item.value === value}
            onSelect={handleChange}
          />
        ))}
      </div>
    </div>
  )
})

// Optimized individual filter option
const FilterOption = memo(({ 
  item, 
  isSelected, 
  onSelect 
}: {
  item: { value: string; label: string; icon?: React.ReactNode }
  isSelected: boolean
  onSelect: (value: string) => void
}) => {
  const handleClick = useCallback(() => {
    onSelect(item.value)
  }, [onSelect, item.value])

  return (
    <button
      onClick={handleClick}
      className={clx(
        "flex items-center gap-3 w-full p-2.5 rounded-lg border transition-colors duration-100 text-left",
        isSelected
          ? "border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50"
          : "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-25"
      )}
      data-testid="radio-label"
      data-active={isSelected}
    >
      {/* Fast Icon */}
      {item.icon && (
        <div
          className={clx(
            "flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-100",
            isSelected
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-gray-100 text-gray-600"
          )}
        >
          <div className="scale-75">{item.icon}</div>
        </div>
      )}

      {/* Fast Content */}
      <div className="flex-1 min-w-0">
        <div className={clx(
          "text-sm font-medium transition-colors duration-100",
          isSelected ? "text-purple-700" : "text-gray-900"
        )}>
          {item.label}
        </div>
      </div>

      {/* Fast Selection Dot */}
      <div className={clx(
        "w-2.5 h-2.5 rounded-full transition-colors duration-100",
        isSelected ? "bg-purple-500" : "bg-gray-300"
      )}></div>
    </button>
  )
})

FastFilterGroup.displayName = "FastFilterGroup"
FilterOption.displayName = "FilterOption"

export default FastFilterGroup
