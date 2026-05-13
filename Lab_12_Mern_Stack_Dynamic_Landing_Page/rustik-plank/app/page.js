import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CollectionsSection from './components/CollectionsSection'
import ProductsSection from './components/ProductsSection'
import HotDealsSection from './components/HotDealsSection'
import BuyOnlineBanner from './components/BuyOnlineBanner'
import LatestUpdates from './components/LatestUpdates'
import PartnersSection from './components/PartnersSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <ProductsSection />
      <HotDealsSection />
      <BuyOnlineBanner />
      <LatestUpdates />
      <PartnersSection />
      <Footer />
    </main>
  )
}
