"use client"

import { memo, useCallback } from "react"
import { clx } from "@medusajs/ui"

type CompactFilterGroupProps = {
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

const CompactFilterGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: CompactFilterGroupProps) => {
  return (
    <div className="space-y-3">
      {/* Compact Title */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Compact Options */}
      <div className="space-y-2" data-testid={dataTestId}>
        {items?.map((item) => {
          const isSelected = item.value === value

          return (
            <button
              key={item.value}
              onClick={() => handleChange(item.value)}
              className={clx(
                "flex items-center gap-3 w-full p-2.5 rounded-lg border transition-all duration-200 text-left",
                {
                  "border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50":
                    isSelected,
                  "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-25":
                    !isSelected,
                }
              )}
              data-testid="radio-label"
              data-active={isSelected}
            >
              {/* Compact Icon */}
              {item.icon && (
                <div
                  className={clx(
                    "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200",
                    {
                      "bg-gradient-to-r from-purple-500 to-pink-500 text-white":
                        isSelected,
                      "bg-gray-100 text-gray-600": !isSelected,
                    }
                  )}
                >
                  <div className="scale-75">{item.icon}</div>
                </div>
              )}

              {/* Compact Content */}
              <div className="flex-1 min-w-0">
                <div
                  className={clx(
                    "text-sm font-medium transition-colors duration-200",
                    {
                      "text-purple-700": isSelected,
                      "text-gray-900": !isSelected,
                    }
                  )}
                >
                  {item.label}
                </div>
              </div>

              {/* Simple Selection Dot */}
              <div
                className={clx(
                  "w-2.5 h-2.5 rounded-full transition-all duration-200",
                  {
                    "bg-purple-500": isSelected,
                    "bg-gray-300": !isSelected,
                  }
                )}
              ></div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CompactFilterGroup
