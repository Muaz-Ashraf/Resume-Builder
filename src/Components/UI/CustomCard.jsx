import { Card } from "@mui/material";
import React from "react";

const CustomCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",

        borderRadius: "2em",
        margin: 2,
        backgroundColor: "#f1f2fa",
        backgroundImage:
          "linear-gradient(55deg, #f1f2fa 0%, #ffedfe 46%, #faf5f2 100%)",
      }}
    >
      {props.children}
    </Card>
  );
};

export default CustomCard;
