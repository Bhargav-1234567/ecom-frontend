import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../endpoints/products';


export type Filters = {
  page?: number;
  limit?: number;
  sortType?: string;
  sortColumn?: string;
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
 };

export const useProducts = (filters: Filters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
  });
};