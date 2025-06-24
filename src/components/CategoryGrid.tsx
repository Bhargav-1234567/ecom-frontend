import React from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "@/api/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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

        {/* <Carousel
          opts={{
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="flex gap-4">
            {categories.map((category) => (
              <CarouselItem key={category._id} className="flex-[0_0_16.6666%]">
                <CategoryCard
                  key={category._id}
                  id={category._id}
                  name={category.name}
                  image={category.image}
                  productCount={category.productCount}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              id={category._id}
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
