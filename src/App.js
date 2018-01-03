import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Experiences from "./components/experiences/Experiences";
import Homes from "./components/homes/Homes";
import Popular from "./components/popular/Popular";
import Destination from "./components/destination/Destination";

const Wrapper = styled.div`
  max-width: 982px;
  margin: auto;
  padding: 0 8px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Wrapper>
            <Category />
            <Experiences />
            <Homes />
            <Popular />
            <Destination />
          </Wrapper>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
