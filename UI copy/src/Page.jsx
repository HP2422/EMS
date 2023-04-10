import React from "react";
import Contents from "./Contents.jsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBar from "./MenuBar.jsx";
function NavBar() {
  return (
    // <nav>
    //   <a href="/">Home</a>
    //   {" | "}
    //   <a href="/#/employeeDirectory">Employee Directory Page</a>
    //   {" | "}
    //   <a href="/#/employeeAdd">Add Employee</a>
    //   {" | "}
    //   <a href="/#/employeeReport">Report</a>
    //   {" | "}
    // </nav>
    <MenuBar />
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
      <br/><br/><br/>
      <Contents />
      <Footer />
    </div>
  );
}


// import React from "react";
// import Contents from "./Contents.jsx";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

// function NavBar() {
//   return (
//     // <nav>
//     //   
//     //   {" | "}
//     //   <a href="/#/employeeDirectory">Employee Directory Page</a>
//     //   {" | "}
//     //   <a href="/#/employeeAdd">Add Employee</a>
//     //   {" | "}
//     //   <a href="/#/employeeReport">Report</a>
//     //   {" | "}
//     // </nav>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
            
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  href="/">
//           Home
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} href="/#/employeeDirectory">
//           Employee Directory Page
//           </Typography>
          
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }