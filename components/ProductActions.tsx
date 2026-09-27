"use client";

import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

interface ProductActionsProps {
  product: any;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="border-t border-gray-100 py-8">
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center border border-gray-300">
          <button onClick={decrement} className="px-4 py-3 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">-</button>
          <span className="px-4 py-3 font-bold">{quantity}</span>
          <button onClick={increment} className="px-4 py-3 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">+</button>
        </div>
        <p className="text-sm text-gray-500">{product.available} available</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <AddToCartButton product={product} quantity={quantity} />
        
        <a 
          href={`https://wa.me/2349079472099?text=${encodeURIComponent(`Hello Quantiv, I would like to order ${quantity} × ${product.name} (${product.pieces} pieces) for ₦${(product.price * quantity).toLocaleString()}.`)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:flex-1 bg-white border border-black text-black px-8 py-4 text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
