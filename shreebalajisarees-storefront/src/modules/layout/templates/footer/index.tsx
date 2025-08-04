import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Shree Balaji Sarees
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Categories</span>
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Silk Sarees
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Cotton Sarees
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Designer Sarees
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Banarasi Sarees
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Wedding Sarees
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/store"
                    data-testid="category-link"
                  >
                    Party Wear Sarees
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Sarees</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-ui-fg-base"
                  >
                    All Sarees
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-ui-fg-base"
                  >
                    Silk Sarees
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-ui-fg-base"
                  >
                    Cotton Sarees
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Shree Balaji Sarees. All rights
            reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
