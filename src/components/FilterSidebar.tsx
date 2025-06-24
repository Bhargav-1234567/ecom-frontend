
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FilterSidebarProps {
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  searchTitle: string;
  discountAmount: number;
}

const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    searchTitle: '',
    discountAmount: 0,
  });

  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books',
    'Beauty',
    'Toys',
    'Automotive'
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleSearchChange = (value: string) => {
    const newFilters = { ...filters, searchTitle: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleDiscountChange = (value: string) => {
    const discountAmount = parseInt(value) || 0;
    const newFilters = { ...filters, discountAmount };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  return (
    <div className="w-80 bg-white p-6 border-r border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
      
      {/* Title Search */}
      <div className="mb-6">
        <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
          Search Products
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="search"
            type="text"
            placeholder="Search by title..."
            value={filters.searchTitle}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Categories
        </Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
              />
              <Label
                htmlFor={category}
                className="text-sm text-gray-600 cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Price Range
        </Label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={1000}
            min={0}
            step={10}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Discount Amount Filter */}
      <div className="mb-6">
        <Label htmlFor="discount" className="text-sm font-medium text-gray-700 mb-2 block">
          Minimum Discount (%)
        </Label>
        <Input
          id="discount"
          type="number"
          min="0"
          max="100"
          placeholder="Enter discount %"
          value={filters.discountAmount || ''}
          onChange={(e) => handleDiscountChange(e.target.value)}
        />
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          const resetFilters = {
            categories: [],
            priceRange: [0, 1000] as [number, number],
            searchTitle: '',
            discountAmount: 0,
          };
          setFilters(resetFilters);
          onFiltersChange?.(resetFilters);
        }}
        className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
