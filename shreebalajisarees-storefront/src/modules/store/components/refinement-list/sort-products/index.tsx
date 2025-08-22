"use client"

import { memo, useCallback, useState } from "react"
import { clx } from "@medusajs/ui"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

// Professional Icon Components
const NewIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

const LowToHighIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11l5-5m0 0l5 5m-5-5v12"
    />
  </svg>
)

const HighToLowIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 13l-5 5m0 0l-5-5m5 5V6"
    />
  </svg>
)

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
    icon: <NewIcon />,
  },
  {
    value: "price_asc",
    label: "Price: Low to High",
    icon: <LowToHighIcon />,
  },
  {
    value: "price_desc",
    label: "Price: High to Low",
    icon: <HighToLowIcon />,
  },
]

const SortProducts = memo(
  ({
    "data-testid": dataTestId,
    sortBy,
    setQueryParams,
  }: SortProductsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = useCallback(
      (value: SortOptions) => {
        setQueryParams("sortBy", value)
        setIsOpen(false)
      },
      [setQueryParams]
    )

    const currentOption =
      sortOptions.find((option) => option.value === sortBy) || sortOptions[0]

    return (
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
          <h3 className="text-sm font-semibold text-gray-900">Sort by</h3>
        </div>

        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-25 transition-colors duration-200"
          data-testid={dataTestId}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="scale-75">{currentOption.icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {currentOption.label}
            </span>
          </div>
          <svg
            className={clx(
              "w-4 h-4 text-gray-500 transition-transform duration-200",
              {
                "rotate-180": isOpen,
              }
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChange(option.value as SortOptions)}
                className={clx(
                  "w-full flex items-center gap-3 p-3 text-left hover:bg-purple-25 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl",
                  {
                    "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700":
                      option.value === sortBy,
                    "text-gray-900": option.value !== sortBy,
                  }
                )}
              >
                <div
                  className={clx(
                    "flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-200",
                    {
                      "bg-gradient-to-r from-purple-500 to-pink-500 text-white":
                        option.value === sortBy,
                      "bg-gray-100 text-gray-600": option.value !== sortBy,
                    }
                  )}
                >
                  <div className="scale-75">{option.icon}</div>
                </div>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Backdrop to close dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    )
  }
)

SortProducts.displayName = "SortProducts"

export default SortProducts
