import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const pricePerPiece = Math.round(product.price / product.pieces);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 mb-10 lg:mb-0">
            {/* Thumbnails */}
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto hide-scrollbar lg:w-24 flex-shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-20 lg:w-full aspect-[3/4] bg-gray-100 flex-shrink-0 border-2 cursor-pointer transition-colors ${i === 1 ? 'border-black' : 'border-transparent hover:border-gray-300'}`}>
                   {/* Thumbnail placeholder */}
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center relative">
               <div className="text-gray-400 font-bold text-xl tracking-widest uppercase">[ {product.name} ]</div>
               
               {product.available < 15 && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-sm">
                    Few left ({product.available})
                  </div>
                )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                <li><Link href="/shop" className="hover:text-black transition-colors">Shop</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="text-black truncate">{product.name}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-4">{product.name}</h1>
            
            <div className="mb-8 flex items-end space-x-4">
              <p className="text-3xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
              <div className="pb-1">
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 ml-4">{product.pieces} pcs</span>
              </div>
            </div>

            <div className="mb-10 text-gray-600">
              <p className="mb-4">{product.pieces} Pieces included in this wholesale bundle. Ready for resale.</p>
              <p className="font-medium text-black">₦{pricePerPiece.toLocaleString()} per piece average cost.</p>
            </div>
            
            <div className="border-t border-gray-100 py-8">
               <div className="flex items-center space-x-6 mb-6">
                 <div className="flex items-center border border-gray-300">
                   <button className="px-4 py-3 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">-</button>
                   <span className="px-4 py-3 font-bold">1</span>
                   <button className="px-4 py-3 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">+</button>
                 </div>
                 <p className="text-sm text-gray-500">{product.available} available</p>
               </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cart" className="w-full sm:flex-1 bg-black text-white px-8 py-4 text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Add to Cart
                </Link>
                <a href="https://wa.me/2340000000000" className="w-full sm:flex-1 bg-white border border-black text-black px-8 py-4 text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center">
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="border-t border-gray-100 divide-y divide-gray-100 mt-4">
              <div className="py-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 flex justify-between items-center cursor-pointer">
                  What's Included
                  <span className="text-gray-400">+</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                  <li>Assorted sizes (S, M, L, XL)</li>
                  <li>Mixed colors and patterns</li>
                  <li>Original tags intact</li>
                </ul>
              </div>
              
              <div className="py-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 flex justify-between items-center cursor-pointer">
                  Delivery Information
                  <span className="text-gray-400">+</span>
                </h3>
                <div className="text-gray-600 space-y-3">
                  <p><strong>Lagos:</strong> 1-2 business days (₦3,000)</p>
                  <p><strong>Other States:</strong> 3-5 business days (via GIG Logistics / Waybill)</p>
                  <p>Store pickup available in Lagos.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Related Products Placeholder */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-12">More Wholesale Bundles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Just showing placeholders */}
               <div className="aspect-[3/4] bg-gray-200"></div>
               <div className="aspect-[3/4] bg-gray-200"></div>
               <div className="aspect-[3/4] bg-gray-200"></div>
            </div>
         </div>
      </div>
      
      <Footer />
    </main>
  );
}
