import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        py: 2,
        textAlign: "center",
        mt: "auto", // Ensure it stays at the bottom
      }}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Copyrights All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
