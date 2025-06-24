export interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    stock: number;
  }

  export interface ProductsApiResponse {
    products: Product[];
    total: number;
    page: number;
    limit: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number;
    previousPage: number;
    totalPages: number;
    totalProducts: number;
  }
  
  export interface User {
    _id: string;
    name: string;
    email: string;
  }

  export interface Category {
    _id: string;
    name: string;
    image: string;
    productCount: number;
    slug: string;
  }

  export interface CategoriesApiResponse {
    categories: Category[];
    total: number;
    page: number;
    limit: number;
   
  }