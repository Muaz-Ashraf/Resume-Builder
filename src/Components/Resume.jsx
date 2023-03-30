import { Card, Grid, Typography, Divider, Avatar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomCard from "./UI/CustomCard";
import "typeface-ubuntu";

const Resume = () => {
  const location = useLocation();
  const formData = location.state;
  return (
    <>
      <Box m={3}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Avatar
            src={formData.image}
            sx={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
              marginLeft: "5rem",
              marginRight: "2rem",
            }}
            // style={{
            //   borderRadius: "50%",
            //   height:'100%',
            //   width:'100%',
            //   marginLeft: "5rem",
            //   marginRight: "2rem",
            // }}
          />

          <Stack>
            <Typography
              variant="h3"
              sx={{
                color: "#002D62",
              }}
              textAlign="left"
              fontFamily={"Ubuntu"}
            >
              {formData.name}
            </Typography>

            <Typography variant="h5" textAlign="left" fontFamily={"Ubuntu"}>
              {formData.title}
            </Typography>
            <Typography
              variant="body1"
              textAlign="justify"
              mt={3}
              mr={3}
              fontFamily={"Ubuntu"}
            >
              {formData.description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          mt={3}
          justifyContent="space-evenly"
          bgcolor="#002D62"
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
            <Typography variant="h6" fontFamily={"Ubuntu"}>
              {formData.email}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <PhoneIphoneIcon />
            <Typography variant="h6" fontFamily={"Ubuntu"}>
              {formData.phone}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <LocationOnIcon />
            <Typography variant="h6" fontFamily={"Ubuntu"}>
              {formData.location}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <LinkedInIcon />
            <Typography variant="h6" fontFamily={"Ubuntu"}>
              {formData.linkedIn}
            </Typography>
          </Stack>
        </Stack>
        <Grid container p={3}>
          <Grid item xs={6} sm={6} pl={2}>
            <Stack mt={3} key={"1"}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#002D62"
                fontFamily={"Ubuntu"}
              >
                EDUCATION
              </Typography>
              {formData.education.map((item, index) => {
                return (
                  <>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      key={index + 3}
                      fontFamily={"Ubuntu"}
                      mt={3}
                    >
                      {item.degree}
                    </Typography>
                    <Typography
                      variant="h6"
                      key={index + 4}
                      fontFamily={"Ubuntu"}
                    >
                      {item.university}
                    </Typography>
                    <Typography
                      variant="body1"
                      key={index + 5}
                      fontStyle="italic"
                      fontFamily={"Ubuntu"}
                    >
                      {item.yearEnrolled} - {item.yearCompleted}
                    </Typography>
                  </>
                );
              })}
            </Stack>
            <Stack mt={5} key={"2"}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#002D62"
                fontFamily={"Ubuntu"}
              >
                WORK EXPERIENCE
              </Typography>

              {formData.experience.map((item, index) => {
                return (
                  <>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      key={index + 6}
                      fontFamily={"Ubuntu"}
                      mt={3}
                    >
                      {item.role}
                    </Typography>
                    <Typography
                      variant="h6"
                      key={index + 7}
                      fontFamily={"Ubuntu"}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      key={index + 8}
                      fontFamily={"Ubuntu"}
                    >
                      {item.yearsCompany} years
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="#002D62"
                      fontFamily={"Ubuntu"}
                    >
                      Tasks/Achievements
                    </Typography>
                    <Typography
                      component={"li"}
                      variant="body1"
                      key={index + 9}
                      fontFamily={"Ubuntu"}
                      textAlign="justify"
                      flexWrap="wrap"
                      mr={10}
                      sx={{
                        listStyle: "disc",
                      }}
                    >
                      {item.jd}
                    </Typography>
                  </>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={3}
              color="#002D62"
              fontFamily={"Ubuntu"}
            >
              SKILLS
            </Typography>
            <Stack
              mt={3}
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
            >
              {formData.skills.map((items, index) => {
                return (
                  <Typography
                    fontFamily={"Ubuntu"}
                    key={index + 1}
                    variant="h6"
                    textAlign="center"
                    whiteSpace={"nowrap"}
                    sx={{
                      border: "1px solid black",
                      borderRadius: "0.5em",
                      padding: "0.4em",
                      bgcolor: "#002D62",
                      color: "white",
                      margin: "0.2em",
                    }}
                  >
                    {items}
                  </Typography>
                );
              })}
            </Stack>
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={4}
              color="#002D62"
              fontFamily={"Ubuntu"}
            >
              ACADEMIC PROJECTS
            </Typography>
            <Stack mt={2} direction="column" flexWrap="wrap">
              {formData.academicProjects.map((items, index) => {
                return (
                  <Typography
                    fontFamily={"Ubuntu"}
                    key={index + 2}
                    variant="h6"
                    textAlign="left"
                  >
                    {items}
                  </Typography>
                );
              })}
            </Stack>
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={5}
              color="#002D62"
              fontFamily={"Ubuntu"}
            >
              CERTIFICATIONS
            </Typography>
            <Stack mt={2} direction="column" flexWrap="wrap">
              {formData.certifications.map((items, index) => {
                return (
                  <Typography
                    mt={0.5}
                    fontFamily={"Ubuntu"}
                    key={index + 3}
                    variant="h6"
                    textAlign="left"
                  >
                    {items}
                  </Typography>
                );
              })}
            </Stack>
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={5}
              color="#002D62"
              fontFamily={"Ubuntu"}
            >
              INTERESTS
            </Typography>
            <Stack
              mt={3}
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
            >
              {formData.interests.map((items, index) => {
                return (
                  <Typography
                    fontFamily={"Ubuntu"}
                    key={index + 4}
                    variant="h6"
                    textAlign="center"
                    whiteSpace={"nowrap"}
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
      </Box>
    </>
  );
};

export default Resume;
