import * as React from 'react';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
  return( <div>
    <Stack className="Main">
        <Stack>
        <Box sx={{height:'93vh', color:'#03103F',border:"1px solid #03103F"}}>
        <Stack width={"100%"} alignItems={"center"} >
      <Stack sx={{padding:'0',margin:'0',mt:4}}>
      <NavLink to={"/adminDashboard"} style={{textDecoration:"none", fontStyle:"normal"}}>
      <ListItem sx={{width:"260px"}}>
            <ListItemText primary="Dashboard" sx={{ml:2}}/>
        </ListItem>

    </NavLink>
    

    <NavLink to={"/addQuiz"} style={{textDecoration:"none", fontStyle:"normal"}}>
      <ListItem sx={{width:"260px"}}>
            <ListItemText primary="Add Quiz" sx={{ml:2}}/>
        </ListItem>

    </NavLink>
    <NavLink to={"/report"} style={{textDecoration:"none", fontStyle:"normal"}}>
      <ListItem sx={{width:"260px"}}>
            <ListItemText primary="Report" sx={{ml:2}}/>
        </ListItem>

    </NavLink>
      </Stack>
        </Stack>


    </Box>
        </Stack>
    </Stack>
  </div>);
};

export default SideBar;