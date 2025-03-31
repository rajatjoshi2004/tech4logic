"use client";

import React, { useState } from "react";
import {
  Box, TextField, Button, Typography, Grid, IconButton, Chip, CircularProgress, Snackbar,
} from "@mui/material";
import { MdTitle, MdDescription, MdAdd } from "react-icons/md";
import { FaTag, FaImage } from "react-icons/fa";
import BlogBanner from "@/Components/Features/Blog/BannerPart";
import { API_BASE_URL } from "@/constant/appConstants";

export default function BlogCreate() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    tags: [],
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !blog.tags.includes(tagInput)) {
      setBlog({ ...blog, tags: [...blog.tags, tagInput] });
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setBlog({ ...blog, tags: blog.tags.filter((_, i) => i !== index) });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(`${API_BASE_URL}/v1/service/upload-file`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Image uploaded successfully:", data, data.file);
          setBlog((prev) => ({ ...prev, imageUrl: data.file.fileUrl }));
          setSuccess(true);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Image upload failed:", err);
        setError(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { title, description, tags, imageUrl } = blog;
    const requestBody = {
      title,
      description,
      tags: JSON.stringify(tags),
      image: imageUrl,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/create-blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setSuccess(true);
        setBlog({
          title: "",
          description: "",
          tags: [],
          imageUrl: "",
        });
        setImagePreview(null);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error creating blog:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <BlogBanner />
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 3,
          mt: "50px",
          backgroundColor: "#f9fafb",
          borderRadius: 2,
          boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Blog
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            {/* Blog Title */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <MdTitle size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Blog Title"
                  name="title"
                  fullWidth
                  variant="outlined"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <MdDescription size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Description"
                  name="description"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  value={blog.description}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Tags */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <FaTag size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Add Tag"
                  fullWidth
                  variant="outlined"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                <IconButton onClick={handleAddTag} color="primary">
                  <MdAdd />
                </IconButton>
              </Box>
              <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                {blog.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleRemoveTag(index)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Grid>

            {/* Blog Image */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <FaImage size={24} style={{ marginRight: 8 }} />
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  sx={{ background: "linear-gradient(45deg, #FF8E53, #FF6D00)" }}
                >
                  Upload Image
                  <input
                    type="file"
                    hidden
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </Button>
              </Box>

              {/* Image Preview */}
              {imagePreview && (
                <Box mt={2} textAlign="center">
                  <img src={imagePreview} alt="Selected Blog" style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }} />
                </Box>
              )}
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box mt={4} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                paddingX: 4,
                paddingY: 1,
                fontSize: "1.1rem",
                fontWeight: "bold",
                background: success ? "linear-gradient(45deg, #28a745, #218838)" : "linear-gradient(45deg, #FF8E53, #FF6D00)",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "0.3s",
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Create Blog"}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Success or Error Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        message="Blog Created Successfully!"
      />
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        message="Error occurred. Please try again!"
      />
    </Box>
  );
}
