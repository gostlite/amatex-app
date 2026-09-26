import Link from 'next/link';

export default function ShopByCategory() {
  const categories = [
    { 
      name: 'Women', 
      slug: 'women', 
      colSpan: 'col-span-12 md:col-span-8',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      name: 'Men', 
      slug: 'men', 
      colSpan: 'col-span-12 md:col-span-4',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop'
    },
    { 
      name: 'Bundles', 
      slug: 'bundles', 
      colSpan: 'col-span-12 md:col-span-4',
      image: 'https://images.unsplash.com/photo-1489987707023-afc827181156?q=80&w=800&auto=format&fit=crop'
    },
    { 
      name: 'New Arrivals', 
      slug: 'new-arrivals', 
      colSpan: 'col-span-12 md:col-span-8',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-end border-b border-gray-100 pb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
            Shop by Category
          </h2>
          <Link href="/shop" className="text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors hidden sm:inline-block">
            View All Collections
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className={`${category.colSpan} group relative flex flex-col overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-auto md:min-h-[400px]`}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                    {category.name}
                  </h3>
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="text-xl font-light text-black">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/shop" className="inline-block text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
