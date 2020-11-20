import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/students" component={StudentsPage} />
          <Redirect to="/students" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPage;