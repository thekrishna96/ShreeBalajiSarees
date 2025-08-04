"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

// Professional Icons Components
const HomeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const ShopIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
)

const CollectionsIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
)

const AccountIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const CartIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
    />
  </svg>
)

const GlobeIcon = () => (
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
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const SideMenuItems = {
  Home: { href: "/", icon: HomeIcon },
  "Shop Sarees": { href: "/store", icon: ShopIcon },
  Collections: { href: "/collections", icon: CollectionsIcon },
  Account: { href: "/account", icon: AccountIcon },
  Cart: { href: "/cart", icon: CartIcon },
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-all ease-out duration-200 focus:outline-none group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-1.5"></span>
                    <span className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:opacity-0"></span>
                    <span className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-1.5"></span>
                  </div>
                  <span className="hidden small:block">Menu</span>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-96 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 justify-between p-8"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Navigation
                      </h2>
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <XMark className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-4 items-start justify-start">
                      {Object.entries(SideMenuItems).map(
                        ([name, { href, icon: IconComponent }]) => {
                          return (
                            <li key={name} className="w-full">
                              <LocalizedClientLink
                                href={href}
                                className="flex items-center gap-4 w-full p-4 rounded-xl text-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 group"
                                onClick={close}
                                data-testid={`${name
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}-link`}
                              >
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                  <IconComponent />
                                </span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                  {name}
                                </span>
                              </LocalizedClientLink>
                            </li>
                          )
                        }
                      )}
                    </ul>
                    <div className="flex flex-col gap-y-6 mt-8 pt-6 border-t border-gray-200">
                      <div
                        className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        <div className="flex items-center gap-3">
                          <GlobeIcon />
                          {regions && (
                            <CountrySelect
                              toggleState={toggleState}
                              regions={regions}
                            />
                          )}
                        </div>
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-300 text-purple-600",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <div className="text-center">
                        <Text className="text-sm text-gray-500 font-medium">
                          © {new Date().getFullYear()} Shree Balaji Sarees
                        </Text>
                        <Text className="text-xs text-gray-400 mt-1">
                          Crafted with ❤️ for tradition
                        </Text>
                      </div>
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
