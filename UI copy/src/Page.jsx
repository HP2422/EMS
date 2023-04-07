import React from "react";
import Contents from "./Contents.jsx";


function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {" | "}
      <a href="/#/employeeDirectory">Employee Directory Page</a>
      {" | "}
      <a href="/#/employeeAdd">Add Employee</a>
      {" | "}
      <a href="/#/employeeReport">Report</a>
      {" | "}
    </nav>
  );
}
function Footer() {
    return (
      <small>
        <p className="text-center">
          Full source code available at this <a href="https://github.com/HP2422/EmployeeManagementSystem">GitHub repository</a> By Harshkumar Patel
        </p>
      </small>
    );
  }
export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
      <Footer />
    </div>
  );
}
