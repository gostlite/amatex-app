import Link from 'next/link';

export default function ResellerCTA() {
  return (
    <section id="resellers" className="py-0">
      <div className="flex flex-col md:flex-row min-h-[60vh]">
        {/* Abstract/Fashion Image Placeholder - Takes up half the screen */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center min-h-[40vh] md:min-h-full">
           <span className="text-gray-400 font-bold tracking-widest text-sm uppercase text-center px-4">
             [ LIFESTYLE/FASHION IMAGE ]
           </span>
        </div>
        
        {/* CTA Content - Clean, Stark White */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-16 py-20 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.9]">
            Ready to <br /> Start Reselling?
          </h2>
          
          <p className="text-lg text-gray-500 font-medium mb-12 max-w-md">
            Get access to wholesale fashion bundles designed for modern retailers. High margins, premium quality, nationwide delivery.
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/shop" 
              className="w-full px-8 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-center"
            >
              Shop Wholesale
            </Link>
            <a 
              href="https://wa.me/2340000000000" 
              className="w-full px-8 py-5 bg-white border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
