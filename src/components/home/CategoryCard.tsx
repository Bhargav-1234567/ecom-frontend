"use client";
import React from "react";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount?: number;
}

const CategoryCard = ({ id, name, image, productCount }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="flex items-center h-24">
        {/* Category Image */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category Details */}
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          {productCount && (
            <p className="text-sm text-gray-600">{productCount} products</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
