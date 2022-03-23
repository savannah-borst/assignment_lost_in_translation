import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

function InputTranslate() {

  return (
          <Container maxWidth="lg">
      <Box
      className="output-translate"
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Card sx={{ flexGrow: 1 }} className="card-container">
          <CardContent>
          </CardContent>
          <div className="card-border"></div>
        </Card>
      </Box>
    </Container>
  );
}

export default InputTranslate;
