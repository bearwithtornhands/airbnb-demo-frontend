import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />

          <Route path="/" exact component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
