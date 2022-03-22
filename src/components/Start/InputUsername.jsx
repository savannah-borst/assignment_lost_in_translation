import * as React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import KeyboardIcon from "@mui/icons-material/Keyboard";

//import { useState } from "react";

function InputUsername() {
  //const [ user, setUser ] = useState();

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        className="username-content"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 2
        }}
      >
        <KeyboardIcon />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="What's your name?" />
        <button className="username-button" type="submit">
          <ArrowForwardIcon />
        </button>

        <div className="username-border"></div>
      </Box>
      
    </Container>
  );
}

export default InputUsername;
