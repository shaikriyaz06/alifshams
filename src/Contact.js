import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Container,
  TextField,
  InputAdornment,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Email,
  LocationOn,
  Send,
  Phone,
  Business,
  CloudUpload,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import contactImage from "./assets/contactus.jpg";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    phone: "",
    countryCode: "",
    companyName: "",
    serviceOfInterest: "",
    message: "",
    yearsOfExperience: "",
    keySkills: "",
    education: "",
    availability: "",
    linkedinProfile: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const services = [
    "IT Consulting & Solutions",
    "Business Consulting",
    "Tailored Talent Solutions",
  ];

  const availabilityOptions = [
    "Immediately",
    "15-30 days",
    "30-60 days",
    "More than 60 days",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      const isClient = formData.userType === "client";
      const isJobSeeker = formData.userType === "jobSeeker";
      if (isClient) {
        response = await axios.post(
          "http://localhost:8000/user/mail",
          formData
        );
      } else if (isJobSeeker) {
        response = await axios.post("http://localhost:8000/user/contactus", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      console.log(response)
      toast.success("Form submitted successfully!", { autoClose: 3000 });
      setFormData({
        userType: "",
        name: "",
        email: "",
        phone: "",
        countryCode: "",
        companyName: "",
        serviceOfInterest: "",
        message: "",
        yearsOfExperience: "",
        keySkills: "",
        education: "",
        availability: "",
        linkedinProfile: "",
        portfolio: "",
        coverLetter: "",
        resume: null,
      });
    } catch (error) {
      toast.error("Error submitting form", { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const renderClientFields = () => (
    <>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required>
          <InputLabel>Service of Interest</InputLabel>
          <Select
            name="serviceOfInterest"
            value={formData.serviceOfInterest}
            onChange={handleInputChange}
            label="Service of Interest"
          >
            {services.map((service) => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );

  const renderJobSeekerFields = () => (
    <>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Years of Experience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
          required
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          required
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth required>
          <InputLabel>Availability</InputLabel>
          <Select
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            label="Availability"
          >
            {availabilityOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="LinkedIn Profile"
          name="linkedinProfile"
          value={formData.linkedinProfile}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Portfolio/Website"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Key Skills (Comma-separated)"
          name="keySkills"
          value={formData.keySkills}
          onChange={handleInputChange}
          required
          multiline
          rows={3}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Cover Letter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          multiline
          rows={4}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          component="label"
          startIcon={<CloudUpload />}
          sx={{ mb: 1 }}
        >
          Upload Resume *
          <input
            type="file"
            hidden
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </Button>
        {formData.resume && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Selected: {formData.resume.name}
          </Typography>
        )}
      </Grid>
    </>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={contactImage}
          alt="Contact Us"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
            zIndex: -2,
            objectPosition: "80% 0%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: -1,
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", color: "white", zIndex: 1 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: "bold", mb: 3, pt: 14 }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "800px", mx: "auto" }}>
            We're here to provide innovative AI solutions tailored to your
            needs. Get in touch with us to discuss how we can bring your vision
            to life with precision and excellence.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: "grey.300" }}>
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Email sx={{ color: "white", fontSize: 24, mt: 0.5, mr: 2 }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.300" }}>
                    contact@alifshams.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <LocationOn
                  sx={{ color: "white", fontSize: 24, mt: 0.5, mr: 2 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    Headquarters
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.300" }}>
                    Innovation Hub, Tech City, Hyderabad, Telangana - 500001
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ p: 4, bgcolor: "grey.100" }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel>I am a</InputLabel>
                      <Select
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        label="I am a"
                      >
                        <MenuItem value="client">Client</MenuItem>
                        <MenuItem value="jobSeeker">Job Seeker</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Country Code"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      required
                      placeholder="+966"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {formData.userType === "client" && renderClientFields()}
                  {formData.userType === "jobSeeker" && renderJobSeekerFields()}

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      startIcon={<Send />}
                      sx={{
                        bgcolor: "#B31F7E",
                        "&:hover": { bgcolor: "#482A7A" },
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Google Map Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 6, color: "white" }}
        >
          Find Us
        </Typography>
        <Paper sx={{ height: "400px", borderRadius: 2, overflow: "hidden" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8368324924766!2d78.4411097!3d17.4004712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971466381c91%3A0xc855906f2903c236!2sMasab%20Tank%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702599999999!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUs;
