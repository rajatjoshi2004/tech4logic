"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import styles from "./style";
import { API_BASE_URL } from "@/constant/appConstants";

const defaultProps = {
  options: [
    { title: "Cloud Services" },
    { title: "Cybersecurity Solutions" },
    { title: "Infrastructure Solutions" },
    { title: "Software Licensing" },
    { title: "Machine Learning" },
    { title: "Web Development" },
    { title: "UI UX Design" },
    { title: "Graphic Design" },
    { title: "SEO" },
    { title: "Digital Marketing" },
    { title: "Social Media Marketing" },
    { title: "Content Marketing" },
  ],
  getOptionLabel: (option) => option.title,
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productOrService: null,
    termsAccepted: false,
  });
  const [focusedInput, setFocusedInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAutocompleteChange = (event, value) => {
    setFormData((prev) => ({ ...prev, productOrService: value?.title || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/v1/tech4logic/contact-form-submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          productOrService: null,
          termsAccepted: false,
        });
      } else {
        alert("Error submitting form: " + result.message);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.contactTitle}>
        Contact
      </Typography>

      <Box sx={styles.scheduleMeetingSection}>
        <Typography variant="h2" sx={styles.scheduleTitle}>
          Schedule a Meeting
        </Typography>
        <Box sx={styles.borderBottom} />
        <Typography variant="h5" sx={styles.scheduleDescription}>
          Fill the form below, and we will get back to you in no time.
        </Typography>
        <Box sx={styles.borderBottom} />
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={styles.formRow}>
          <Typography variant="body1" sx={styles.formLabel}>
            Hey, my name is
          </Typography>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput("")}
            placeholder="Type here Name"
            style={{
              ...styles.inputFieldCSS,
              width: "100%",
              maxWidth: "400px",
              fontSize: "22px",
              marginRight: "2%",
              marginLeft: "20px",
              borderBottom:
                focusedInput === "name" ? "2px solid rgba(97, 153, 205, 1)" : "1px solid #fff",
              transition: "border-bottom 0.3s",
            }}
          />
          <Typography variant="body1" sx={styles.formLabel}>
            And I’m looking for
          </Typography>
          <Autocomplete
            {...defaultProps}
            disableCloseOnSelect={false}
            onChange={handleAutocompleteChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Product or Services"
                variant="standard"
                name="product"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  style: { color: "white" },
                }}
                sx={{
                  ...styles.inputField,
                  width: { xs: "80%", md: "100%" },
                  marginLeft: "20px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(53, 73, 96, 1)",
                  },
                  borderBottom:
                    focusedInput === "product"
                      ? "2px solid rgba(97, 153, 205, 1)"
                      : "1px solid #fff",
                }}
              />
            )}
            sx={{
              width: { xs: "100%", md: "30%" },
              marginLeft: "20px",
              "& .MuiAutocomplete-popupIndicator": {
                color: "white",
              },
            }}
          />
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.formRow}>
          <Typography variant="body1" sx={styles.formLabel}>
            Get in touch with us at
          </Typography>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput("")}
            placeholder="Type your email id"
            style={{
              ...styles.inputFieldCSS,
              fontSize: "22px",
              marginLeft: "20px",
              width: "100%",
              maxWidth: "400px",
              borderBottom:
                focusedInput === "email" ? "2px solid rgba(97, 153, 205, 1)" : "1px solid #fff",
              transition: "border-bottom 0.3s",
            }}
          />
          <Typography variant="body1" sx={styles.formLabel}>
            Call or msg us at
          </Typography>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => setFocusedInput("phone")}
            onBlur={() => setFocusedInput("")}
            placeholder="Type your mobile number"
            style={{
              ...styles.inputFieldCSS,
              fontSize: "22px",
              marginLeft: "20px",
              width: "100%",
              maxWidth: "400px",
              borderBottom:
                focusedInput === "phone" ? "2px solid rgba(97, 153, 205, 1)" : "1px solid #fff",
              transition: "border-bottom 0.3s",
            }}
          />
        </Box>

        <Box sx={styles.termsSection}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    termsAccepted: e.target.checked,
                  }))
                }
                sx={styles.checkbox}
              />
            }
            label={
              <Typography variant="body1" sx={styles.termsText}>
                I hereby accept all terms and conditions.{" "}
                <a href="/terms" style={{ color: "rgba(126, 190, 249, 1)" }}>
                  Terms and Conditions
                </a>
              </Typography>
            }
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={styles.submitButton}
          disabled={!formData.termsAccepted || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send Enquiry"}
          <span style={{ marginLeft: "8px" }}>→</span>
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
