import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from 'reactstrap';
import {Link} from "react-router-dom";
import StudentsTable from "./StudentsTable";
import Spinner from "../common/Spinner";

const columns = ['Name', 'Age', 'Sex', 'Email', 'Birthdate', 'Group', 'Birthplace'];

class StudentsPage extends Component {

  render() {
    let {students, groups, cities} = this.props;
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Students</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Students</h3>
            <hr/>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-10">
            <Card>
              <CardHeader className="bg-info text-white">
                Students List
                <div className="card-header-actions">
                  <button className="card-header-action btn">Reload <i className="fa fa-refresh fa-lg" /></button>
                  <button className="card-header-action btn">Add <i className="fa fa-plus-square fa-lg" /></button>
                </div>
              </CardHeader>
              <CardBody>
                {students.loading ?
                  <Spinner/> :
                  <StudentsTable
                    columns={columns}
                    students={students}
                    groups={groups.groups}
                    cities={cities.cities}
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
  return {...state};
}

export default connect(mapStateToProps)(StudentsPage);