import React from 'react';
import EmployeeCreate from './EmployeeCreate';
import graphqlFetch from '../src/components/graphqlFetch'
export default class EmployeeAddPage extends React.Component {
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
        alert("Employee Added successfully.");
        if (data) {
          this.loadData();
        }
      }
      render() {
    return (
        <div>
            <h2>This is a placeholder for the Employee Add Page</h2>
            <EmployeeCreate a_Employee={this.a_Employee} />
        </div>
    );
      }
}