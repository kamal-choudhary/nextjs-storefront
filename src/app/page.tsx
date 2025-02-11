import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Hero from "@/components/Hero"
import OurProducts from "@/components/OurProducts"

export default function HomePage() {
  return (
    <main>
      <MaxWidthWrapper>
        <Hero />
        <OurProducts />
      </MaxWidthWrapper>
    </main>
  )
}
