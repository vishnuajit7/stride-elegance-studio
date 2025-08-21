import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import productShoe2 from '@/assets/product-shoe-2.jpg';
import productShoe3 from '@/assets/product-shoe-3.jpg';

const Women = () => {
  const womenProducts = [
    {
      id: 'women-1',
      name: 'Women\'s Athletic Running Sneakers',
      price: 129,
      image: productShoe2,
      category: 'Running',
      colors: ['#FFFFFF', '#FFB6C1', '#FF6B35'],
      isNew: true,
    },
    {
      id: 'women-2',
      name: 'Women\'s Training Cross Trainers',
      price: 119,
      originalPrice: 149,
      image: productShoe3,
      category: 'Training',
      colors: ['#FFB6C1', '#FFFFFF', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'women-3',
      name: 'Women\'s Lifestyle Sneakers',
      price: 99,
      image: productShoe2,
      category: 'Lifestyle',
      colors: ['#FFFFFF', '#FFB6C1', '#4169E1'],
      isNew: true,
    },
    {
      id: 'women-4',
      name: 'Women\'s Tennis Performance Shoes',
      price: 139,
      image: productShoe3,
      category: 'Tennis',
      colors: ['#FFFFFF', '#FF6B35', '#000000'],
    },
    {
      id: 'women-5',
      name: 'Women\'s High-Top Basketball Shoes',
      price: 149,
      originalPrice: 179,
      image: productShoe2,
      category: 'Basketball',
      colors: ['#FFB6C1', '#000000', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'women-6',
      name: 'Women\'s Casual Walking Shoes',
      price: 89,
      image: productShoe3,
      category: 'Walking',
      colors: ['#FFFFFF', '#FFB6C1', '#32CD32'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-display mb-4">Women's Collection</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Empowering athletic footwear designed for the modern woman. 
              Style meets performance in every step.
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
              {['All', 'Running', 'Training', 'Tennis', 'Basketball', 'Lifestyle', 'Walking'].map((category) => (
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
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-hero bg-primary text-primary-foreground hover:bg-primary/90">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Women;