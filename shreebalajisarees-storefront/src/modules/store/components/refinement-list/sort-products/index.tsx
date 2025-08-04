"use client"

import { memo, useCallback } from "react"
import FastFilterGroup from "@modules/common/components/fast-filter-group"

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
    const handleChange = useCallback(
      (value: SortOptions) => {
        setQueryParams("sortBy", value)
      },
      [setQueryParams]
    )

    return (
      <FastFilterGroup
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
        data-testid={dataTestId}
      />
    )
  }
)

SortProducts.displayName = "SortProducts"

export default SortProducts
