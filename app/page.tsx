import { Header } from "@/components/header"
import { PropertySearchHero } from "@/components/property-search-hero"
import PopularLocations from "@/components/popular-locations"
import { WhyLivingHub } from "@/components/why-living-hub"
import { OurServices } from "@/components/our-services"
import { StudentAccommodationJourney } from "@/components/student-accommodation-journey"
import { SignatureSupportPackage } from "@/components/signature-support-package"
import { ReadyToFindCTA } from "@/components/ready-to-find-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <PropertySearchHero />
      <PopularLocations />
      <WhyLivingHub />
      <OurServices />
      <StudentAccommodationJourney />
      <SignatureSupportPackage />
      <ReadyToFindCTA />
   
      <Footer />
    </div>
  )
}
