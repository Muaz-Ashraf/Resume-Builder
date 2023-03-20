import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomCard from "./UI/CustomCard";
import SectionDivider from "./UI/SectionDivider";

const InputForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [yearEnrolled, setYearEnrolled] = useState("");
  const [yearCompleted, setYearCompleted] = useState("");

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [yearsCompany, setYearsCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const labelStyle = { fontSize: "0.8em" };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      title,
      email,
      description,
      image,
      phone,
      location,
      linkedIn,
      degree,
      university,
      yearEnrolled,
      yearCompleted,
      role,
      company,
      yearsCompany,
      skills,
      interests,
    };
    setFormData(formData);
    const requiredFields = [
      "name",
      "title",
      "email",
      "description",
      "image",
      "phone",
      "location",
      "linkedIn",
      "degree",
      "university",
      "yearEnrolled",
      "yearCompleted",
      "role",
      "company",
      "yearsCompany",
      "skills",
      "interests",
    ];
    setFormData(formData);
    navigate("./resume", { state: formData });
    // const isFormValid = requiredFields.every((field) => formData[field]);
    // if (isFormValid) {
    //   setFormData(formData);
    //   navigate("./resume", { state: formData });
    // } else {
    //   alert("Please fill out all required fields.");
    // }
  };

  const imageHandler = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setImage(reader.result);
    };
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
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          m={5}
          sx={{
            fontFamily: "Palatino",
          }}
        >
          Enter your details to generate a complete Resume
        </Typography>
        <CustomCard>
          <Grid container spacing={3} component="form">
            <SectionDivider>Personal Information</SectionDivider>

            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                value={name}
                variant="outlined"
                label="Name"
                type="text"
                fullWidth
                required
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                id="title"
                value={title}
                variant="outlined"
                label="Title"
                type="text"
                fullWidth
                required
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="image">Upload an Image</InputLabel>
              <Input
                name="Image"
                accept="image/*"
                type="file"
                id="image"
                onChange={imageHandler}
              ></Input>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                rows={4}
                name="description"
                value={description}
                variant="outlined"
                label={"Describe yourself and your achievements briefly"}
                type="text"
                multiline
                fullWidth
                required
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
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
                name="phone"
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
                name="location"
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
                name="LinkedIn"
                variant="outlined"
                label="LinkedIn ID url"
                value={linkedIn}
                type="text"
                fullWidth
                required
                onChange={(e) => setLinkedIn(e.target.value)}
              ></TextField>
            </Grid>
            <SectionDivider>Education</SectionDivider>
            <Grid item xs={12} sm={6}>
              <TextField
                name="degree"
                variant="outlined"
                value={degree}
                label="Degree"
                type="text"
                fullWidth
                required
                onChange={(e) => setDegree(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="university"
                variant="outlined"
                value={university}
                label="University"
                type="text"
                fullWidth
                required
                onChange={(e) => setUniversity(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Year of Enrollment"
                variant="outlined"
                value={yearEnrolled}
                label="Year of Enrollment"
                type="text"
                fullWidth
                required
                onChange={(e) => setYearEnrolled(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Year of Completion"
                variant="outlined"
                value={yearCompleted}
                label="Year of Completion"
                type="text"
                fullWidth
                required
                onChange={(e) => setYearCompleted(e.target.value)}
              ></TextField>
            </Grid>
            <SectionDivider>Professional Experience</SectionDivider>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Role"
                value={role}
                variant="outlined"
                label="Role"
                type="text"
                fullWidth
                required
                onChange={(e) => setRole(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="company"
                value={company}
                variant="outlined"
                label="Company Name"
                type="text"
                fullWidth
                required
                onChange={(e) => setCompany(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Years"
                value={yearsCompany}
                variant="outlined"
                label="Years of Experience"
                type="number"
                fullWidth
                required
                onChange={(e) => setYearsCompany(e.target.value)}
              ></TextField>
            </Grid>
            <SectionDivider>Skills</SectionDivider>
            <Grid item xs={12} sm={6}>
              <TextField
                name="skills"
                value={skills}
                variant="outlined"
                label="Skills"
                type="text"
                fullWidth
                required
                onChange={(e) => setSkills(e.target.value)}
              ></TextField>
            </Grid>
            <SectionDivider>Interests</SectionDivider>
            <Grid item xs={12} sm={6}>
              <TextField
                name="interests"
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
        </CustomCard>

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
