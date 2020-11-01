import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header/header";
import { Footer } from "./Footer/index.js";
import { Main } from "./Main/main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
