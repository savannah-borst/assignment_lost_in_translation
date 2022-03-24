import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loadUserAction } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

function InputUsername() {

    const [username, setUsername] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onInputChange = event => {
        setUsername(event.target.value);
    }

    const onFormSubmit = event => {
      event.preventDefault()
      //const user = {}
      dispatch(loadUserAction(username));
      navigate('/translation');
    }

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={onFormSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        autoComplete="off"
      >
        <Card sx={{ flexGrow: 1 }} className="input-container">
          <CardContent>
            <TextField
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      border: "none"
                    }
                }
            }}
              className="input-content"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardIcon />
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <button className="username-button" type="submit">
                      <ArrowForwardIcon className="button-icon"/>
                    </button>
                  </InputAdornment>
                ),
              }}
              placeholder="Please enter your name"
              id={'user'}
              type="text" // check value
              onChange={onInputChange}
            />
          </CardContent>
          <div className="input-border"></div>
        </Card>
      </Box>
    </Container>
  );
}

export default InputUsername;
