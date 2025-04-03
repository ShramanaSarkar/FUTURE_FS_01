import React from "react";
import { Container, Box, Typography, LinearProgress, Grid, Card, CardContent, useTheme } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const technicalSkills = [
  { name: "Java", value: 70 },
  { name: "ReactJS", value: 70 },
  { name: "Spring Boot", value: 70 },
  { name: "HTML", value: 80 },
  { name: "CSS", value: 80 },
  { name: "Database", value: 70 },
];

const professionalSkills = [
  { name: "Problem Solving", value: 90 },
  { name: "Creativity", value: 80 },
  { name: "Communication", value: 85 },
  { name: "Teamwork", value: 80 },
];

const doughnutData = (value) => ({
  datasets: [
    {
      data: [value, 100 - value],
      backgroundColor: ["#00e5ff", "#ddd"],
      cutout: "70%",
    },
  ],
});

function Skills() {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>My Skills</Typography>
      <Card sx={{ width: "100%", maxWidth: "1200px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Box sx={{ width: "50%", padding: "0 20px", boxSizing: "border-box" }}>
              <Typography variant="h5" sx={{ mb: 2, textDecoration: "underline" }}>
                Technical Skills
              </Typography>
              {technicalSkills.map((skill, index) => (
                <Box key={index} sx={{ mb: 2, width: "100%" }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.value}
                    sx={{
                      height: 8,
                      bgcolor: "#ddd",
                      "& .MuiLinearProgress-bar": { bgcolor: theme.palette.primary.main },
                    }}
                  />
                  <Typography variant="body2" sx={{ textAlign: "right" }}>
                    {skill.value}%
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: "50%", padding: "0 20px", boxSizing: "border-box" }}>
              <Typography variant="h5" sx={{ mb: 2, textDecoration: "underline" }}>
                Professional Skills
              </Typography>
              <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
                {professionalSkills.map((skill, index) => (
                  <Grid item xs={6} key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ width: 120, height: 120 }}>
                      <Doughnut data={doughnutData(skill.value)} />
                    </Box>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2">{skill.value}%</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Skills;
