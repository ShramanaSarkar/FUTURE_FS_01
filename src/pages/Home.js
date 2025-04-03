import React from "react";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to My Portfolio</Typography>
      <Card sx={{ width: "100%", maxWidth: "1200px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6">
            <p>Aspiring Java Full Stack Developer with a strong foundation in Spring Boot, SQL, and web technologies. Passionate about building scalable, efficient, and user-friendly applications, I have worked on projects like a Hotel Management System and a Library Management System, showcasing my ability to develop end-to-end solutions.</p>
            <p>Certified as a Java Full Stack Professional, I have honed my skills in Java, SQL, HTML, CSS, JavaScript, and Data Structures & Algorithms. With hands-on experience in backend and frontend development, I thrive in agile environments, continuously learning and adapting to new technologies.</p>
            <p>Currently seeking opportunities in software development, where I can contribute my technical expertise and problem-solving skills to create impactful applications. Let’s connect and collaborate! 🚀</p>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`${process.env.PUBLIC_URL}/ShramanaSarkar_CV.pdf`}
            download="Shramana_Sarkar_CV.pdf"
            sx={{ mt: 3 }}
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </CardContent>
      </Card>
      
    </Container>
  );
}

export default Home;