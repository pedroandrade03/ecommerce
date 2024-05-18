import { ReactNode, createContext, useContext, useState } from "react";
import { CartItem } from "@/types/CartItem";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      quantity: 2,
      product: {
        name: "Queijo ralado vegetal sabor cheddar",
        image: "/queijo.jpg",
        category: "Laticínios",
        weight: 500,
        price: 9.99,
        rating: 4,
      },
    },
    {
      id: 2,
      quantity: 1,
      product: {
        name: "Queijo ralado vegetal sabor cheddar",
        image: "/queijo.jpg",
        category: "Laticínios",
        weight: 500,
        price: 1.99,
        rating: 2,
      },
    },
  ]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decreaseQuantity(id: number) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}