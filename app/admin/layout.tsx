import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-black text-white flex-shrink-0">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-xl font-black uppercase tracking-tighter">
            Amatex Admin
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-3 bg-gray-900 rounded-md text-sm font-medium">Dashboard</Link>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md text-sm font-medium transition-colors">Orders</a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md text-sm font-medium transition-colors">Products</a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md text-sm font-medium transition-colors">Customers</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center hidden md:flex">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-500">Admin User</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
