"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

function CartBadge() {
  const { cartItemCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || cartItemCount === 0) return null;

  return (
    <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
      {cartItemCount}
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
              Amatex
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center justify-center flex-1">
            <Link href="/shop" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest">
              Shop
            </Link>
            <Link href="/shop?category=bundles" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest">
              Collections
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest">
              How It Works
            </Link>
            <Link href="/#resellers" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest">
              Resellers
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 md:space-x-6 justify-end flex-none">
             <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest">
                WhatsApp
            </a>
            <Link href="/cart" className="text-gray-900 hover:text-gray-500 transition-colors flex items-center group relative p-2 -mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <CartBadge />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          <Link href="/shop" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50 uppercase tracking-widest">Shop</Link>
          <Link href="/shop?category=bundles" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50 uppercase tracking-widest">Collections</Link>
          <Link href="/#how-it-works" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50 uppercase tracking-widest">How It Works</Link>
          <Link href="/#resellers" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50 uppercase tracking-widest">Become a Reseller</Link>
          <a href="https://wa.me/2340000000000" className="block px-3 py-4 text-base font-medium text-gray-900 uppercase tracking-widest">Contact via WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
