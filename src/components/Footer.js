import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <IconButton color="inherit" href="mailto:shramana2000@gmail.com">
          <Email />
          <Typography variant="body2">
            <strong>Email: </strong>shramana2000@gmail.com
          </Typography>
        </IconButton>
        <IconButton color="inherit" href="https://github.com/ShramanaSarkar" target="_blank">
          <GitHub />
          <Typography variant="body2">
            <strong>GitHub: </strong>github.com/ShramanaSarkar
          </Typography>
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/in/shramana-sarkar-5148a5191/" target="_blank">
          <LinkedIn />
          <Typography variant="body2">
            <strong>LinkedIn: </strong>linkedin.com/in/shramana-sarkar-5148a5191
          </Typography>
        </IconButton>
        <IconButton color="inherit" href="tel:+9831452346">
          <Phone />
          <Typography variant="body2">
            <strong>Contact: </strong>+91-9831452346
          </Typography>  
        </IconButton>
      </Stack>
      <Typography variant="body2">© 2025 Shramana Sarkar. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
