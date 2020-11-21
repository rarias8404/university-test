import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";
import GroupsPage from "./Groups/GroupsPage";
import * as studentActions from '../redux/actions/studentActions';
import * as groupActions from '../redux/actions/groupActions';
import * as cityActions from '../redux/actions/cityActions';
import * as professorActions from '../redux/actions/professorActions';

class MainPage extends Component {
  componentDidMount() {
    const {getStudents, getGroups, getCities, getProfessors} = this.props;
    getStudents();
    getGroups();
    getCities();
    getProfessors();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/students" component={StudentsPage} />
          <Route exact path="/groups" component={GroupsPage} />
          <Redirect to="/students" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getStudents: () => { dispatch(studentActions.getStudents()) },
  getGroups: () => { dispatch(groupActions.getGroups()) },
  getCities: () => { dispatch(cityActions.getCities()) },
  getProfessors: () => { dispatch(professorActions.getProfessors()) },
});

export default withRouter(connect(null, mapDispatchToProps)(MainPage));