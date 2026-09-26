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
    <div className="group flex flex-col bg-white hover:bg-gray-50 transition-colors duration-300">
      <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold tracking-widest text-xs uppercase bg-gray-200 group-hover:scale-105 transition-transform duration-700">
           [ {product.name} ]
        </div>
        
        {/* Availability Badge */}
        {product.available < 15 && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
            Few left ({product.available})
          </div>
        )}
      </Link>
      
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">{product.name}</h3>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-1">{product.pieces} pcs</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">₦{pricePerPiece.toLocaleString()} / piece</p>
          </div>
          <Link 
            href={`/product/${product.slug}`} 
            className="text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all"
          >
            View Bundle
          </Link>
        </div>
      </div>
    </div>
  );
}
