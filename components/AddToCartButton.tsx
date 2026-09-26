"use client";

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: any;
  quantity: number;
}

export default function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      router.push('/cart');
    }, 500);
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full sm:flex-1 bg-black text-white px-8 py-4 text-center text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
    >
      {isAdded ? 'Added...' : 'Add to Cart'}
    </button>
  );
}
