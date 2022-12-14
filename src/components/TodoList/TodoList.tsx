import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Form from "../Form/Form";

function TodoList() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: "white", height: "100vh" }}>
          <Form />
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default TodoList;