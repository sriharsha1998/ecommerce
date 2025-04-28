import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";

const steps = ["Shipping address", "Payment details", "Review your order"];

const Checkout: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handlePlaceOrder = () => alert("Order placed successfully!");

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField label="Last Name" name="lastName" fullWidth required />
            </Grid>
            <Grid>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField
                label="Address Line 1"
                name="address1"
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField label="Address Line 2" name="address2" fullWidth />
            </Grid>
            <Grid>
              <TextField label="City" name="city" fullWidth required />
            </Grid>
            <Grid>
              <TextField label="State" name="state" fullWidth required />
            </Grid>
            <Grid>
              <TextField
                label="Postal Code"
                name="postalCode"
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField label="Country" name="country" fullWidth required />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Typography variant="body1">
              Total: <strong>$15.00</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Membership plan: $15.00
            </Typography>
          </Box>
        );
      default:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Please add your card details
            </Typography>
            <Grid container spacing={2}>
              <Grid>
                <TextField
                  label="Card Number"
                  name="cardNumber"
                  fullWidth
                  required
                  inputProps={{
                    maxLength: 16,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  label="CVV"
                  name="cvv"
                  fullWidth
                  required
                  inputProps={{
                    maxLength: 3,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  label="Expiry Date"
                  name="expiryDate"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>
        );
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        {activeStep > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handlePlaceOrder}>
            Place Order
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Checkout;
