import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";

const STUDENTS = [
  {
    "id": 1 ,
    "name": "Pepe",
    "age": 22,
    "sex": "male",
    "email": "pepe@test.net",
    "birthdate": "20/02/1998",
    "groupId": 1 ,
    "cityId": 2
  },
  {
    "id": 2 ,
    "name": "Juan",
    "age": 21,
    "sex": "male",
    "email": "juan@test.net",
    "birthdate": "15/04/1999",
    "groupId": 1 ,
    "cityId": 1
  },
  {
    "id": 3 ,
    "name": "Jane",
    "age": 22,
    "sex": "female",
    "email": "jane@test.net",
    "birthdate": "03/05/1998",
    "groupId": 2 ,
    "cityId": 3
  },
  {
    "id": 4 ,
    "name": "John",
    "age": 23,
    "sex": "male",
    "email": "john@test.net",
    "birthdate": "20/10/1997",
    "groupId": 3 ,
    "cityId": 1
  }
];

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/students" component={() => <StudentsPage students={STUDENTS} />} />
          <Redirect to="/students" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainPage;