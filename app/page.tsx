import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ShopByCategory from '@/components/ShopByCategory';
import ProductGrid from '@/components/ProductGrid';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import ResellerCTA from '@/components/ResellerCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ShopByCategory />
      <ProductGrid />
      <HowItWorks />
      <WhyUs />
      <ResellerCTA />
      <Footer />
    </main>
  );
}
