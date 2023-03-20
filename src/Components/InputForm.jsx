import React, { useState } from "react";
import {
  Box,
  Button,
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
  const [personalInfo, setPersonalInfo] = useState([
    {
      name: "",
      title: "",
      email: "",
      description: "",
      image: null,
      phone: "",
      location: "",
      linkedIn: "",
    },
  ]);

  const [educationDetails, setEducationDetails] = useState([
    {
      degree: "",
      university: "",
      yearEnrolled: "",
      yearCompleted: "",
    },
  ]);

  const [experience, setExperience] = useState([
    { role: "", company: "", yearsCompany: "" },
  ]);

  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {};

    setFormData(formData);
    navigate("./resume", { state: formData });
  };

  console.log(formData);

  const imageHandler = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  const addEducationHandler = () => {
    const educationForm = {
      degree: "",
      university: "",
      yearEnrolled: "",
      yearCompleted: "",
    };
    setEducationDetails([...educationDetails, educationForm]);
  };
  const addExperienceHandler = () => {
    const experienceForm = {
      role: "",
      company: "",
      yearsCompany: "",
    };
    setExperience([...experience, experienceForm]);
  };

  const handleEducationDetailChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index] = {
      ...updatedEducationDetails[index],
      [field]: value,
    };
    setEducationDetails(updatedEducationDetails);
  };
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };
    setExperience(updatedExperience);
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

            {personalInfo.map((values, index) => {
              return (
                <Grid container key={index} spacing={3} mt={3} p={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      value={values.name}
                      variant="outlined"
                      label="Name"
                      type="text"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="title"
                      id="title"
                      value={values.title}
                      variant="outlined"
                      label="Title"
                      type="text"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="image">Upload your Picture</InputLabel>
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
                      value={values.description}
                      variant="outlined"
                      label={"Describe yourself and your achievements briefly"}
                      type="text"
                      multiline
                      fullWidth
                      required
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      value={values.email}
                      type="email"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="phone"
                      variant="outlined"
                      value={values.phone}
                      label="Phone Number"
                      type="number"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="location"
                      variant="outlined"
                      label="Location"
                      value={values.location}
                      type="text"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="LinkedIn"
                      variant="outlined"
                      label="LinkedIn ID url"
                      value={values.linkedIn}
                      type="text"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <SectionDivider>Education</SectionDivider>

            {educationDetails.map((values, index) => {
              return (
                <Grid container key={index} spacing={3} mt={3} p={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="degree"
                      variant="outlined"
                      value={values.degree}
                      label="Degree"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleEducationDetailChange(
                          index,
                          "degree",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="university"
                      variant="outlined"
                      value={values.university}
                      label="University"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleEducationDetailChange(
                          index,
                          "university",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="Year of Enrollment"
                      variant="outlined"
                      value={values.yearEnrolled}
                      label="Year of Enrollment"
                      type="number"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleEducationDetailChange(
                          index,
                          "yearEnrolled",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="Year of Completion"
                      variant="outlined"
                      value={values.yearCompleted}
                      label="Year of Completion"
                      type="number"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleEducationDetailChange(
                          index,
                          "yearCompleted",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button onClick={addEducationHandler}>
                Add Education Details +
              </Button>
            </Box>

            <SectionDivider>Professional Experience</SectionDivider>
            {experience.map((values, index) => {
              return (
                <Grid container key={index} spacing={3} mt={3} p={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="Role"
                      value={values.role}
                      variant="outlined"
                      label="Role"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleExperienceChange(index, "role", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="company"
                      value={values.company}
                      variant="outlined"
                      label="Company Name"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="Years"
                      value={values.yearsCompany}
                      variant="outlined"
                      label="Years of Experience"
                      type="number"
                      fullWidth
                      required
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "yearsCompany",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button onClick={addExperienceHandler}>
                Add Experience Details +
              </Button>
            </Box>

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

              mt: 3,
              mb: 3,
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
