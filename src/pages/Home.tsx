import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { products } from "../../src/data/Products";
import axios from "axios";
import { Category } from "../types/Category";
import { getCategories } from "../services/Api";

const Home: React.FC = () => {
  // Get unique categories from products
  const [categories, setCategories] = useState<Category[]>([]);

  // To access your API
  //one way to access the data from API using Axios
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/api/category")
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:",error);
  //     });
  // }, []);

  console.log("categories", categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const data = await response;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Redpepper
        </Typography>

        {/* Categories Section */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Available Categories
          </Typography>
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
              mt: 3,
            }}>
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <Card
                  key={category.id}
                  component={RouterLink}
                  to={`/products?category=${category.id}`}
                  sx={{
                    textDecoration: "none",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      category.image ||
                      // categoryImages[category as keyof typeof categoryImages] ||
                      "https://via.placeholder.com/300"
                    }
                    alt={category.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" align="center">
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>"NO records found"</p>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
