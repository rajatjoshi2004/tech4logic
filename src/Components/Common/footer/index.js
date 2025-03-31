"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./style";
import Link from "next/link";
import PhoneNumberComponent from "../PhoneNumberComponent";
import { MdEmail } from "react-icons/md";
import { API_BASE_URL } from "@/constant/appConstants";

export const FooterComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleEmailSubmit = async () => {
    if (email) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_BASE_URL}/v1/tech4logic/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Failed to subscribe. Please try again.");
        }

        const result = await response.json();
        setResponseMessage("Thank you for subscribing to our newsletter!");
        setEmail("");
        setIsModalOpen(true);
      } catch (error) {
        setResponseMessage(error.message || "An error occurred. Please try again.");
        setIsModalOpen(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setResponseMessage("Please enter a valid email address.");
    }
  };

  const handleCloseModal = () => {
    setResponseMessage("");
    setEmail("");
    setIsModalOpen(false);
  };

  const firstThreeLocations = [
    {
      city: "Mumbai",
      address:
        "209, Building No. A1, Rupa Solitaire Millenium Business Park, Mahape, Navi Mumbai – 400710",
    },
    {
      city: "Bengaluru",
      address:
        "Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034.",
    },
    {
      city: "London",
      address: "128 City Road, London, United Kingdom, EC1V 2NX",
    },
  ];

  const remainingLocations = [
    {
      city: "Gurgaon",
      address:
        "2ND Floor, Plot No 332, Udyog Vihar Phase 4 Rd, Phase III, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
    },
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.SubContainer}>
        <Typography variant="h6" sx={styles.SubContainer["& h6"]}>
          Stay Ahead of Threats with <br /> Proactive IT Security Solutions
        </Typography>
        <Box sx={styles.iconContainer}>
          {[
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              url: "https://www.linkedin.com/company/tech4logic1/posts/?feedView=all",
            },
            { icon: <BsTwitterX />, label: "X", url: "https://x.com/tech4logic1" },
            {
              icon: <AiFillFacebook />,
              label: "Facebook",
              url: "https://www.facebook.com/tech4logic1/",
            },
          ].map(({ icon, label, url }) => (
            <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => window.open(url, "_blank")}
                sx={styles.IconButtonConatiner}
              >
                {icon}
              </IconButton>
              <Typography variant="body2" sx={styles.iconContainer["& body2"]}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ borderBottom: "2px solid gray", width: "100%", marginBottom: 2 }} />
      <Box sx={{ padding: { xs: 2 }, color: "#fff" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={styles.logoContainer}>
              <Image
                src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/tech4logic.svg"
                alt="Company Logo"
                width={322}
                height={150}
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/")}
              />
              <Typography variant="h6" sx={styles.logoContainer["& h6"]}>
                Subscribe Newsletter
              </Typography>
              <Typography variant="body2" sx={styles.logoContainer["& body2"]}>
                Unleash the full potential of your business with bespoke IT solutions designed to
                meet your unique needs.
              </Typography>
              <Box sx={styles.searchInputContainer}>
                <TextField
                  variant="outlined"
                  placeholder="Enter your email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <AiOutlineMail style={{ color: "#ABA9A9", width: "25px", height: "25px" }} />
                    ),
                  }}
                  sx={styles.textField}
                />
                <Button
                  variant="contained"
                  onClick={handleEmailSubmit}
                  sx={styles.sendButton}
                  disabled={isSubmitting}
                >
                  Send <IoIosArrowForward style={{ width: "20px", height: "20px" }} />
                </Button>
              </Box>
              <Typography variant="body2" sx={{ color: "#A7A7A7", mt: 2 }}>
                By subscribing, you’re accepting our{" "}
                <a style={{ textDecoration: "underline", color: "#fff", fontWeight: "500" }}>
                  Privacy Policy
                </a>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={2.3} sx={styles.ulContainer}>
            <Typography variant="h6" sx={styles.serviceContainer}>
              Services
            </Typography>
            <ul>
              {[
                "Cloud Services",
                "Cybersecurity Solutions",
                "Infrastructure Solutions",
                "Software Licensing",
                "Machine Learning",
                "Web Development",
                "UI UX Design",
                "Graphic Design",
                "SEO",
                "Digital Marketing",
                "Social Media Marketing",
                "Content Marketing",
              ].map((text, index) => (
                <li
                  key={index}
                  onClick={() => router.push(`/service?tab=${text.replace(/\s+/g, "-")}`)}
                >
                  <Typography variant="body2" sx={styles.serviceItem}>
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2.3}>
            <Typography variant="h6" sx={styles.locationHeader}>
              Our Locations
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {firstThreeLocations.map(({ city, address }, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={styles.locationCity}>
                    {city}
                  </Typography>
                  <Typography variant="body2" sx={styles.locationAddress}>
                    {address}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2.3}>
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
              {remainingLocations.map(({ city, address }, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={styles.locationCity}>
                    {city}
                  </Typography>
                  <Typography variant="body2" sx={styles.locationAddress}>
                    {address}
                  </Typography>
                </li>
              ))}
            </ul>
            <Box sx={{ borderTop: "2px solid gray", width: "100%", margin: "20px 0" }} />
            <Typography variant="h6" sx={styles.locationHeader}>
              Contact Us
            </Typography>
            <PhoneNumberComponent />

            <Link
              href="mailto:info@tech4logic.com"
              underline="none"
              style={{
                textDecoration: "underline",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdEmail size={20} />
              info@tech4logic.com
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Subscription Message</DialogTitle>
        <DialogContent>
          <Typography>{responseMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FooterComponent;
