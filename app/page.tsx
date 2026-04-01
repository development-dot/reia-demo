import { Navigation } from "@/components/reia/navigation"
import { HeroSection } from "@/components/reia/hero-section"
import { StatsSection } from "@/components/reia/stats-section"
import { DiagnosisSection } from "@/components/reia/diagnosis-section"
import { InvestmentTypesSection } from "@/components/reia/investment-types-section"
import { MediaSection } from "@/components/reia/media-section"
import { FlowSection } from "@/components/reia/flow-section"
import { CTASection } from "@/components/reia/cta-section"
import { Footer } from "@/components/reia/footer"

export default function REIAPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <DiagnosisSection />
      <InvestmentTypesSection />
      <MediaSection />
      <FlowSection />
      <CTASection />
      <Footer />
    </main>
  )
}
