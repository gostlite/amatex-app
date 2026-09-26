import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 uppercase mb-6 inline-block">
              AMATEX
            </Link>
            <p className="text-gray-500 max-w-xs">
              Quality clothing bundles for retailers and resellers across Nigeria. Wholesale fashion made easy.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/shop" className="hover:text-black transition-colors">All Bundles</Link></li>
              <li><Link href="/shop?category=women" className="hover:text-black transition-colors">Women's Fashion</Link></li>
              <li><Link href="/shop?category=men" className="hover:text-black transition-colors">Men's Fashion</Link></li>
              <li><Link href="/shop?category=new" className="hover:text-black transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/#how-it-works" className="hover:text-black transition-colors">How It Works</Link></li>
              <li><Link href="/#resellers" className="hover:text-black transition-colors">Become a Reseller</Link></li>
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Lagos, Nigeria</li>
              <li>
                <a href="https://wa.me/2340000000000" className="hover:text-black transition-colors flex items-center">
                  Order via WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/amatexclothingempire" className="hover:text-black transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://tiktok.com/@amatexclothingempire" className="hover:text-black transition-colors">TikTok</a>
              </li>
              <li>
                 <a href="#" className="hover:text-black transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 text-gray-400 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Amatex Clothing Empire. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
