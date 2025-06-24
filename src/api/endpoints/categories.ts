import client from '../client';
 import {  CategoriesApiResponse, Category } from '../types';
import { CategoriesFilters } from '../hooks/useCategories';

export const fetchCategories = async (filters: CategoriesFilters): Promise<CategoriesApiResponse> => {
  const res = await client.get('/categories', { params: filters });
  return res.data;
};

 