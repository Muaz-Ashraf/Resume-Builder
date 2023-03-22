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
        padding: "0.3em",
        backgroundColor: "lightpink",

        borderRadius: "2em",
        fontSize: "2.5em",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default SectionDivider;
