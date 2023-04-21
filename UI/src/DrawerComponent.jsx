import React, { useState } from 'react'
import { Drawer, IconButton, ListItemText } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'

import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';

    const pages = ["Home", "Employee Directory", "Add Employee", "Report"];
    const DrawerComponent = () => {
      const [openDrawer, setOpenDrawer] = useState(false);
    
      return (
        <React.Fragment>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>
              {pages.map((page, index) => (
                <ListItemButton onClick={()=>setOpenDrawer(false)} key={index} >
                  <ListItemIcon>
                    <ListItemText >{page}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <IconButton
            sx={{ color: "white", marginLeft: "auto" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            
            <MenuIcon color="white" />
          </IconButton>
        </React.Fragment>
      );
    };

export default DrawerComponent