"use client"

import { memo, useMemo } from "react"
import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { clx } from "@medusajs/ui"

const NavLinks = memo(() => {
  const pathname = usePathname()

  const navItems = useMemo(
    () => [
      { href: "/store", label: "Shop", testId: "nav-store-link" },
      { href: "/account", label: "Account", testId: "nav-account-link" },
    ],
    []
  )

  const cleanPathname = useMemo(() => {
    return pathname.replace(/^\/[a-z]{2}/, "") || "/"
  }, [pathname])

  const isActive = useMemo(
    () => (href: string) => {
      // Don't activate anything on home page
      if (cleanPathname === "/" || cleanPathname === "") {
        return false
      }

      if (href === "/store") {
        // Only active on exact store pages, collections, and products
        return (
          cleanPathname === "/store" ||
          cleanPathname.startsWith("/store/") ||
          cleanPathname.startsWith("/collections/") ||
          cleanPathname.startsWith("/products/")
        )
      }

      if (href === "/account") {
        return (
          cleanPathname === "/account" || cleanPathname.startsWith("/account/")
        )
      }

      return false
    },
    [cleanPathname]
  )

  return (
    <div className="hidden small:flex items-center gap-x-8 h-full">
      {navItems.map((item) => {
        const active = isActive(item.href)

        return (
          <LocalizedClientLink
            key={item.href}
            className={clx(
              "relative text-base font-medium transition-colors duration-150 group",
              active ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
            )}
            href={item.href}
            data-testid={item.testId}
          >
            {item.label}
            <span
              className={clx(
                "absolute -bottom-1 left-0 h-0.5 bg-purple-600 transition-all duration-200",
                active ? "w-full" : "w-0 group-hover:w-full"
              )}
            ></span>
          </LocalizedClientLink>
        )
      })}
    </div>
  )
})

NavLinks.displayName = "NavLinks"

export default NavLinks
