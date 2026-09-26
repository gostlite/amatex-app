import ProductCard from './ProductCard';
import { products } from '../data/products';
import Link from 'next/link';

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-4">
              Featured Wholesale Bundles
            </h2>
            <p className="text-lg text-gray-500">
              Curated collections designed to give you the best margins. Ready to ship nationwide.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="hidden md:inline-block text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Shop All Bundles
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link 
            href="/shop" 
            className="inline-block px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full"
          >
            Shop All Bundles
          </Link>
        </div>
      </div>
    </section>
  );
}
