export const dynamic = "force-dynamic";

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureStrip from '@/components/FeatureStrip'
import Benefits from '@/components/Benefits'
import ProductFeatures from '@/components/ProductFeatures'
import Technology from '@/components/Technology'
import Wholesale from '@/components/Wholesale'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureStrip />
      <Benefits />
      <ProductFeatures />
      <Technology />
      <Wholesale />
      <FooterCTA />
    </main>
  )
}
