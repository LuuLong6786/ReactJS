import React, { Component } from "react";
import Main from "./StaffList/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "../src/App.css";
import { Provider } from "react-redux";
import { configureStore } from "../src/redux/configureStore";
const store = configureStore();

class App extends Component {
  render() {
    return (
      //Wrap xung quanh bằng Provider//
      <Provider store={store}>
        <BrowserRouter>
          <div className="App ">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
