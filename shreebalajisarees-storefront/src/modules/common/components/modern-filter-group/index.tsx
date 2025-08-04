"use client"

import { RadioGroup } from "@medusajs/ui"
import { clx } from "@medusajs/ui"

type ModernFilterGroupProps = {
  title: string
  items: {
    value: string
    label: string
    icon?: React.ReactNode
    description?: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const ModernFilterGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: ModernFilterGroupProps) => {
  return (
    <div className="space-y-6">
      {/* Modern Title */}
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Modern Radio Group */}
      <RadioGroup
        data-testid={dataTestId}
        onValueChange={handleChange}
        className="space-y-3"
      >
        {items?.map((item) => {
          const isSelected = item.value === value

          return (
            <div key={item.value} className="relative">
              <RadioGroup.Item
                checked={isSelected}
                className="sr-only peer"
                id={item.value}
                value={item.value}
              />
              <label
                htmlFor={item.value}
                className={clx(
                  "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group",
                  {
                    "border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-md":
                      isSelected,
                    "border-gray-200 bg-white hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-25 hover:to-pink-25 hover:shadow-sm":
                      !isSelected,
                  }
                )}
                data-testid="radio-label"
                data-active={isSelected}
              >
                {/* Icon */}
                {item.icon && (
                  <div
                    className={clx(
                      "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                      {
                        "bg-gradient-to-r from-purple-500 to-pink-500 text-white":
                          isSelected,
                        "bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 group-hover:text-purple-600":
                          !isSelected,
                      }
                    )}
                  >
                    {item.icon}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    className={clx(
                      "font-medium transition-colors duration-200",
                      {
                        "text-purple-700": isSelected,
                        "text-gray-900 group-hover:text-purple-600":
                          !isSelected,
                      }
                    )}
                  >
                    {item.label}
                  </div>
                  {item.description && (
                    <div
                      className={clx(
                        "text-sm mt-1 transition-colors duration-200",
                        {
                          "text-purple-600": isSelected,
                          "text-gray-500 group-hover:text-purple-500":
                            !isSelected,
                        }
                      )}
                    >
                      {item.description}
                    </div>
                  )}
                </div>

                {/* Selection Indicator */}
                <div
                  className={clx(
                    "w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
                    {
                      "border-purple-500 bg-purple-500": isSelected,
                      "border-gray-300 group-hover:border-purple-400":
                        !isSelected,
                    }
                  )}
                >
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </label>
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default ModernFilterGroup
