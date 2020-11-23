import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "./common/Header";
import Footer from "./common/Footer";
import StudentsPage from "./Students/StudentsPage";
import GroupsPage from "./Groups/GroupsPage";
import GroupDetails from "./Groups/GroupDetails";
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
    const {groups, students, professors} = this.props;

    const GroupWithId = ({match}) => {
      const group = groups.groups.filter(group => parseInt(group.id, 10) === parseInt(match.params.groupId, 10))[0];
      return(
        <GroupDetails
          group={group}
          students={students.students.filter(student => parseInt(student.groupId, 10) === parseInt(match.params.groupId, 10))}
          professors={professors.professors.filter(professor => parseInt(professor.id, 10) === parseInt(group.professorId, 10))[0]}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/students" component={StudentsPage} />
          <Route exact path="/groups" component={GroupsPage} />
          <Route path="/groups/:groupId" component={GroupWithId} />
          <Redirect to="/students" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    groups: state.groups,
    professors: state.professors,
  };
}

const mapDispatchToProps = dispatch => ({
  getStudents: () => { dispatch(studentActions.getStudents()) },
  getGroups: () => { dispatch(groupActions.getGroups()) },
  getCities: () => { dispatch(cityActions.getCities()) },
  getProfessors: () => { dispatch(professorActions.getProfessors()) },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));