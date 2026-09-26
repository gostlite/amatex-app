import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Shop() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white pt-20">
      <Navbar />
      
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-6">
            Wholesale Collections
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our curated fashion bundles ready for your next collection. Premium quality pieces, carefully selected for maximum resale margin.
          </p>
        </div>
        
        {/* Simple Filter Bar */}
        <div className="border-t border-gray-100 bg-white sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 space-x-8 hide-scrollbar">
              <a href="#" className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1">All Bundles</a>
              <a href="#" className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Women</a>
              <a href="#" className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Men</a>
              <a href="#" className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Dresses</a>
              <a href="#" className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Tops</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reusing ProductGrid without its own header */}
      <div className="pb-24">
         <ProductGrid />
      </div>
      
      <Footer />
    </main>
  );
}
