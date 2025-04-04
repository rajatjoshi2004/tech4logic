import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Grow,
  TextField,
  Grid,
  MenuItem,
  CircularProgress,
  Snackbar,
  InputAdornment,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdHome,
  MdAttachMoney,
  MdWork,
  MdAttachFile,
} from "react-icons/md";

function ApplicationModal({ open, handleClose, jobId }) {
  const [application, setApplication] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    currentCTC: "",
    expectedCTC: "",
    experience: "",
    jobType: "",
    resume: null,
    status: "Not Viewed",
    jobId: jobId,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("");

  console.log("jobid", jobId);

  const jobTypes = ["Hybrid", "Remote", "On-site"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplication({ ...application, resume: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(application).forEach((key) => {
      if (key === "resume" && application[key]) {
        formData.append(key, application[key]);
      } else {
        formData.append(key, application[key]);
      }
    });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/career/create-candidate`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      if (response.ok) {
        setSuccess(true);
        setApplication({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          address: "",
          currentCTC: "",
          expectedCTC: "",
          experience: "",
          jobType: "",
          resume: null,
          status: "Not Viewed",
          jobId: jobId,
        });
        setFileName("");
        setTimeout(() => handleClose(), 2000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="application-modal-title"
      aria-describedby="application-modal-description"
    >
      <Grow in={open}>
        <div
          className="bg-white m-5 md:m-10 lg:m-20 p-10 rounded-xl overflow-y-auto h-[90vh] lg:h-fit"
          //   sx={{
          //     position: "absolute",
          //     top: "10%",
          //     left: "1%",
          //     transform: "translate(-50%, -50%)",
          //     width: "100%",
          //     maxWidth: 1000,
          //     bgcolor: "background.paper",
          //     boxShadow: 24,
          //     p: 4,
          //     m:10,
          //     borderRadius: 2,
          //     maxHeight: "90vh",
          //     overflowY: "auto",
          //   }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Apply for Position
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              {/* Row 1 */}
              <Grid item xs={12} container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdPerson size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Full Name"
                      name="fullName"
                      fullWidth
                      variant="outlined"
                      value={application.fullName}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdEmail size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      fullWidth
                      variant="outlined"
                      value={application.email}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdPhone size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Phone"
                      name="phone"
                      fullWidth
                      variant="outlined"
                      value={application.phone}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Row 2 */}
              <Grid item xs={12} container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdLocationOn size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Location"
                      name="location"
                      fullWidth
                      variant="outlined"
                      value={application.location}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdHome size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Address"
                      name="address"
                      fullWidth
                      variant="outlined"
                      value={application.address}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdWork size={24} style={{ marginRight: 16 }} />
                    <FormControl fullWidth>
                      <InputLabel>Job Type</InputLabel>
                      <Select
                        name="jobType"
                        value={application.jobType}
                        onChange={handleChange}
                        label="Job Type"
                        required
                      >
                        {jobTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              {/* Row 3 */}
              <Grid item xs={12} container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdAttachMoney size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Current CTC"
                      name="currentCTC"
                      fullWidth
                      variant="outlined"
                      value={application.currentCTC}
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;
                        if (e.target.value === "" || re.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdAttachMoney size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Expected CTC"
                      name="expectedCTC"
                      fullWidth
                      variant="outlined"
                      value={application.expectedCTC}
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;
                        if (e.target.value === "" || re.test(e.target.value)) {
                          handleChange(e);
                        }
                      }}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      required
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center">
                    <MdWork size={24} style={{ marginRight: 16 }} />
                    <TextField
                      label="Experience"
                      name="experience"
                      fullWidth
                      variant="outlined"
                      value={application.experience}
                      onChange={handleChange}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Row 4 - Resume Upload */}
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <MdAttachFile size={24} style={{ marginRight: 16 }} />
                  <input
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    id="resume-upload"
                    type="file"
                    onChange={handleFileChange}
                    required
                  />
                  <label htmlFor="resume-upload">
                    <Button variant="outlined" component="span" sx={{ minWidth: 200 }}>
                      Upload Resume
                    </Button>
                  </label>
                  {fileName && (
                    <Typography variant="body1" sx={{ ml: 2 }}>
                      {fileName}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleClose} sx={{ mr: 2, px: 4, py: 1.5 }} disabled={loading}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#3E57A7",
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: "#2d4375" },
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit Application"}
              </Button>
            </Box>
          </Box>

          <Snackbar
            open={success}
            autoHideDuration={4000}
            onClose={() => setSuccess(false)}
            message="Application submitted successfully!"
          />
          <Snackbar
            open={error}
            autoHideDuration={4000}
            onClose={() => setError(false)}
            message="Failed to submit application. Please try again."
          />
        </div>
      </Grow>
    </Modal>
  );
}

export default ApplicationModal;
