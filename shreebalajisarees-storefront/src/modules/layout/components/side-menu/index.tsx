"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useEffect, useState } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({
  regions,
  customer,
}: {
  regions: HttpTypes.StoreRegion[] | null
  customer?: HttpTypes.StoreCustomer | null
}) => {
  const toggleState = useToggleState()

  // Get display name for user
  const getDisplayName = () => {
    if (!customer) return "Guest User"

    if (customer.first_name && customer.last_name) {
      return `${customer.first_name} ${customer.last_name}`
    } else if (customer.first_name) {
      return customer.first_name
    } else if (customer.email) {
      return customer.email.split("@")[0]
    }

    return "User"
  }

  const getWelcomeMessage = () => {
    return customer ? "Welcome back," : "Welcome,"
  }

  const getAvatarContent = () => {
    if (customer) {
      // If user is logged in, show first letter of their name
      const name = customer.first_name || customer.email?.charAt(0) || "U"
      return name.charAt(0).toUpperCase()
    }
    // If guest, show wave emoji
    return "👋"
  }

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all duration-300 hover:text-ui-fg-base hover:bg-gray-100/50 rounded-lg p-2 group"
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={clx(
                        "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                        open ? "rotate-45 translate-y-1.5" : "group-hover:w-7"
                      )}
                    ></span>
                    <span
                      className={clx(
                        "w-6 h-0.5 bg-current transition-all duration-300",
                        open ? "opacity-0" : "group-hover:w-5"
                      )}
                    ></span>
                    <span
                      className={clx(
                        "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                        open ? "-rotate-45 -translate-y-1.5" : "group-hover:w-7"
                      )}
                    ></span>
                  </div>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 sm:min-w-min h-screen z-30 inset-x-0 text-sm text-ui-fg-on-color">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-[rgba(255,255,255,0.95)] rounded-2xl backdrop-blur-2xl shadow-2xl border border-gray-300/30 m-2"
                  >
                    {/* Header with close button */}
                    <div className="flex justify-between items-center p-6 pb-0">
                      <div className="text-lg font-semibold text-gray-800">
                        Menu
                      </div>
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <XMark className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Welcome Section */}
                    <div className="px-6 py-4">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">
                              {getAvatarContent()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 font-semibold">
                              {getWelcomeMessage()}
                            </p>
                            <p className="text-lg font-bold text-gray-900">
                              {getDisplayName()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 px-6 py-2">
                      <nav className="space-y-1">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <LocalizedClientLink
                              key={name}
                              href={href}
                              className="block px-4 py-3 text-2xl font-bold text-gray-900 hover:text-purple-600 hover:bg-white/80 rounded-lg transition-all duration-200 hover:translate-x-1 shadow-sm hover:shadow-md"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          )
                        })}
                      </nav>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0 space-y-4 border-t border-gray-300">
                      <div
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/60 transition-colors duration-200 cursor-pointer"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-200 text-gray-700",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-xs text-gray-600 text-center leading-relaxed font-medium">
                        © {new Date().getFullYear()} Shree Balaji Sarees. All
                        rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
