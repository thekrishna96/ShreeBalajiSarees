import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-gradient-to-r from-orange-50 to-pink-50">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-tight text-ui-fg-base font-bold"
          >
            Welcome to Shree Balaji Sarees
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-8 text-ui-fg-subtle font-normal mt-4"
          >
            Discover Beautiful Traditional & Modern Sarees
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Shop Now
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
