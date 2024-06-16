import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  cartItems: CartItem[];
  getItemQuantity: (id: string) => number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  addToCart: (product: Product, quantity: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: string) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decreaseQuantity(id: string) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  function addToCart(product: Product, quantity: number) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      }

      return [...currentItems, { id: Math.random(), product, quantity }];
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
