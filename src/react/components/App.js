import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header/";
import { Footer } from "./Footer/";
import { Main } from "./Main/";

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
