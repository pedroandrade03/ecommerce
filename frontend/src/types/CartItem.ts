import { Product } from "@/types/Product";

export interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}
