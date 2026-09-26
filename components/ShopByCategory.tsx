import Link from 'next/link';

export default function ShopByCategory() {
  const categories = [
    { name: 'Women', slug: 'women', colSpan: 'col-span-12 md:col-span-8' },
    { name: 'Men', slug: 'men', colSpan: 'col-span-12 md:col-span-4' },
    { name: 'Bundles', slug: 'bundles', colSpan: 'col-span-12 md:col-span-4' },
    { name: 'New Arrivals', slug: 'new-arrivals', colSpan: 'col-span-12 md:col-span-8' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
            Categories
          </h2>
          <Link href="/shop" className="text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-y-16">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className={`${category.colSpan} group flex flex-col`}
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-[16/9] mb-4">
                <div className="absolute inset-0 bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold tracking-widest uppercase group-hover:scale-105 transition-transform duration-700 ease-out">
                  [ {category.name} IMAGE ]
                </div>
              </div>
              <div className="flex justify-between items-center px-1">
                <h3 className="text-lg font-black uppercase tracking-widest text-black">
                  {category.name}
                </h3>
                <span className="text-xl font-light text-black transition-transform group-hover:translate-x-2 duration-300">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
