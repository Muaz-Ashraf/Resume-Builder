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
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

const InputForm = () => {
  const [formData, setFormData] = useState([{}]);
  const [errorStatement, setErrorStatement] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    linkedInError: "",
    titleError: "",
    descriptionError: "",
    locationError: "",
    // educationError: "",
    // experienceError: "",
    // skillsError: "",
    // interestsError: "",
  });
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
    setFormData({ ...formData, skills: updatedSkills });
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
    setFormData({ ...formData, interests: updatedInterests });
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
  function validationHandler(e) {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (e.target.id === "name") {
      if (e.target.value === "") {
        setErrorStatement({ nameError: "Please Enter a Name" });
      } else if (e.target.value.length < 2) {
        setErrorStatement({
          nameError: "Name should be more than one character",
        });
      } else if (!nameRegex.test(e.target.value)) {
        setErrorStatement({
          nameError: "Name should not contain special characters or numbers",
        });
      } else {
        setErrorStatement({ nameError: "" });
      }
    }
    if (e.target.id === "title") {
      if (e.target.value === "") {
        setErrorStatement({ titleError: "Please enter a Title" });
      } else {
        setErrorStatement({});
      }
    }
    if (e.target.id === "description") {
      if (e.target.value === "") {
        setErrorStatement({
          descriptionError: "Please enter a brief description",
        });
      } else {
        setErrorStatement({});
      }
    }
    if (e.target.id === "phone") {
      if (e.target.value === "") {
        setErrorStatement({ phoneError: "Please enter a Phone Number" });
      } else if (e.target.value.length < 11) {
        setErrorStatement({ phoneError: "Must be at least 11 digits" });
      } else {
        setErrorStatement({});
      }
    }
    if (e.target.id === "email") {
      if (e.target.value === "") {
        setErrorStatement({ emailError: "Please enter your Email" });
      } else if (!emailRegex.test(e.target.value)) {
        setErrorStatement({ emailError: "Please enter a valid Email" });
      } else {
        setErrorStatement({});
      }
    }
    if (e.target.id === "linkedIn") {
      if (e.target.value === "") {
        setErrorStatement({ linkedInError: "Please enter your linkedIn url" });
        console.log(errorStatement);
      } else {
        setErrorStatement({});
      }
    }
    if (e.target.id === "location") {
      if (e.target.value === "") {
        setErrorStatement({ locationError: "Please enter your location" });
      } else {
        setErrorStatement({});
      }
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    const { name, title, phone, linkedIn, description, email, location } =
      formData;
    const errors = {};

    if (!name) {
      errors.nameError = "Name is required";
    }

    if (!title) {
      errors.titleError = "Title is required";
    }

    if (!phone) {
      errors.phoneError = "Phone number is required";
    }

    if (!linkedIn) {
      errors.linkedInError = "LinkedIn URL is required";
    }

    if (!description) {
      errors.descriptionError = "Description is required";
    }

    if (!email) {
      errors.emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.emailError = "Invalid email address";
    }

    if (!location) {
      errors.locationError = "Location is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrorStatement(errors);
      return;
    } else {
      setErrorStatement({});
    }

    navigate("./resume", { state: formData });
    console.log(formData);
  }

  return (
    <>
      <Box>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight={"bold"}
          mt={3}
          sx={{
            fontFamily: "Verdana",
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
                <Grid container key={index} spacing={3} p={4}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      key={index + "name"}
                      id="name"
                      name="name"
                      value={values.name}
                      variant="outlined"
                      label="Name"
                      type="text"
                      error={!!errorStatement.nameError}
                      helperText={errorStatement.nameError}
                      onBlur={(e) => validationHandler(e)}
                      fullWidth
                      required
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "name", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      key={index + "title"}
                      name="title"
                      id="title"
                      value={values.title}
                      variant="outlined"
                      label="Title"
                      type="text"
                      error={!!errorStatement.titleError}
                      helperText={errorStatement.titleError}
                      fullWidth
                      required
                      onBlur={(e) => validationHandler(e)}
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "title", e.target.value)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputLabel htmlFor="image">Upload your Picture</InputLabel>
                    <Input
                      key={index + "img"}
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
                      key={index + "de"}
                      id="description"
                      name="description"
                      value={values.description}
                      error={!!errorStatement.descriptionError}
                      helperText={errorStatement.descriptionError}
                      variant="outlined"
                      label={"Describe yourself and your achievements briefly"}
                      type="text"
                      multiline
                      fullWidth
                      required
                      onBlur={(e) => validationHandler(e)}
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
                      key={index + "email"}
                      name="email"
                      id="email"
                      value={values.email}
                      error={!!errorStatement.emailError}
                      helperText={errorStatement.emailError}
                      type="email"
                      variant="outlined"
                      label="Email"
                      fullWidth
                      required
                      onBlur={(e) => {
                        validationHandler(e);
                      }}
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "email", e.target.value)
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      key={index + "p"}
                      name="phone"
                      id="phone"
                      variant="outlined"
                      value={values.phone}
                      error={!!errorStatement.phoneError}
                      helperText={errorStatement.phoneError}
                      label="Phone Number"
                      type="number"
                      fullWidth
                      required
                      onBlur={(e) => {
                        validationHandler(e);
                      }}
                      onChange={(e) =>
                        handlePersonalInfoChange(index, "phone", e.target.value)
                      }
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      name="location"
                      id="location"
                      variant="outlined"
                      label="Location"
                      value={values.location}
                      error={!!errorStatement.locationError}
                      helperText={errorStatement.locationError}
                      type="text"
                      fullWidth
                      required
                      onBlur={(e) => {
                        validationHandler(e);
                      }}
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
                      id="linkedIn"
                      variant="outlined"
                      label="LinkedIn ID url"
                      value={values.linkedIn}
                      error={!!errorStatement.linkedInError}
                      helperText={errorStatement.linkedInError}
                      type="text"
                      fullWidth
                      required
                      onBlur={(e) => {
                        validationHandler(e);
                      }}
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
                  <Grid container key={index} spacing={3} ml={0.5} p={1.5}>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        key={index + "degree"}
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
                        key={index + "university"}
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
                        key={index + "Ye"}
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
                        key={index + "yc"}
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
                    {educationDetails.length > 1 && (
                      <Grid item xs={12} sm={2}>
                        <Button
                          variant="contained"
                          onClick={() => removeEducationHandler(index)}
                        >
                          <RemoveIcon />
                        </Button>
                      </Grid>
                    )}
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
                Add Education Details
                <AddIcon />
              </Button>
            </Box>

            <SectionDivider>Professional Experience</SectionDivider>
            {experience.map((values, index) => {
              return (
                <>
                  <Grid container key={index} spacing={3} ml={1} p={1.5}>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        key={index + "role"}
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
                        key={index + "company"}
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
                        key={index + "years"}
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
                    {experience.length > 1 && (
                      <Grid item xs={12} sm={3}>
                        <Button
                          variant="contained"
                          onClick={removeExperienceHandler}
                        >
                          <RemoveIcon />
                        </Button>
                      </Grid>
                    )}
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
                Add Experience Details
                <AddIcon />
              </Button>
            </Box>

            <SectionDivider>Skills</SectionDivider>

            {skills.map((items, index) => {
              return (
                <>
                  <Stack spacing={3} m={2} ml={2} pl={2}>
                    <Stack direction={"row"}>
                      <TextField
                        mt={2}
                        key={index}
                        name="skills"
                        value={items}
                        variant="outlined"
                        label="Skills"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) =>
                          handleSkillChange(index, e.target.value)
                        }
                      ></TextField>
                      {skills.length > 1 && (
                        <Button
                          variant="contained"
                          onClick={() => {
                            removeSkillHandler(index);
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                      )}
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
                Add Skill
                <AddIcon />
              </Button>
            </Box>
            <SectionDivider>Interests</SectionDivider>

            {interests.map((items, index) => {
              return (
                <>
                  <Stack spacing={3} m={2} ml={2} pl={2}>
                    <Stack direction={"row"}>
                      <TextField
                        mt={2}
                        key={index}
                        name="interests"
                        value={items}
                        variant="outlined"
                        label="Interests"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) =>
                          handleInterestChange(index, e.target.value)
                        }
                      ></TextField>
                      {interests.length > 1 && (
                        <Button
                          variant="contained"
                          onClick={() => {
                            removeInterestHandler(index);
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                      )}
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
                Add Interest
                <AddIcon />
              </Button>
            </Box>
          </Grid>
        </CustomCard>

        <Box textAlign="center">
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{
              padding: 3,

              mt: 3,
              mb: 3,
              borderRadius: "3em",
            }}
            onClick={submitHandler}
          >
            <Typography variant="h6" fontWeight="bold">
              Generate CV
              <SendIcon />
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default InputForm;
