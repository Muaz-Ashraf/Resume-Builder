import { Card, Typography } from "@mui/material";
import React from "react";

const Resume = (props) => {
  return (
    <>
      <Typography variant="h1">{props.name}</Typography>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="h1">{props.description}</Typography>
    </>
  );
};

export default Resume;
