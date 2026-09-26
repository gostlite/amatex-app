import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full pt-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row min-h-[85vh]">
        
        {/* Text Section */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center py-12 lg:py-0 lg:pr-12 xl:pr-20 z-10 bg-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-black tracking-tighter uppercase leading-[0.9] mb-8">
            <span className="block">Wholesale</span>
            <span className="block">Fashion.</span>
            <span className="block text-gray-400">Built for</span>
            <span className="block text-gray-400">Resellers.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-900 font-medium max-w-md mb-12">
            Quality fashion bundles for retailers across Nigeria. Maximize your margins with our curated collections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-center"
            >
              Shop Wholesale
            </Link>
            <a 
              href="#resellers" 
              className="px-8 py-4 bg-white border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors text-center"
            >
              Become a Reseller
            </a>
          </div>
        </div>

        {/* Image Section - No overlays, pure editorial */}
        <div className="w-full lg:w-7/12 relative bg-gray-100 min-h-[50vh] lg:min-h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-300 font-bold tracking-widest text-xl uppercase">[ HIGH QUALITY FASHION EDITORIAL IMAGE ]</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
