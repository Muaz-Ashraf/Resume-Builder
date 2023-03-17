import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const InputForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      title,
      email,
      description,
      phone,
      location,
      linkedIn,
      education,
      experience,
      skills,
      interests,
    };
  };
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        mt={2}
      >
        Enter your details to generate a complete Resume
      </Typography>
      <Card
        variant="outlined"
        sx={{
          padding: 5,
          display: "flex",
          flexDirection: "column",

          backgroundColor: "white",

          borderRadius: "2em",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={name}
              variant="outlined"
              label="Name"
              size="large"
              type="text"
              fullWidth
              required
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="title"
              value={title}
              variant="outlined"
              label="Title"
              size="large"
              type="text"
              fullWidth
              required
              onChange={(e) => setTitle(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="description"
              value={description}
              variant="filled"
              label="Describe yourself and your achievements briefly"
              type="text"
              multiline
              fullWidth
              required
              onChange={(e) => setDescription(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              value={email}
              type="email"
              variant="outlined"
              label="Email"
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              value={phone}
              label="Phone Number"
              type="number"
              fullWidth
              required
              onChange={(e) => setPhone(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="Location"
              value={location}
              type="text"
              fullWidth
              required
              onChange={(e) => setLocation(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="LinkedIn"
              value={linkedIn}
              type="text"
              fullWidth
              required
              onChange={(e) => setLinkedIn(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              value={education}
              label="Education"
              type="text"
              fullWidth
              required
              onChange={(e) => setEducation(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              value={experience}
              variant="outlined"
              label="Experience"
              type="text"
              fullWidth
              required
              onChange={(e) => setExperience(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={skills}
              variant="outlined"
              label="Skills"
              type="text"
              fullWidth
              required
              onChange={(e) => setSkills(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={interests}
              variant="outlined"
              label="Interests"
              type="text"
              fullWidth
              required
              onChange={(e) => setInterests(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
      </Card>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="success"
          sx={{
            padding: 3,

            margin: 3,
            borderRadius: "3em",
          }}
          onClick={submitHandler}
        >
          Generate your CV
        </Button>
      </Box>
    </>
  );
};

export default InputForm;
