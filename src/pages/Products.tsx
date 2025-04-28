import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  SelectChangeEvent,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  getCategories,
  getAllProducts,
  getProductsByCategory,
} from "../services/Api";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

const Products: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryFromUrl = searchParams.get("category") || "all";

  const [category, setCategory] = useState<string>(categoryFromUrl);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products based on category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data =
          category === "all"
            ? await getAllProducts()
            : await getProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  // Update URL when category changes
  useEffect(() => {
    const newUrl =
      category === "all" ? "/products" : `/products?category=${category}`;
    navigate(newUrl, { replace: true });
  }, [category, navigate]);

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e: SelectChangeEvent<string>) =>
              setCategory(e.target.value)
            }>
            <MenuItem value="all">All</MenuItem>
            {categories.map((cat: Category) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px">
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            },
            gap: 3,
          }}>
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Products;
