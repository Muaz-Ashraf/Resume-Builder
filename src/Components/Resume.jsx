import { Card, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  const formData = location.state;
  return (
    <>
      <Typography variant="h1">{formData.name}</Typography>
      <Typography variant="h1">{formData.title}</Typography>
      <Typography variant="h1">{formData.description}</Typography>
      <Typography variant="h1">{formData.email}</Typography>
      <Typography variant="h1">{formData.phone}</Typography>
      <Typography variant="h1">{formData.location}</Typography>
      <Typography variant="h1">{formData.linkedIn}</Typography>
      <Typography variant="h1">{formData.degree}</Typography>
      <Typography variant="h1">{formData.university}</Typography>
      <Typography variant="h1">{formData.yearCompleted}</Typography>
      <Typography variant="h1">{formData.experience}</Typography>
      <Typography variant="h1">{formData.skills}</Typography>
      <Typography variant="h1">{formData.interests}</Typography>
    </>
  );
};

export default Resume;
