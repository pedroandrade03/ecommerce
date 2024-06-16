export interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  category: string;
  weight?: number;
  rating: number;
  description: string;
}
