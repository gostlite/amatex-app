"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const delivery = cartTotal > 0 ? 15000 : 0;

  if (!mounted) return <div className="min-h-screen bg-gray-50 pt-20" />;

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-black selection:text-white pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-12">
          Your Cart
        </h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any wholesale bundles yet.</p>
            <Link href="/shop" className="inline-block bg-black text-white px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            
            {/* Cart Items */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="border-t border-b border-gray-200 divide-y divide-gray-200 bg-white">
                {cart.map((item) => (
                  <div key={item.id} className="flex py-6 sm:py-8 px-4 sm:px-6">
                    <div className="flex-shrink-0 w-24 h-32 sm:w-32 sm:h-40 bg-gray-100 flex items-center justify-center border border-gray-100 relative overflow-hidden">
                       <img src={item.image} className="absolute inset-0 w-full h-full object-cover" alt={item.name} />
                    </div>
                    
                    <div className="ml-4 sm:ml-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-base font-bold uppercase tracking-tight text-gray-900 mb-1">
                              <Link href={`/product/${item.slug}`} className="hover:text-gray-500 transition-colors">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 inline-block px-2 py-1 mb-2">
                              {item.pieces} Pieces / Bundle
                            </p>
                          </div>
                          <p className="text-lg font-bold text-gray-900">₦{item.price.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} type="button" className="px-3 py-1.5 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">-</button>
                          <span className="px-3 py-1.5 font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} type="button" className="px-3 py-1.5 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">+</button>
                        </div>
                        
                        <button onClick={() => removeFromCart(item.id)} type="button" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors border-b border-transparent hover:border-red-600 pb-0.5">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                 <Link href="/shop" className="text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                    Continue Shopping
                 </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0">
              <div className="bg-white border border-gray-200 p-6 sm:p-8 sticky top-32">
                <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6">Order Summary</h2>
                
                <dl className="space-y-4 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-bold text-gray-900">₦{cartTotal.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-4">
                    <dt>Estimated Delivery</dt>
                    <dd className="font-bold text-gray-900">₦{delivery.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4 text-lg">
                    <dt className="font-black uppercase tracking-tight text-gray-900">Total</dt>
                    <dd className="font-black text-gray-900">₦{(cartTotal + delivery).toLocaleString()}</dd>
                  </div>
                </dl>

                <Link href="/checkout" className="block w-full bg-black text-white px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors mb-4">
                  Proceed to Checkout
                </Link>
                
                <a 
                  href={`https://wa.me/2340000000000?text=${encodeURIComponent(`Hello Quantiv, I have a cart of ₦${(cartTotal + delivery).toLocaleString()} that I would like to order.`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-transparent border border-black text-black px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  Order via WhatsApp
                </a>
                
                <p className="mt-6 text-center text-xs text-gray-500">
                  Secure checkout. Nationwide delivery via GIG Logistics.
                </p>
              </div>
            </div>
            
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}
