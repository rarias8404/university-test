import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from "reactstrap";
import {Link} from "react-router-dom";
import GroupsTable from "./GroupsTable";
import Spinner from "../common/Spinner";
import * as groupActions from "../../redux/actions/groupActions";
import * as professorActions from "../../redux/actions/professorActions";

const columns = ['Group', 'Main Professor'];

class GroupsPage extends Component {
  constructor(props) {
    super(props);
    this.handleReload = this.handleReload.bind(this);
  }


  handleReload() {
    const {professors, getGroups, getProfessors} = this.props;
    getGroups();
    if (professors.loadError !== null) {
      getProfessors();
    }
  }

  render() {
    const {groups, professors} = this.props;
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Groups</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Groups</h3>
            <hr/>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-10">
            <Card>
              <CardHeader className="bg-info text-white">
                Groups List
                <div className="card-header-actions">
                  <button
                    className="card-header-action btn"
                    onClick={this.handleReload}
                  >Reload &nbsp;
                    <i className="fa fa-refresh fa-lg" />
                  </button>
                  <button className="card-header-action btn">Add &nbsp;<i className="fa fa-plus-square fa-lg" /></button>
                </div>
              </CardHeader>
              <CardBody>
                {groups.loading ?
                  <Spinner/> :
                  <GroupsTable
                    columns={columns}
                    groups={groups}
                    professors={professors.professors}
                  />
                }
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    professors: state.professors,
  };
}

const mapDispatchToProps = dispatch => ({
  getGroups: () => { dispatch(groupActions.getGroups()) },
  getProfessors: () => { dispatch(professorActions.getProfessors()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);