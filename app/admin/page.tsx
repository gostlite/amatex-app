import Link from 'next/link';

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-black selection:text-white">
      <header className="bg-black text-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tight uppercase">AMATEX ADMIN</h1>
          <div className="flex space-x-6 text-sm font-bold tracking-widest uppercase">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Storefront</Link>
            <span className="border-l border-gray-700 pl-6">Admin User</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Dashboard</h2>
            <p className="text-gray-500 mt-2">Overview of your wholesale operations.</p>
          </div>
          <div className="hidden sm:flex space-x-2">
             <button className="px-4 py-2 border border-gray-300 bg-white text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-50">Export Report</button>
             <button className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800">Add Product</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Today's Sales</h3>
            <p className="text-4xl font-black text-gray-900">₦1,240,000</p>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-bold bg-green-50 px-2 py-1 flex items-center">
                ↑ 12%
              </span>
              <span className="text-gray-500 ml-2">from yesterday</span>
            </div>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Orders</h3>
            <p className="text-4xl font-black text-gray-900">32</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="font-bold text-black">8</span> <span className="ml-1">pending fulfillment</span>
            </div>
          </div>
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Customers</h3>
            <p className="text-4xl font-black text-gray-900">87</p>
            <div className="mt-4 flex items-center text-sm">
               <span className="text-green-600 font-bold bg-green-50 px-2 py-1 flex items-center">
                +14
              </span>
              <span className="text-gray-500 ml-2">new this week</span>
            </div>
          </div>
        </div>

        {/* Recent Orders & Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">Recent Orders</h3>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black">View all</a>
            </div>
            <ul className="divide-y divide-gray-100">
              <li className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-1">
                      <p className="text-sm font-bold text-gray-900">#AMX-1042</p>
                      <span className="mx-2 text-gray-300">•</span>
                      <p className="text-sm text-gray-600">John Adeleke</p>
                    </div>
                    <p className="text-xs text-gray-500">3 × Men's Bundle</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 mb-1">₦240,000</p>
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800">
                      PAID
                    </span>
                  </div>
                </div>
              </li>
              <li className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-1">
                      <p className="text-sm font-bold text-gray-900">#AMX-1041</p>
                      <span className="mx-2 text-gray-300">•</span>
                      <p className="text-sm text-gray-600">Sarah O.</p>
                    </div>
                    <p className="text-xs text-gray-500">2 × Ladies Bundle</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 mb-1">₦360,000</p>
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-yellow-100 text-yellow-800 border border-yellow-200">
                      PENDING
                    </span>
                  </div>
                </div>
              </li>
              <li className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-1">
                      <p className="text-sm font-bold text-gray-900">#AMX-1040</p>
                      <span className="mx-2 text-gray-300">•</span>
                      <p className="text-sm text-gray-600">Chidi E.</p>
                    </div>
                    <p className="text-xs text-gray-500">1 × Mixed Bundle</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 mb-1">₦210,000</p>
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800">
                      PAID
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Inventory */}
          <div className="bg-white border border-gray-200">
             <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">Inventory Status</h3>
               <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black">Manage</a>
            </div>
             <ul className="divide-y divide-gray-100">
              <li className="px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-16 bg-gray-200 border border-gray-300 mr-4 flex-shrink-0"></div>
                  <div>
                     <span className="block text-sm font-bold text-gray-900 mb-1">Men's Bundle</span>
                     <span className="block text-xs text-gray-500">₦240,000</span>
                  </div>
                </div>
                <div className="text-right">
                   <span className="block text-lg font-black text-gray-900">14</span>
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Available</span>
                </div>
              </li>
              <li className="px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-16 bg-gray-200 border border-gray-300 mr-4 flex-shrink-0"></div>
                  <div>
                     <span className="block text-sm font-bold text-gray-900 mb-1">Ladies Mixed Bundle</span>
                     <span className="block text-xs text-gray-500">₦180,000</span>
                  </div>
                </div>
                <div className="text-right">
                   <span className="block text-lg font-black text-red-600">8</span>
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400">Low Stock</span>
                </div>
              </li>
               <li className="px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-16 bg-gray-200 border border-gray-300 mr-4 flex-shrink-0"></div>
                  <div>
                     <span className="block text-sm font-bold text-gray-900 mb-1">Mixed Bundle</span>
                     <span className="block text-xs text-gray-500">₦210,000</span>
                  </div>
                </div>
                <div className="text-right">
                   <span className="block text-lg font-black text-gray-900">21</span>
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
