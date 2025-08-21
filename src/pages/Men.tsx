import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import productShoe1 from '@/assets/product-shoe-1.jpg';
import productShoe2 from '@/assets/product-shoe-2.jpg';

const Men = () => {
  const menProducts = [
    {
      id: 'men-1',
      name: 'Athletic Pro Basketball High-Tops',
      price: 159,
      originalPrice: 199,
      image: productShoe1,
      category: 'Basketball',
      colors: ['#000000', '#FFFFFF', '#FF6B35'],
      isNew: true,
      isSale: true,
    },
    {
      id: 'men-2',
      name: 'Performance Training Shoes',
      price: 139,
      image: productShoe2,
      category: 'Training',
      colors: ['#FF6B35', '#000000', '#FFFFFF'],
    },
    {
      id: 'men-3',
      name: 'Classic Court Tennis Shoes',
      price: 109,
      image: productShoe1,
      category: 'Tennis',
      colors: ['#FFFFFF', '#000000'],
    },
    {
      id: 'men-4',
      name: 'Running Speed Sneakers',
      price: 149,
      originalPrice: 179,
      image: productShoe2,
      category: 'Running',
      colors: ['#FF6B35', '#4169E1', '#000000'],
      isSale: true,
    },
    {
      id: 'men-5',
      name: 'Urban Lifestyle Sneakers',
      price: 99,
      image: productShoe1,
      category: 'Lifestyle',
      colors: ['#FFFFFF', '#FF6B35', '#4169E1'],
      isNew: true,
    },
    {
      id: 'men-6',
      name: 'High-Performance Cross Trainers',
      price: 169,
      image: productShoe2,
      category: 'Training',
      colors: ['#000000', '#FF6B35', '#FFFFFF'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-display mb-4">Men's Collection</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover premium athletic footwear designed for performance and style. 
              From basketball courts to city streets.
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
              {['All', 'Basketball', 'Running', 'Training', 'Tennis', 'Lifestyle'].map((category) => (
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
            {menProducts.map((product) => (
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

export default Men;