import * as React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import introLogo from "../../assets/images/header-icons/Logo.png";

function Intro() {
  return (
    <div className="intro" style={{ width: "100%" }}>
      <Container maxWidth="lg">
        <img className="intro-logo" src={introLogo} alt="Intro Logo" />
        <Box className="intro-content" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1 className="intro-heading">Lost In Translation</h1>
            <p className="intro-text">Get Started</p>
        </Box> 
      </Container>
    </div>
  );
}

export default Intro;
