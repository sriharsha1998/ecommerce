import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const cartItemsCount = cartItems.reduce(
    (total: number, item) => total + item.quantity,
    0
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}>
          RedPepper.org
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          {/* Dropdown Menu for Dashboard */}
          <Button color="inherit" onClick={handleMenuOpen}>
            Dashboard
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "dashboard-button",
            }}>
            <MenuItem
              component={RouterLink}
              to="/profile"
              onClick={handleMenuClose}>
              Profile
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/account"
              onClick={handleMenuClose}>
              My Account
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/settings"
              onClick={handleMenuClose}>
              Settings
            </MenuItem>
          </Menu>

          {/* Other Navigation Links */}
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/products">
            Products
          </Button>
          <IconButton color="inherit" component={RouterLink} to="/cart">
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
