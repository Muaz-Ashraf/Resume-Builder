import { Card, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <>
      <Typography variant="h1">HAHAHAHAH</Typography>

      <Typography variant="h1">{formData.name}</Typography>
      <Typography variant="h4">{formData.title}</Typography>
      <Typography variant="h1">{formData.description}</Typography>
    </>
  );
};

export default Resume;
