"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, MenuItem, IconButton, Chip, CircularProgress, Snackbar } from "@mui/material";
import { MdWork, MdDescription, MdAdd } from "react-icons/md";
import { AiOutlineFieldTime, AiOutlineHome } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import CareersBanner from "@/Components/Features/Careers/Banner";
import { API_BASE_URL } from "@/constant/appConstants";

export default function Careers() {
  const [job, setJob] = useState({
    title: "",
    experience: "",
    details: [],
    description: "",
    location: "",
    workHours: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [detailInput, setDetailInput] = useState("");

  const jobTypes = ["Full-time", "Part-time", "Contract"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleAddDetail = () => {
    if (detailInput.trim()) {
      setJob({ ...job, details: [...job.details, detailInput] });
      setDetailInput("");
    }
  };

  const handleRemoveDetail = (index) => {
    setJob({ ...job, details: job.details.filter((_, i) => i !== index) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/create-job`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
  
      if (response.ok) {
        setSuccess(true);
        setJob({
          title: "",
          experience: "",
          details: [],
          description: "",
          location: "",
          workHours: "",
          type: "",
        });
      } else {
        setError(true);
        console.error("Failed to create job:", response.statusText);
      }
    } catch (err) {
      console.error("Error creating job:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box>
      <CareersBanner />
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
          Create Job
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            {/* Job Title */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <MdWork size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Job Title"
                  name="title"
                  fullWidth
                  variant="outlined"
                  value={job.title}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <BsFillCalendarDateFill size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Experience"
                  name="experience"
                  fullWidth
                  variant="outlined"
                  value={job.experience}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Work Hours */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <AiOutlineFieldTime size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Work Hours"
                  name="workHours"
                  fullWidth
                  variant="outlined"
                  value={job.workHours}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Location */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <FaLocationArrow size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Location"
                  name="location"
                  fullWidth
                  variant="outlined"
                  value={job.location}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Job Type */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <AiOutlineHome size={24} style={{ marginRight: 8 }} />
                <TextField
                  label="Job Type"
                  name="type"
                  select
                  fullWidth
                  variant="outlined"
                  value={job.type}
                  onChange={handleChange}
                  required
                >
                  {jobTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
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
                  value={job.description}
                  onChange={handleChange}
                  required
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <TextField
                  label="Add Detail"
                  fullWidth
                  variant="outlined"
                  value={detailInput}
                  onChange={(e) => setDetailInput(e.target.value)}
                />
                <IconButton onClick={handleAddDetail} color="primary">
                  <MdAdd />
                </IconButton>
              </Box>
              <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                {job.details.map((detail, index) => (
                  <Chip
                    key={index}
                    label={detail}
                    onDelete={() => handleRemoveDetail(index)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
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
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Create Job"}
            </Button>
          </Box>
        </Box>

        {/* Success and Error Messages */}
        <Snackbar
          open={success}
          autoHideDuration={4000}
          onClose={() => setSuccess(false)}
          message="Job created successfully!"
        />
        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
          message="Failed to create job."
        />
      </Box>
    </Box>
  );
}
