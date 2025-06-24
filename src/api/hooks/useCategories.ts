import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../endpoints/categories";
export type CategoriesFilters = {
    page?: number;
    limit?: number;
     search?: string;
   };
  

export const useCategories = (filters: CategoriesFilters) => {
  return useQuery({
    queryKey: ["categories", filters],
    queryFn: () => fetchCategories(filters),
  });
};