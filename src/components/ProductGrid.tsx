import ProductCard from './ProductCard';
import productShoe1 from '@/assets/product-shoe-1.jpg';
import productShoe2 from '@/assets/product-shoe-2.jpg';
import productShoe3 from '@/assets/product-shoe-3.jpg';

const ProductGrid = () => {
  const products = [
    {
      id: '1',
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
      id: '2',
      name: 'Women\'s Athletic Running Sneakers',
      price: 129,
      image: productShoe2,
      category: 'Running',
      colors: ['#FFFFFF', '#FFB6C1', '#FF6B35'],
      isNew: true,
    },
    {
      id: '3',
      name: 'Kids Colorful Sports Shoes',
      price: 79,
      image: productShoe3,
      category: 'Kids',
      colors: ['#FF6B35', '#4169E1', '#32CD32', '#FFD700'],
    },
    {
      id: '4',
      name: 'Classic Court Tennis Shoes',
      price: 109,
      image: productShoe1,
      category: 'Tennis',
      colors: ['#FFFFFF', '#000000'],
    },
    {
      id: '5',
      name: 'Performance Training Shoes',
      price: 139,
      originalPrice: 169,
      image: productShoe2,
      category: 'Training',
      colors: ['#FF6B35', '#000000', '#FFFFFF'],
      isSale: true,
    },
    {
      id: '6',
      name: 'Lifestyle Casual Sneakers',
      price: 99,
      image: productShoe3,
      category: 'Lifestyle',
      colors: ['#FFFFFF', '#FF6B35', '#4169E1'],
    },
  ];

  return (
    <section className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-display text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium athletic footwear. 
            From performance to lifestyle, find your perfect pair.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Running', 'Basketball', 'Tennis', 'Training', 'Kids', 'Lifestyle'].map((category) => (
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-hero bg-primary text-primary-foreground hover:bg-primary/90">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;