import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount?: number;
}

const CategoryCard = ({ id, name, image, productCount }: CategoryCardProps) => {
  return (
    <Tooltip>
      <TooltipProvider delayDuration={0}>
        <TooltipTrigger>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-center h-16">
              {/* Category Image */}
              <div className="w-24 h-16 flex-shrink-0">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category Details */}
              <div className="flex-1 px-4">
                <h3 className="w-[100px] text-base font-semibold text-gray-900 mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  {name}
                </h3>

                {productCount && (
                  <p className="text-sm text-gray-600">
                    {productCount} products
                  </p>
                )}
              </div>
            </div>
          </div>{" "}
        </TooltipTrigger>
        <TooltipContent side="bottom">{name}</TooltipContent>
      </TooltipProvider>
    </Tooltip>
  );
};

export default CategoryCard;
