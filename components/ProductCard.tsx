import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    pieces: number;
    image: string;
    available: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const pricePerPiece = Math.round(product.price / product.pieces);

  return (
    <div className="group flex flex-col bg-white">
      <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Availability Badge */}
        {product.available < 15 && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-sm">
            Few left ({product.available})
          </div>
        )}
        
        {/* Hover overlay CTA */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block">
           <div className="w-full bg-black text-white text-center py-3 text-xs font-bold uppercase tracking-widest">
             Quick View
           </div>
        </div>
      </Link>
      
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">{product.name}</h3>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 px-2 py-1">{product.pieces} pcs</span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-lg md:text-xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
            <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">₦{pricePerPiece.toLocaleString()} / piece</p>
          </div>
          <Link 
            href={`/product/${product.slug}`} 
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all md:hidden"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
