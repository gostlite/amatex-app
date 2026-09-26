import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full pt-16 lg:pt-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row min-h-[85vh] gap-8 lg:gap-0">
        
        {/* Text Section */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center py-10 lg:py-0 lg:pr-12 xl:pr-20 z-10 bg-white order-2 lg:order-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-black tracking-tighter uppercase leading-[0.85] mb-8">
            <span className="block">Wholesale</span>
            <span className="block text-gray-900">Fashion.</span>
            <span className="block text-gray-400 mt-2">Built for</span>
            <span className="block text-gray-400">Resellers.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-md mb-10 leading-relaxed">
            Premium fashion bundles for retailers across Nigeria. Maximize your margins with our curated, high-quality collections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-center"
            >
              Shop Wholesale
            </Link>
            <a 
              href="#resellers" 
              className="px-8 py-4 bg-white border border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors text-center"
            >
              Become a Reseller
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
             <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Reseller" className="w-full h-full object-cover" />
                   </div>
                ))}
             </div>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
               Trusted by <span className="text-black">10,000+</span> Resellers
             </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-7/12 relative bg-gray-100 min-h-[50vh] lg:min-h-full order-1 lg:order-2 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
            alt="Wholesale Fashion"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}
