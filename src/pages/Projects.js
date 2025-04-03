import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio website showcasing skills, projects, and achievements.",
    github: "https://github.com/ShramanaSarkar/hotel-booking-project",
    technologies: "ReactJS, Material UI, EmailJS",
  },
  {
    name: "Hotel Management System",
    description: "Website to manage hotel bookings",
    github: "https://github.com/ShramanaSarkar/hotel-booking-project",
    technologies: "Java, Springboot, ReactJS, Material UI, Database",
  },
  {
    name: "Library Management System",
    description: "Project to manage student details.",
    github: "https://github.com/ShramanaSarkar/library-management-system",
    technologies: "Java, Springboot, ReactJS, Material UI, Database",
  },
  {
    name: "ToDo App",
    description: "Website for Simple ToDo System. It should work the following way: The user can type anything in the input form, and press enter or click the Add Item button to add the item to the ToDo List. The todo list items should display in list format. You should then finally be able to mark items as completed or remove them from the list. When an item is marked as completed, have it display with a line through the text and be colored green.",
    github: "https://github.com/ShramanaSarkar/todo-app",
    technologies: "ReactJS, Material UI",
  },
];

function Projects() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Projects</Typography>
      {projects.map((project, index) => (
        <Card sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h5">
              {project.name}
            </Typography>
            <Typography variant="body2">
              <strong>Description: </strong>
              {project.description}
            </Typography>
            <Typography variant="body2">
              <strong>Github Project: </strong>
              <italic><Link to={project.github} target="_blank" rel="noopener noreferrer">{project.github}</Link></italic>
            </Typography>
            <Typography variant="body2" color="textSecondary">
                  <strong>Technologies Used: </strong> {project.technologies}
                </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;
