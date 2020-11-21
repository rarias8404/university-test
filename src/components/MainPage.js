import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";
import * as studentActions from '../redux/actions/studentActions';
import * as groupActions from '../redux/actions/groupActions';

class MainPage extends Component {
  componentDidMount() {
    const {getStudents, getGroups} = this.props;
    getStudents();
    getGroups();
  }

  render() {
    const {students, groups} = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/students" component={() => <StudentsPage students={students} groups={groups}/>} />
          <Redirect to="/students" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {...state};
}

const mapDispatchToProps = dispatch => ({
  getStudents: () => { dispatch(studentActions.getStudents()) },
  getGroups: () => { dispatch(groupActions.getGroups()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));