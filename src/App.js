import './App.css';
import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
