import { Product } from "@/types/Product";

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}