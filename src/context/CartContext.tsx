import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/Products";
import { Cart } from "../types/Cart";
import {
  getCart,
  addToCart as apiAddToCart,
  updateCartItem as apiUpdateCartItem,
  removeFromCart as apiRemoveFromCart,
} from "../services/Api";

interface CartContextType {
  cartItems: Cart[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cart items from API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCartItems(data);
      } catch (err) {
        setError("Failed to fetch cart items");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product: Product) => {
    try {
      setLoading(true);
      await apiAddToCart(product.id, 1); // Assuming you have a function to add to cart
      const updatedCart = await getCart(); // Fetch updated cart after adding
      setCartItems(updatedCart);
    } catch (err) {
      setError("Failed to add item to cart");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      setLoading(true);
      await apiRemoveFromCart(productId); // Assuming you have a function to remove from cart
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } catch (err) {
      setError("Failed to remove item from cart");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    if (quantity < 0) return;
    try {
      setLoading(true);
      await apiUpdateCartItem(productId, quantity); // Assuming you have a function to update cart item
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    } catch (err) {
      setError("Failed to update item quantity in cart");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        loading,
        error,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
