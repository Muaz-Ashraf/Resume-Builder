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
import { Stack } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";

const InputForm = () => {
  const [personalInfo, setPersonalInfo] = useState([
    {
      name: "",
      title: "",
      email: "",
      description: "",
      image: "",
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
    {
      role: "",
      company: "",
      yearsCompany: "",
    },
  ]);

  const [skills, setSkills] = useState([""]);
  const [interests, setInterests] = useState([""]);

  const navigate = useNavigate();

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

  const addSkillHandler = () => {
    const newSkill = "";
    setSkills([...skills, newSkill]);
  };
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
    setFormData({ ...formData, skills: skills });
  };

  const addInterestHandler = () => {
    const newInterest = "";
    setInterests([...interests, newInterest]);
  };
  const removeEducationHandler = (index) => {
    educationDetails.splice(index, 1);
    setEducationDetails([...educationDetails]);
  };
  const removeExperienceHandler = (index) => {
    experience.splice(index, 1);
    setExperience([...experience]);
  };
  const removeSkillHandler = (index) => {
    skills.splice(index, 1);
    setSkills([...skills]);
  };
  const removeInterestHandler = (index) => {
    interests.splice(index, 1);
    setInterests([...interests]);
  };
  const handleInterestChange = (index, value) => {
    const updatedInterests = [...interests];
    updatedInterests[index] = value;
    setInterests(updatedInterests);
    setFormData({ ...formData, interests: interests });
  };

  const handlePersonalInfoChange = (index, field, value) => {
    const updatedPersonalInfo = [...personalInfo];
    updatedPersonalInfo[index] = {
      ...updatedPersonalInfo[index],
      [field]: value,
    };
    setPersonalInfo(updatedPersonalInfo);
    setFormData(...updatedPersonalInfo);
  };

  const handleEducationDetailChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index] = {
      ...updatedEducationDetails[index],
      [field]: value,
    };
    setEducationDetails(updatedEducationDetails);
    setFormData({ ...formData, education: updatedEducationDetails });
  };
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };
    setExperience(updatedExperience);
    setFormData({ ...formData, experience: updatedExperience });
  };
  const [formData, setFormData] = useState([{}]);

  function submitHandler(e) {
    e.preventDefault();

    console.log(formData);
    navigate("./resume", { state: formData });
  }
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
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="name"
                      value={values.name}
                      variant="outlined"
                      label="Name"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "name", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="title"
                      id="title"
                      value={values.title}
                      variant="outlined"
                      label="Title"
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "title", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputLabel htmlFor="image">Upload your Picture</InputLabel>
                    <Input
                      name="Image"
                      accept="image/*"
                      type="file"
                      id="image"
                      onChange={(event) => {
                        const selectedImage = event.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(selectedImage);
                        reader.onload = () => {
                          handlePersonalInfoChange(
                            index,
                            "image",
                            reader.result
                          );
                        };
                      }}
                    ></Input>
                  </Grid>
                  <Grid item xs={12} sm={12}>
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
                      onChange={(e) =>
                        handlePersonalInfoChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      name="email"
                      value={values.email}
                      type="email"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "email", e.target.value)
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      name="phone"
                      variant="outlined"
                      value={values.phone}
                      label="Phone Number"
                      type="number"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "phone", e.target.value)
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      name="location"
                      variant="outlined"
                      label="Location"
                      value={values.location}
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(
                          index,
                          "location",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      name="LinkedIn"
                      variant="outlined"
                      label="LinkedIn ID url"
                      value={values.linkedIn}
                      type="text"
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(
                          index,
                          "linkedIn",
                          e.target.value
                        )
                      }
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <SectionDivider>Education</SectionDivider>

            {educationDetails.map((values, index) => {
              return (
                <>
                  <Typography variant="h6">{`${index + 1}.`}</Typography>

                  <Grid container key={index} spacing={3} mt={3} p={4}>
                    <Grid item xs={12} sm={3}>
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
                    <Grid item xs={12} sm={3}>
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
                    <Grid item xs={12} sm={2}>
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
                    <Grid item xs={12} sm={2}>
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
                    <Grid item xs={12} sm={2}>
                      <Button
                        variant="contained"
                        onClick={removeEducationHandler}
                      >
                        <RemoveIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </>
              );
            })}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button variant="contained" onClick={addEducationHandler}>
                Add Education Details +
              </Button>
            </Box>

            <SectionDivider>Professional Experience</SectionDivider>
            {experience.map((values, index) => {
              return (
                <>
                  <Typography variant="h6">{`${index + 1}.`}</Typography>
                  <Grid container key={index} m={3} spacing={3} p={4}>
                    <Grid item xs={12} sm={3}>
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
                    <Grid item xs={12} sm={3}>
                      <TextField
                        name="company"
                        value={values.company}
                        variant="outlined"
                        label="Company Name"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={3}>
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
                    <Grid item xs={12} sm={3}>
                      <Button
                        variant="contained"
                        onClick={removeExperienceHandler}
                      >
                        <RemoveIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </>
              );
            })}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button variant="contained" onClick={addExperienceHandler}>
                Add Experience Details +
              </Button>
            </Box>

            <SectionDivider>Skills</SectionDivider>

            {skills.map((items, index) => {
              return (
                <>
                  <Stack spacing={3} m={2} ml={2}>
                    <Stack direction={"row"}>
                      <TextField
                        mt={2}
                        key={index}
                        name="skills"
                        value={items.skills}
                        variant="outlined"
                        label="Skills"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) =>
                          handleSkillChange(index, e.target.value)
                        }
                      ></TextField>
                      <Button variant="contained" onClick={removeSkillHandler}>
                        <RemoveIcon />
                      </Button>
                    </Stack>
                  </Stack>
                </>
              );
            })}

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button variant="contained" onClick={addSkillHandler}>
                Add Skill +
              </Button>
            </Box>
            <SectionDivider>Interests</SectionDivider>

            {interests.map((items, index) => {
              return (
                <>
                  <Stack spacing={3} m={2} ml={2}>
                    <Stack direction={"row"} spacing={3}>
                      <TextField
                        mt={2}
                        key={index}
                        name="interests"
                        value={items.interests}
                        variant="outlined"
                        label="Interests"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) =>
                          handleInterestChange(index, e.target.value)
                        }
                      ></TextField>

                      <Button
                        variant="contained"
                        onClick={removeInterestHandler}
                      >
                        <RemoveIcon />
                      </Button>
                    </Stack>
                  </Stack>
                </>
              );
            })}

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={5}
            >
              <Button variant="contained" onClick={addInterestHandler}>
                Add Interest +
              </Button>
            </Box>
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
