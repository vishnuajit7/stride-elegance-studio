import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Product Grid */}
      <ProductGrid />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
