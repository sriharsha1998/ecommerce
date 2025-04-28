// import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
// Create axios instance with base URL
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
// });

// Category API functions
// const API_URL = "http://localhost:3003/api/";
console.log("API_URL", API_URL);
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}category`);
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Product API functions
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}products`);
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId: string) => {
  try {
    const response = await fetch(`${API_URL}products/category/${categoryId}`);
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

// Cart API function

export const getCart = async () => {
  try {
    const response = await fetch(`${API_URL}carts`);
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToCart = async (product_id: number, quantity: number) => {
  try {
    const response = await fetch(`${API_URL}carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, quantity }),
    });
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const updateCartItem = async (itemId: number, quantity: number) => {
  try {
    const response = await fetch(`${API_URL}carts/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const removeFromCart = async (productId: number) => {
  try {
    const response = await fetch(`${API_URL}carts/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json(); // ✅ parse JSON
    return data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};
