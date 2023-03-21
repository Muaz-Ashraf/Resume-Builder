import { Card, Grid, Typography, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomCard from "./UI/CustomCard";

const Resume = () => {
  const location = useLocation();
  const formData = location.state;
  return (
    <>
      <CustomCard>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-around"
          alignItems="center"
        >
          <img
            src={formData.image}
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",

              marginLeft: "5rem",
              marginRight: "5rem",
            }}
          />

          <Stack ml={5}>
            <Typography
              variant="h3"
              sx={{
                color: "blue",
              }}
              textAlign="left"
            >
              {formData.name}
            </Typography>

            <Typography variant="h5" textAlign="left">
              {formData.title}
            </Typography>
            <Typography variant="body1" textAlign="left" mt={3}>
              {formData.description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          mt={3}
          justifyContent="space-evenly"
          bgcolor="royalblue"
          color="white"
          p={1}
        >
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <EmailIcon />
            <Typography variant="h6">{formData.email}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <PhoneIphoneIcon />
            <Typography variant="h6">{formData.phone}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <LocationOnIcon />
            <Typography variant="h6">{formData.location}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <LinkedInIcon />
            <Typography variant="h6">{formData.linkedIn}</Typography>
          </Stack>
        </Stack>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <Stack mt={3} key={"1"}>
              <Typography variant="h4" fontWeight="bold" mb={3}>
                EDUCATION
              </Typography>
              {formData.education.map((item, index) => {
                return (
                  <>
                    <Typography variant="h6" fontWeight="bold" key={index + 3}>
                      {item.degree}
                    </Typography>
                    <Typography variant="h6" key={index + 4}>
                      {item.university}
                    </Typography>
                    <Typography variant="body1" key={index + 5}>
                      {item.yearEnrolled} - {item.yearCompleted}
                    </Typography>
                  </>
                );
              })}
            </Stack>
            <Stack mt={10} key={"2"}>
              <Typography variant="h4" fontWeight="bold" mb={3}>
                WORK EXPERIENCE
              </Typography>

              {formData.experience.map((item, index) => {
                return (
                  <>
                    <Typography variant="h6" fontWeight="bold" key={index + 6}>
                      {item.role}
                    </Typography>
                    <Typography variant="h6" key={index + 7}>
                      {item.company}
                    </Typography>
                    <Typography variant="h6" key={index + 8}>
                      {item.yearsCompany} years
                    </Typography>
                  </>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h4" fontWeight="bold" mb={3} mt={3}>
              SKILLS
            </Typography>
            <Stack mt={3} direction={"row"}>
              {formData.skills.map((items, index) => {
                return (
                  <Typography
                    key={index + 1}
                    variant="h6"
                    textAlign="center"
                    sx={{
                      border: "1px solid black",
                      borderRadius: "0.5em",
                      padding: "0.4em",
                      bgcolor: "royalblue",
                      color: "white",
                      margin: "0.2em",
                    }}
                  >
                    {items}
                  </Typography>
                );
              })}
            </Stack>
            <Typography variant="h4" fontWeight="bold" mt={3}>
              INTERESTS
            </Typography>
            <Stack mt={10} direction={"row"} m="0.4em">
              {formData.interests.map((items, index) => {
                return (
                  <Typography
                    key={index + 2}
                    variant="h6"
                    textAlign="center"
                    sx={{
                      border: "1px solid black",
                      borderRadius: "0.5em",
                      padding: "0.4em",

                      margin: "0.2em",
                    }}
                  >
                    {items}
                  </Typography>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </CustomCard>
    </>
  );
};

export default Resume;
