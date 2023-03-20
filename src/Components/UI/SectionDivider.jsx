import { Typography } from "@mui/material";
import React from "react";

const SectionDivider = (props) => {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      width={"100%"}
      textAlign="center"
      m={3}
      sx={{
        fontFamily: "Palatino",

        border: "2px black solid",
        padding: "0.5em",
        backgroundColor: "#8bf1f2",
        backgroundImage:
          "linear-gradient(90deg, #8bf1f2 0%, #e5bff0 50%, #d176d0 100%)",
        borderRadius: "2em",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default SectionDivider;
