import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, TextField, Button, Typography, Alert, Card, CardContent } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mpalw8p",  // Replace with your actual EmailJS Service ID
        "template_hqgp4mr", // Replace with your actual EmailJS Template ID
        formData,
        "VRsWXF2CiNA86njdv"  // Replace with your actual EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setStatus({ type: "error", message: "Failed to send message. Try again later." });
      });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Contact Me</Typography>
      {status && <Alert severity={status.type}>{status.message}</Alert>}

      <Card sx={{ width: "100%", maxWidth: "1200px", boxShadow: 3, borderRadius: 2, height: "500px" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Your Name" name="name" value={formData.name} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
            <TextField label="Your Email" name="email" value={formData.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
            <TextField label="Message" name="message" value={formData.message} onChange={handleChange} fullWidth required multiline rows={4} sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;
