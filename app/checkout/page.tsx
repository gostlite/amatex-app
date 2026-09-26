import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Checkout() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-black selection:text-white pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-10">
          <Link href="/cart" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-4 inline-block">&larr; Back to Cart</Link>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900">
            Checkout
          </h1>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className="bg-white p-6 sm:p-8 border border-gray-200">
              <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-b border-gray-100 pb-4">
                Delivery Details
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">First name</label>
                    <input type="text" id="first-name" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Last name</label>
                    <input type="text" id="last-name" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Phone number (WhatsApp active)</label>
                    <input type="tel" id="phone" placeholder="+234" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>

                  <div className="sm:col-span-2 mt-4 pt-4 border-t border-gray-100">
                    <label htmlFor="address" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Delivery address</label>
                    <input type="text" id="address" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">State</label>
                    <select id="state" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors">
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Rivers</option>
                      <option>Oyo</option>
                      <option>Kano</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">City</label>
                    <input type="text" id="city" className="block w-full border-gray-300 rounded-none shadow-sm focus:ring-black focus:border-black sm:text-sm px-4 py-3 border bg-gray-50 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-b border-gray-100 pb-4">
                    Payment Method
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-black bg-gray-50 cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="h-4 w-4 text-black focus:ring-black border-gray-300" />
                      <span className="ml-3 block text-sm font-bold uppercase tracking-widest text-gray-900">
                        Paystack (Card / Bank Transfer)
                      </span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                      <input type="radio" name="payment" className="h-4 w-4 text-black focus:ring-black border-gray-300" />
                      <span className="ml-3 block text-sm font-bold uppercase tracking-widest text-gray-900">
                        Pay via WhatsApp
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <button type="button" className="w-full bg-black text-white px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    Pay ₦1,395,000 & Place Order
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    Payments are secure and encrypted.
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary (Sidebar) */}
          <div className="lg:col-span-5">
             <div className="bg-gray-100 p-6 sm:p-8 border border-gray-200 sticky top-32">
                <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
                
                <ul className="divide-y divide-gray-200 mb-6">
                   <li className="py-4 flex">
                      <div className="w-16 h-20 bg-gray-200 border border-gray-300 flex-shrink-0"></div>
                      <div className="ml-4 flex-1 flex flex-col justify-center">
                         <h3 className="text-sm font-bold uppercase tracking-tight text-gray-900">Ladies Mixed Bundle</h3>
                         <p className="text-xs text-gray-500 mt-1">Qty: 5</p>
                         <p className="text-sm font-bold text-gray-900 mt-1">₦900,000</p>
                      </div>
                   </li>
                   <li className="py-4 flex">
                      <div className="w-16 h-20 bg-gray-200 border border-gray-300 flex-shrink-0"></div>
                      <div className="ml-4 flex-1 flex flex-col justify-center">
                         <h3 className="text-sm font-bold uppercase tracking-tight text-gray-900">Men's Bundle</h3>
                         <p className="text-xs text-gray-500 mt-1">Qty: 2</p>
                         <p className="text-sm font-bold text-gray-900 mt-1">₦480,000</p>
                      </div>
                   </li>
                </ul>

                <dl className="space-y-3 text-sm text-gray-600 mb-2 border-t border-gray-200 pt-6">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-bold text-gray-900">₦1,380,000</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Delivery</dt>
                    <dd className="font-bold text-gray-900">₦15,000</dd>
                  </div>
                </dl>
                
                <div className="flex justify-between border-t border-gray-300 mt-4 pt-4 text-lg">
                  <dt className="font-black uppercase tracking-tight text-gray-900">Total</dt>
                  <dd className="font-black text-gray-900">₦1,395,000</dd>
                </div>
             </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
