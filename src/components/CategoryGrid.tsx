
import React from 'react';
import CategoryCard from './CategoryCard';

interface Category {
  id: string;
  name: string;
  image: string;
  productCount?: number;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
}

const CategoryGrid = ({ categories, title }: CategoryGridProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        )}
        
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
  );
};

export default CategoryGrid;
