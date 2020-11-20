import './App.css';
import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <MainPage />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
