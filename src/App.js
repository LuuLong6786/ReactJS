import React, { Component } from "react";
import Main from "./StaffList/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "../src/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
