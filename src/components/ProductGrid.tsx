import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  product_price: number;
  main_image: string;
  description: string;
  isFavorite: boolean;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              title={product.name}
              price={product.product_price}
              image={product.main_image}
              description={product.description}
              isFavorite={product.isFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
