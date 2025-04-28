import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { getAllProducts } from "../services/Api";
import { Product } from "../types/Product";

const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    loading: cartLoading,
    error: cartError,
  } = useCart();
  const [products, setProducts] = useState<Product[]>([]); // maintain products details
  const [loading, setLoading] = useState(true); //loading products
  const [error, setError] = useState<string | null>(null); //errors forproduct
  const [updatingItem, setUpdatingItem] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getProductDetails = (productId: number) => {
    return products.find((product) => product.id === productId); //particular product details
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const handleUpdateQuantity = async (
    productId: number,
    newQuantity: number
  ) => {
    setUpdatingItem(productId);
    try {
      await updateQuantity(productId, newQuantity);
    } catch (error) {
      console.error("Error updating quantity:", error);
    } finally {
      setUpdatingItem(null);
    }
  };

  const handleRemoveItem = async (productId: number) => {
    setUpdatingItem(productId);
    try {
      await removeFromCart(productId);
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setUpdatingItem(null);
    }
  };

  if (loading || cartLoading) {
    return (
      <Container
        maxWidth="lg"
        sx={{ py: 4, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (cartError) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{cartError}</Alert>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Add some products to your cart to see them here.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cartItems.map((item) => {
          const product = getProductDetails(item.id);
          const isUpdating = updatingItem === item.id;

          return (
            <Card key={item.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  p: 2,
                }}>
                <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product?.image || "https://via.placeholder.com/140"}
                    alt={product?.name || "Product"}
                    sx={{ objectFit: "contain" }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {product?.name || "Product"}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      ${product?.price || 0}
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                      <Button
                        size="small"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={isUpdating || item.quantity <= 1}>
                        {isUpdating ? (
                          <CircularProgress size={20} />
                        ) : (
                          <RemoveIcon />
                        )}
                      </Button>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <Button
                        size="small"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={isUpdating}>
                        {isUpdating ? (
                          <CircularProgress size={20} />
                        ) : (
                          <AddIcon />
                        )}
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveItem(item.id)}
                        disabled={isUpdating}
                        sx={{ ml: 2 }}>
                        {isUpdating ? <CircularProgress size={20} /> : "Remove"}
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h5" component="div">
          Total: ${calculateTotal().toFixed(2)}
        </Typography>
      </Box>
    </Container>
  );
};
export default Cart;
