export default function WhyAmatex() {
  const points = [
    { title: "Wholesale Pricing", description: "Best margins in the market for your business." },
    { title: "Quality Fashion", description: "Curated selection of high-quality fashion items." },
    { title: "Nationwide Delivery", description: "Fast and reliable shipping across Nigeria." },
    { title: "Reseller Support", description: "Dedicated support team to help you grow." }
  ];

  return (
    <section id="why-amatex" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
            Why Resellers Choose Amatex
          </h2>
          <p className="text-lg text-gray-400">
            We empower over 10,000 resellers with the right products at the right prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {points.map((point, idx) => (
            <div key={idx} className="border-t border-gray-800 pt-6">
               <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
