"use client";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/home/ProductCard";
import CategoryCard from "@/components/home/CategoryCard";

export default function Home() {
  const { data, isLoading, error } = useProducts();
  const categories = [
    {
      id: "1",
      name: "Electronics & Gadgets",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      productCount: 245,
    },
    {
      id: "2",
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop",
      productCount: 156,
    },
    {
      id: "3",
      name: "Fashion & Style",
      image:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop",
      productCount: 89,
    },
    {
      id: "4",
      name: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop",
      productCount: 134,
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* {data?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))} */}
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

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* {title && (
              <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
            )} */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  productCount={category.productCount}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* {title && (
              <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
            )} */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  isFavorite={product.isFavorite}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
