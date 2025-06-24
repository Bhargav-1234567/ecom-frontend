
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: "1",
      title: "Wireless Bluetooth Headphones",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality for an immersive audio experience.",
      isFavorite: false
    },
    {
      id: "2",
      title: "Smart Home Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      description: "Voice-controlled smart speaker with built-in assistant, perfect for controlling your smart home devices and streaming music.",
      isFavorite: true
    },
    {
      id: "3",
      title: "Premium Coffee Beans",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Freshly roasted premium coffee beans sourced from the finest coffee farms around the world for the perfect morning brew.",
      isFavorite: false
    },
    {
      id: "4",
      title: "Fitness Tracker Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Advanced fitness tracker with heart rate monitoring, GPS tracking, and comprehensive health insights for active lifestyles.",
      isFavorite: false
    }
  ];

  // Sample category data
  const categories = [
    {
      id: "1",
      name: "Electronics & Gadgets",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      productCount: 245
    },
    {
      id: "2",
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop",
      productCount: 156
    },
    {
      id: "3",
      name: "Fashion & Style",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop",
      productCount: 89
    },
    {
      id: "4",
      name: "Sports & Fitness",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      productCount: 134
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-1">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Our Store
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discover amazing products at unbeatable prices
              </p>
              <div className="space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <CategoryGrid categories={categories} title="Shop by Category" />

        {/* Featured Products Section */}
        <ProductGrid products={featuredProducts} title="Featured Products" />

        {/* Featured Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Electronics</h3>
                <p className="text-gray-600">Latest gadgets and technology</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fashion</h3>
                <p className="text-gray-600">Trendy clothing and accessories</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Home & Garden</h3>
                <p className="text-gray-600">Everything for your home</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
