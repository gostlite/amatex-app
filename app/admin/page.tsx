export default function AdminDashboard() {
  const recentOrders = [
    { id: '#AMX-1042', product: 'Ladies Mixed Bundle', amount: '₦180,000', status: 'PAID' },
    { id: '#AMX-1041', product: "Men's Bundle", amount: '₦120,000', status: 'PENDING' },
    { id: '#AMX-1040', product: 'Mixed Bundle', amount: '₦210,000', status: 'PAID' },
    { id: '#AMX-1039', product: 'Ladies Mixed Bundle', amount: '₦360,000', status: 'SHIPPED' },
  ];

  return (
    <div className="p-4 sm:p-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Today's Sales</h3>
          <p className="text-3xl font-black text-gray-900">₦1,240,000</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Orders</h3>
          <p className="text-3xl font-black text-gray-900">32</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Customers</h3>
          <p className="text-3xl font-black text-gray-900">87</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Inventory</h3>
          <p className="text-3xl font-black text-gray-900">412</p>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
          <a href="#" className="text-sm font-medium text-black border-b border-black">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-widest text-xs">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      order.status === 'PAID' ? 'bg-green-100 text-green-800' :
                      order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
