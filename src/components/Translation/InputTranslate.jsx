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
import useState  from "react";
import { useDispatch } from 'react-redux'
import { loginAttemptAction } from "../../store/actions/loginActions";

function InputTranslate() {

    // const dispatch = useDispatch()

    // const [count, setCount] = useState(0);

    // const handleChange = event => {
    //     setUser({
    //       ...user,
    //       [event.target.id]: event.target.value
    //     })
    // }

    // const onFormSubmit = event => {
    //   event.preventDefault()
    //   dispatch(loginAttemptAction(user))
    // }

    function saveTranslationToAPI() {
        
    }

    function displaySigns() {

    }

  return (
      <div className="input-translate" style={{ width: "100% "}}>
          <Container maxWidth="lg">
      <Box
        component="form"
        //onSubmit={onFormSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        autoComplete="off"
      >
        <Card sx={{ flexGrow: 1 }} className="card-container">
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
                    <button className="submit-button" type="submit">
                      <ArrowForwardIcon className="button-icon"/>
                    </button>
                  </InputAdornment>
                ),
              }}
              placeholder="Please enter your translation"
              //id={user}
              type="text" // check value
              //onChange={handleChange}
            />
          </CardContent>
          <div className="card-border"></div>
        </Card>
      </Box>
    </Container>
      </div>
    
  );
}

export default InputTranslate;
