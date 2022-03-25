import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Container, Button } from "@mui/material";
import { useSelector } from "react-redux";

function History() {
  const user = useSelector((state) => state.session[0]);
  let historyArray = []
   

    for (let i = 0; i < user.translations.length; i++) {
            historyArray.push({id: i, name: user.translations[i]})
  }

 const translationItem =  historyArray.map((historyArray) => ( 
    <CardContent key={historyArray.id}>{historyArray.name}</CardContent>
 ));

  return (
    <div className="history" style={{ width: "100% " }}>
      <Container maxWidth="lg">
      <Button variant="contained" className="normal-button" type="submit">Delete translations</Button>
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
