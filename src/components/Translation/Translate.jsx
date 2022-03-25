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
import { useState }  from "react";
import { useDispatch } from 'react-redux';
import { loadTranslationAction } from "../../store/actions/translationActions";


function InputTranslate() {
    //with help from https://github.com/El-Maghawry/Lost-In-Translation/tree/lostInTranslation/src
    const dispatch = useDispatch();
    const [translation, setTranslation] = useState('');
    const [showSigns, setShowSigns] = useState(false);
    const letters = translation.split("");
    const list = [];
    

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === ' '){

      } else {
        list.push(<img key={i} src={`./signs/${letters[i]}.png`} alt={letters[i]} />)
      }
    }

    letters.forEach((letter) => {
        if (letter === ' ') {

        } else {
          list.push(<img key={letter} src={`./signs/${letter}.png`} alt={letter} /> )
        } 
      })

    const onInputChange = (e) => {
        setShowSigns(state =>  false);
        setTranslation(e.target.value);
    }

    const onFormSubmit = event => {
        event.preventDefault()
        setShowSigns(state => true);
        dispatch(loadTranslationAction(translation));
    }

  return (
      <div className="translate" style={{ width: "100% "}}>
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
        <Card sx={{ flexGrow: 1 }} className="card-container">
          <CardContent>
            <TextField
            placeholder="Please enter your translation"
            type="text"
            onChange={onInputChange}
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
            />
          </CardContent>
          <div className="card-border"></div>
        </Card>
      </Box>
      <Box
      className="output-translate"
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Card sx={{ flexGrow: 1 }} className="card-container">
          <CardContent>
            { showSigns && 
            <div>
              {list}
              </div>
              }
          </CardContent>
          <div className="card-border"></div>
        </Card>
      </Box>
    </Container>
      </div>
    
  );
}

export default InputTranslate;
