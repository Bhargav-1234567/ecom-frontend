
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  searchTitle: string;
  discountAmount: number;
}

const Products = () => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    searchTitle: '',
    discountAmount: 0,
  });

  // Sample products data
  const allProducts = [
    {
      id: '1',
      title: 'Wireless Bluetooth Headphones',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      description: 'High-quality wireless headphones with noise cancellation and long battery life.',
      category: 'Electronics',
      discount: 15,
      isFavorite: false,
    },
    {
      id: '2',
      title: 'Cotton Summer T-Shirt',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300',
      description: 'Comfortable cotton t-shirt perfect for summer wear. Available in multiple colors.',
      category: 'Clothing',
      discount: 0,
      isFavorite: true,
    },
    {
      id: '3',
      title: 'Smart Home Security Camera',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300',
      description: 'HD security camera with night vision and mobile app integration.',
      category: 'Electronics',
      discount: 25,
      isFavorite: false,
    },
    {
      id: '4',
      title: 'Yoga Mat Premium',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300',
      description: 'Non-slip yoga mat with extra cushioning for comfortable workouts.',
      category: 'Sports',
      discount: 10,
      isFavorite: false,
    },
    {
      id: '5',
      title: 'Coffee Maker Stainless Steel',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300',
      description: 'Programmable coffee maker with thermal carafe and auto-brew feature.',
      category: 'Home & Garden',
      discount: 20,
      isFavorite: true,
    },
    {
      id: '6',
      title: 'Running Shoes Athletic',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
      description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
      category: 'Sports',
      discount: 30,
      isFavorite: false,
    },
  ];

  // Filter products based on current filters
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Price range filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Title search filter
    if (filters.searchTitle && !product.title.toLowerCase().includes(filters.searchTitle.toLowerCase())) {
      return false;
    }

    // Discount filter
    if (filters.discountAmount > 0 && product.discount < filters.discountAmount) {
      return false;
    }

    return true;
  });

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar onFiltersChange={handleFiltersChange} />
        
        {/* Products Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>
          
          <ProductGrid products={filteredProducts} />
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
