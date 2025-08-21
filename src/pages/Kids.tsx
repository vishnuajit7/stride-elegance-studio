import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import productShoe3 from '@/assets/product-shoe-3.jpg';
import productShoe1 from '@/assets/product-shoe-1.jpg';

const Kids = () => {
  const kidsProducts = [
    {
      id: 'kids-1',
      name: 'Kids Colorful Sports Shoes',
      price: 79,
      image: productShoe3,
      category: 'Running',
      colors: ['#FF6B35', '#4169E1', '#32CD32', '#FFD700'],
      isNew: true,
    },
    {
      id: 'kids-2',
      name: 'Junior Basketball High-Tops',
      price: 89,
      originalPrice: 109,
      image: productShoe1,
      category: 'Basketball',
      colors: ['#000000', '#FFFFFF', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'kids-3',
      name: 'Youth Training Sneakers',
      price: 69,
      image: productShoe3,
      category: 'Training',
      colors: ['#FF6B35', '#4169E1', '#FFFFFF'],
    },
    {
      id: 'kids-4',
      name: 'Kids Playground Shoes',
      price: 59,
      originalPrice: 79,
      image: productShoe1,
      category: 'Playground',
      colors: ['#32CD32', '#FFD700', '#FF6B35'],
      isSale: true,
    },
    {
      id: 'kids-5',
      name: 'Junior Tennis Court Shoes',
      price: 74,
      image: productShoe3,
      category: 'Tennis',
      colors: ['#FFFFFF', '#4169E1', '#FF6B35'],
      isNew: true,
    },
    {
      id: 'kids-6',
      name: 'Youth Lifestyle Sneakers',
      price: 64,
      image: productShoe1,
      category: 'Lifestyle',
      colors: ['#FFD700', '#FF6B35', '#4169E1'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-display mb-4">Kids Collection</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fun, colorful, and durable athletic footwear designed for active kids. 
              Let them play, run, and explore in style.
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
              {['All', 'Running', 'Basketball', 'Training', 'Tennis', 'Playground', 'Lifestyle'].map((category) => (
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
              <option>Size: Toddler</option>
              <option>Size: Little Kid</option>
              <option>Size: Big Kid</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kidsProducts.map((product) => (
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

export default Kids;