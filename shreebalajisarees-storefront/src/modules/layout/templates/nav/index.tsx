import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { HttpTypes, StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavLinks from "@modules/layout/components/nav-links"

export default async function Nav({
  customer,
}: {
  customer?: HttpTypes.StoreCustomer | null
}) {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 sm:h-20 mx-auto border-b duration-200 bg-white/95 backdrop-blur-md border-ui-border-base shadow-sm">
        <nav className="content-container flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">
          {/* Left Section - Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} customer={customer} />
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300 uppercase tracking-wide text-center"
              data-testid="nav-store-link"
            >
              <span className="hidden sm:inline">Shree Balaji Sarees</span>
              <span className="sm:hidden">Shree Balaji</span>
            </LocalizedClientLink>
          </div>

          {/* Right Section - Navigation & Cart */}
          <div className="flex items-center gap-x-3 sm:gap-x-6 lg:gap-x-8 h-full flex-1 basis-0 justify-end">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavLinks />
            </div>

            {/* Cart Button */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z"
                    />
                  </svg>
                  <span className="hidden sm:inline text-sm font-semibold">
                    Cart
                  </span>
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-sm">
                    0
                  </span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
