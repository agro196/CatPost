import React from "react";
import { Description, Form, Header } from "./components";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Description />
      <Form />
    </div>
  );
};

export default App;
