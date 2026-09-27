export default function TrustBar() {
  const items = [
    "Trusted by Resellers",
    "Nationwide Delivery",
    "Wholesale Pricing",
    "Secure Ordering"
  ];

  return (
    <div className="border-b border-t border-gray-100 bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 text-center sm:text-left">
          {items.map((item, idx) => (
            <div key={idx} className="w-[45%] sm:w-auto">
               <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black">
                 {item}
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
