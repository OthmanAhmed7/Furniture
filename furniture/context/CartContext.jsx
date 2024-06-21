"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import NotificationContext from "./NotificationContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useLocalStorage("furniture-cart", []);
  const { showNotify } = useContext(NotificationContext);

  // ADD TO CART
  const addToCart = (_id, image, name, price) => {
    const existingProduct = products.find((product) => product._id === _id);
    if (existingProduct) {
      const updatedProducts = products.map((product) => {
        if (product._id === _id) {
          showNotify(`Increased ${name} quantity`);
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });

      setProducts(updatedProducts);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { _id, image, name, price, quantity: 1 },
      ]);

      showNotify(`${name} added to your cart`);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (_id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== _id)
    );
  };

  // REDUCE CART ITEMS
  const reduceCartQuantity = (_id) => {
    const updatedProducts = products.map((product) => {
      if (product._id === _id) {
        showNotify(`Reduced ${product.name} quantity`);
        const updatedQuantity = product.quantity - 1;
        if (updatedQuantity < 1) {
          removeFromCart(_id);
        }
        return { ...product, quantity: updatedQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // RESET CART TO ZERO
  const resetCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        reduceCartQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
