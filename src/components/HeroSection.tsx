import { Button } from '@/components/ui/button';
import heroShoe from '@/assets/hero-shoe-1.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                New Collection
              </span>
            </div>
            
            <h1 className="text-hero text-white mb-6 leading-none">
              STEP INTO
              <br />
              <span className="text-accent">GREATNESS</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our premium collection of athletic footwear designed for champions. 
              Performance meets style in every step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hero bg-accent text-accent-foreground hover:bg-accent/90">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Styles Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50k+</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src={heroShoe}
                alt="Premium Athletic Sneaker"
                className="w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;