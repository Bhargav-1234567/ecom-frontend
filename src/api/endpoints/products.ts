import client from '../client';
import { Filters } from '../hooks/useProducts';
import { Product, ProductsApiResponse } from '../types';

export const fetchProducts = async (filters: Filters): Promise<ProductsApiResponse> => {
  const res = await client.get('/products', { params: filters });
  return res.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await client.get(`/products/${id}`);
  return res.data;
};