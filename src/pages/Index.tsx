import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import CategoryGrid from "@/components/CategoryGrid";
import { useProducts } from "@/api/hooks/useProducts";
import { useCategories } from "@/api/hooks/useCategories";

const Index = () => {
  const featuredProducts = [];

  const {
    data: products = {
      products: [],
      total: 0,
      page: 1,
      limit: 10,
      hasNextPage: false,
    },
    isLoading,
    error,
  } = useProducts({ page: 1, limit: 4, sortType: "price", sortColumn: "asc" });

  const {
    data: categories = {
      categories: [],
      total: 0,
      page: 1,
      limit: 10,
      hasNextPage: false,
    },
  } = useCategories({
    page: 1,
    limit: 5,
  });

  return (
    <div className="min-h-screen flex flex-col">
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
        <CategoryGrid
          categories={categories.categories || []}
          title="Shop by Category"
        />

        {/* Featured Products Section */}
        <ProductGrid
          products={products?.products || []}
          title="Featured Products"
        />

        {/* Featured Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Categories
          </h2>
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
    </div>
  );
};

export default Index;
