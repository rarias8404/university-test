import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";
import * as studentActions from '../redux/actions/studentActions';

class MainPage extends Component {
  componentDidMount() {
    const {getStudents} = this.props;
    getStudents();
  }

  render() {
    const {students} = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/students" component={() => <StudentsPage students={students} />} />
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
  getStudents: () => { dispatch(studentActions.getStudents()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));