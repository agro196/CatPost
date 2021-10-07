import { Box } from "@mui/system";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import BindCardForm from "./components/BindCardForm";
import CardList from "./components/CardList";
import ModalSuccess from "./components/modals";

const App = (): JSX.Element => {
  return (
    <Router>
      <Box padding="20px 20px" maxWidth="1300px">
        <CardList />
        <BindCardForm />
        <ModalSuccess />
      </Box>
    </Router>
  );
};

export default App;
