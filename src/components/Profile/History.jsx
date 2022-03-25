import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Container, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearTranslation } from "../../store/actions/translationActions";

function History() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let historyArray = []
   

    for (let i = 0; i < user.translations.length && i < 10; i++) {
            historyArray.push({id: i, name: user.translations[i]})
  }

 const translationItem =  historyArray.map((historyArray) => ( 
    <CardContent key={historyArray.id}>{historyArray.name}</CardContent>
 ));

 const deleteTranslations = event => {
  event.preventDefault()
  dispatch(clearTranslation());
}

  return (
    <div className="history" style={{ width: "100% " }}>
      <Container maxWidth="lg">
      <Button variant="contained" className="normal-button" type="submit" onClick={deleteTranslations}>Delete translations</Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Card sx={{ flexGrow: 1 }} className="card-container">
                {translationItem}
                <div className="card-border"></div>
              </Card>
            </Box>
      </Container>
    </div>
  );
}

export default History;
