import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import productShoe1 from '@/assets/product-shoe-1.jpg';
import productShoe2 from '@/assets/product-shoe-2.jpg';
import productShoe3 from '@/assets/product-shoe-3.jpg';

const NewReleases = () => {
  const newProducts = [
    {
      id: 'new-1',
      name: 'Athletic Pro Basketball High-Tops',
      price: 159,
      image: productShoe1,
      category: 'Basketball',
      colors: ['#000000', '#FFFFFF', '#FF6B35'],
      isNew: true,
    },
    {
      id: 'new-2',
      name: 'Women\'s Athletic Running Sneakers',
      price: 129,
      image: productShoe2,
      category: 'Running',
      colors: ['#FFFFFF', '#FFB6C1', '#FF6B35'],
      isNew: true,
    },
    {
      id: 'new-3',
      name: 'Kids Colorful Sports Shoes',
      price: 79,
      image: productShoe3,
      category: 'Kids',
      colors: ['#FF6B35', '#4169E1', '#32CD32', '#FFD700'],
      isNew: true,
    },
    {
      id: 'new-4',
      name: 'Urban Lifestyle Sneakers',
      price: 99,
      image: productShoe1,
      category: 'Lifestyle',
      colors: ['#FFFFFF', '#FF6B35', '#4169E1'],
      isNew: true,
    },
    {
      id: 'new-5',
      name: 'Performance Cross Training',
      price: 149,
      image: productShoe2,
      category: 'Training',
      colors: ['#FF6B35', '#000000', '#FFFFFF'],
      isNew: true,
    },
    {
      id: 'new-6',
      name: 'Elite Tennis Performance',
      price: 139,
      image: productShoe3,
      category: 'Tennis',
      colors: ['#FFFFFF', '#FF6B35', '#000000'],
      isNew: true,
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
              <span className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wider">
                New Releases
              </span>
            </div>
            <h1 className="text-display mb-4">Latest Drops</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be the first to experience our newest innovations. Fresh designs, 
              cutting-edge technology, and premium materials.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="flex flex-wrap gap-4">
              {['All', 'Men\'s', 'Women\'s', 'Kids', 'Basketball', 'Running', 'Training'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    category === 'All'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground">
              <option>Sort by: Release Date</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>

          {/* Release Alert */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-12 text-center">
            <h3 className="text-lg font-semibold mb-2 text-accent">🔥 Exclusive Early Access</h3>
            <p className="text-muted-foreground">
              Get notified about upcoming releases and exclusive drops. Be first in line for limited editions.
            </p>
            <button className="btn-accent mt-4">
              Join VIP List
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-hero bg-primary text-primary-foreground hover:bg-primary/90">
              Load More Releases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewReleases;