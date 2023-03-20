import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [yearCompleted, setYearCompleted] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const labelStyle = { fontSize: "0.8em" };

  const submitHandler = (e) => {
    const formData = {
      name,
      title,
      email,
      description,
      phone,
      location,
      linkedIn,
      degree,
      university,
      yearCompleted,
      experience,
      skills,
      interests,
    };
    setFormData(formData);
    navigate("./resume", { state: formData });
  };
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          textAlign="center"
          mt={3}
          sx={{
            fontFamily: "Palatino",
            color: "red",
          }}
        >
          Resume Builder
        </Typography>
        <Typography variant="h6" fontWeight="bold" textAlign="center" m={5}>
          Enter your details to generate a complete Resume
        </Typography>
        <Card
          variant="outlined"
          sx={{
            padding: 7,
            display: "flex",
            flexDirection: "column",

            backgroundColor: "white",

            borderRadius: "2em",
            margin: 2,
            backgroundColor: "#f1f2fa",
            backgroundImage:
              "linear-gradient(55deg, #f1f2fa 0%, #ffedfe 46%, #faf5f2 100%)",
          }}
        >
          <Grid container spacing={3} component="form">
            <Grid item xs={12} sm={6} style={{ order: 1 }}>
              <Typography variant="h5" fontWeight="bold">
                Personal Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 2 }}>
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
            <Grid item xs={12} sm={6} style={{ order: 3 }}>
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
            <Grid item xs={12} sm={6} style={{ order: 4 }}>
              <TextField
                id="description"
                value={description}
                variant="filled"
                label={"Describe yourself and your achievements briefly"}
                InputLabelProps={{ style: labelStyle }}
                type="text"
                multiline
                fullWidth
                required
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6} style={{ order: 5 }}>
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

            <Grid item xs={12} sm={6} style={{ order: 6 }}>
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

            <Grid item xs={12} sm={6} style={{ order: 7 }}>
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

            <Grid item xs={12} sm={6} style={{ order: 8 }}>
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
            <Grid item xs={12} sm={6} style={{ order: 9 }}>
              <Typography variant="h5" fontWeight="bold">
                Education
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 10 }}>
              <TextField
                variant="outlined"
                value={degree}
                label="Degree"
                type="text"
                fullWidth
                required
                onChange={(e) => setDegree(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 11 }}>
              <TextField
                variant="outlined"
                value={university}
                label="University"
                type="text"
                fullWidth
                required
                onChange={(e) => setUniversity(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 12 }}>
              <TextField
                variant="outlined"
                value={yearCompleted}
                label="Year of Completion"
                type="text"
                fullWidth
                required
                onChange={(e) => setYearCompleted(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 13 }}>
              <Typography variant="h5" fontWeight="bold">
                Professional Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ order: 14 }}>
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
            <Grid item xs={12} sm={6} style={{ order: 15 }}>
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
            <Grid item xs={12} sm={6} style={{ order: 16 }}>
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
            <Typography variant="h6" fontWeight="bold">
              Generate your CV
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default InputForm;
