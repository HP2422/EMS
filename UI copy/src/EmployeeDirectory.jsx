/* globals React */
import React from "react";
import graphqlFetch from "./components/graphqlFetch.js";
import EmployeeTable from "./EmployeeTable.jsx";
import EmployeeSearch from "./EmployeeSearch.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeFilter from "./EmployeeFilter.jsx";
import { FormLabel } from 'react-bootstrap';

export default class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = { employee: [] };
    this.a_Employee = this.a_Employee.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const employeeType = window.location.hash.split("?eType=")[1];
    debugger;
    const query = `query EmployeeList($employeeType: String) {
            employeeList(employeeType: $employeeType) {
              id
              firstName
              lastName
              title
              employeeType
              department
              dateOfJoining
              currentStatus
              age
            }
          }`;

    const response = await graphqlFetch(query);
    if (employeeType === "") {
      this.setState({ employee: response.employeeList });
    } else {
      const filteredData = response.employeeList.filter((obj) => {
        if (obj.employeeType === employeeType) {
          return obj;
        }
      });
      this.setState({ employee: filteredData });
    }
  }

  async a_Employee(employee) {
    const query = `mutation emplyeeAdd($employee: EmployeeInputs!) {
            emplyeeAdd(employee: $employee) {
              firstName
              lastName
              age
              title
              department
              employeeType
            }
          }`;
    let data = await graphqlFetch(query, { employee });
    if (data) {
      this.loadData();
    }
  }
  render() {
    console.log(this.state.employee);
    console.log("this.state.employee");
    return (
      <React.Fragment>
        <EmployeeFilter />
        <h3><FormLabel>Employee Directory is Called.</FormLabel></h3>
        <EmployeeSearch />
        <EmployeeTable employees={this.state.employee} />
        <EmployeeCreate a_Employee={this.a_Employee} />
      </React.Fragment>
    );
  }
}
