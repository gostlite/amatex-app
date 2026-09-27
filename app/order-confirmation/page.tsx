import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OrderConfirmation() {
  // Generate random order number
  const orderNumber = `QTV-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-black selection:text-white pt-20">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">
          Order Confirmed
        </h1>
        
        <p className="text-xl text-gray-600 mb-2">
          Thank you for your order.
        </p>
        
        <p className="text-gray-500 mb-12">
          Order <span className="font-bold text-black">#{orderNumber}</span>
          <br />
          We'll contact you shortly with delivery updates.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop" className="bg-black text-white px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
          <a href={`https://wa.me/2340000000000?text=${encodeURIComponent(`Hello Quantiv, I just placed order #${orderNumber} and wanted to confirm.`)}`} className="bg-white border border-black text-black px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
