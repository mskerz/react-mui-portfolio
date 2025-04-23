import React from "react";
import { Alert, AlertTitle, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const DeprecatedAlert = () => {
  return (
    <Alert severity="error" variant="standard" sx={{ marginTop: 3 }}>
      <AlertTitle>Development Deprecated</AlertTitle>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <p>
          This project is no longer being developed, but you can visit my new website at
        </p>
        <Link style={{color: "white"}} to="https://wichasin-next-portfolio.vercel.app/"
          target="_blank" > Here</Link>
      </div>
    </Alert>
  );
};

export default DeprecatedAlert;
