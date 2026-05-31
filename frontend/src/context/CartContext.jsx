import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {

    const existingPizza = cartItems.find(
      (item) => item._id === pizza._id
    );

    if (existingPizza) {

      const updatedCart = cartItems.map((item) =>
        item._id === pizza._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        { ...pizza, quantity: 1 },
      ]);
    }
  };

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
