import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import productShoe1 from '@/assets/product-shoe-1.jpg';
import productShoe2 from '@/assets/product-shoe-2.jpg';
import productShoe3 from '@/assets/product-shoe-3.jpg';

const Sale = () => {
  const saleProducts = [
    {
      id: 'sale-1',
      name: 'Athletic Pro Basketball High-Tops',
      price: 159,
      originalPrice: 199,
      image: productShoe1,
      category: 'Basketball',
      colors: ['#000000', '#FFFFFF', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'sale-2',
      name: 'Performance Training Shoes',
      price: 119,
      originalPrice: 169,
      image: productShoe2,
      category: 'Training',
      colors: ['#FF6B35', '#000000', '#FFFFFF'],
      isSale: true,
    },
    {
      id: 'sale-3',
      name: 'Kids Playground Adventures',
      price: 49,
      originalPrice: 79,
      image: productShoe3,
      category: 'Kids',
      colors: ['#32CD32', '#FFD700', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'sale-4',
      name: 'Women\'s Cross Trainers',
      price: 99,
      originalPrice: 149,
      image: productShoe2,
      category: 'Training',
      colors: ['#FFB6C1', '#FFFFFF', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'sale-5',
      name: 'Men\'s Running Speed',
      price: 129,
      originalPrice: 179,
      image: productShoe1,
      category: 'Running',
      colors: ['#FF6B35', '#4169E1', '#000000'],
      isSale: true,
    },
    {
      id: 'sale-6',
      name: 'Youth Basketball Stars',
      price: 79,
      originalPrice: 109,
      image: productShoe3,
      category: 'Basketball',
      colors: ['#000000', '#FFFFFF', '#FF6B35'],
      isSale: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="mb-4">
              <span className="inline-block bg-destructive text-destructive-foreground px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wider animate-pulse">
                🔥 Sale
              </span>
            </div>
            <h1 className="text-display mb-4">Up to 50% Off</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't miss out on amazing deals! Premium athletic footwear at unbeatable prices. 
              Limited time offers on top styles.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sale Banner */}
          <div className="bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground rounded-lg p-6 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-2">⏰ Flash Sale Ends Soon!</h3>
            <p className="text-lg">Save big on premium athletic footwear. Use code <span className="font-mono bg-white/20 px-2 py-1 rounded">SAVE50</span> for extra savings.</p>
            <div className="flex justify-center gap-4 mt-4 text-sm font-mono">
              <div className="bg-white/20 px-3 py-2 rounded">
                <div className="font-bold text-lg">23</div>
                <div>HOURS</div>
              </div>
              <div className="bg-white/20 px-3 py-2 rounded">
                <div className="font-bold text-lg">45</div>
                <div>MINS</div>
              </div>
              <div className="bg-white/20 px-3 py-2 rounded">
                <div className="font-bold text-lg">12</div>
                <div>SECS</div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="flex flex-wrap gap-4">
              {['All', 'Men\'s', 'Women\'s', 'Kids', 'Basketball', 'Running', 'Training'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    category === 'All'
                      ? 'bg-destructive text-destructive-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground">
              <option>Sort by: Discount %</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-hero bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Load More Sale Items
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sale;