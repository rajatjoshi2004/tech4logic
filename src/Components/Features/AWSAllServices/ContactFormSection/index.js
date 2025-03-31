"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaUser, FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./style";
import { API_BASE_URL } from "@/constant/appConstants";

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    termsAccepted: true,
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      setModalMessage("Please enter a valid email address.");
      setOpenModal(true);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setModalMessage("Please enter a valid phone number (10 digits, starting with 7, 8, or 9).");
      setOpenModal(true);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/reach-out`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        termsAccepted: true,
      });

      setModalMessage("Your message has been submitted successfully!");
      setOpenModal(true);
    } catch (error) {
      setModalMessage("Error submitting form: " + error.message);
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Grid container sx={styles.containerCSS}>
      <Grid item xs={12} md={6} sx={{ padding: { xs: "20px", md: "40px" }, color: "#000" }}>
        <Typography
          variant="h2"
          sx={{
            ...styles.containerCSS["& h2"],
            fontSize: { xs: "28px", md: "36px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          You can trust us for exceptional service quality.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ...styles.containerCSS["& h6"],
            fontSize: { xs: "16px", md: "20px" },
            textAlign: { xs: "center", md: "left" },
            mt: { xs: "10px", md: "20px" },
          }}
        >
          Provide your contact information, and we'll reach out within 24 hours.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ padding: { xs: "20px", md: "40px" }, mt: { xs: "20px", md: 0 } }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              ...styles.inputConatiner,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              mb: "20px",
            }}
          >
            <FaUser style={{ marginRight: "10px", marginBottom: { xs: "10px", md: "0" } }} />
            <TextField
              variant="outlined"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Box
            sx={{
              ...styles.inputConatiner,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              mb: "20px",
            }}
          >
            <FaBuilding style={{ marginRight: "10px", marginBottom: { xs: "10px", md: "0" } }} />
            <TextField
              variant="outlined"
              placeholder="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Box
            sx={{
              ...styles.inputConatiner,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              mb: "20px",
            }}
          >
            <FaPhone style={{ marginRight: "10px", marginBottom: { xs: "10px", md: "0" } }} />
            <TextField
              type="tel"
              variant="outlined"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ maxLength: 10 }}
            />
          </Box>

          <Box
            sx={{
              ...styles.inputConatiner,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              mb: "20px",
            }}
          >
            <FaEnvelope style={{ marginRight: "10px", marginBottom: { xs: "10px", md: "0" } }} />
            <TextField
              variant="outlined"
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Button
            type="submit"
            sx={{
              ...styles.buttonCSS,
              width: { xs: "100%", md: "auto" },
              fontSize: { xs: "14px", md: "16px" },
              padding: { xs: "10px 20px", md: "12px 30px" },
            }}
          >
            Submit
          </Button>
        </form>
      </Grid>

      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>{modalMessage.includes("Error") ? "Submission Error" : "Success"}</DialogTitle>
        <DialogContent>
          <Typography>{modalMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
