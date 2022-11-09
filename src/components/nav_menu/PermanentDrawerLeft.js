import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const exercicesRedirections = [
  { text: "Exercice 1", link: `exercice/1` },
  { text: "Exercice 2", link: `exercice/2` },
  { text: "Exercice 3", link: `exercice/3` },
  { text: "Exercice 4", link: `exercice/4` },
  { text: "Exercice 5", link: `exercice/5` },
  { text: "Exercice 6", link: `exercice/6` },
  { text: "Exercice 7", link: `exercice/7` },
];
const countryRedirections = [
  { text: "France", link: `country/france` },
  { text: "Germany", link: `country/germany` },
  { text: "Canada", link: `country/canada` },
];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      dsd
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Exercices React JS Diginamic 2022
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <h3>Tp 1</h3>
        <List>
          {Object.entries(exercicesRedirections).map((redirection, index) => (
            <ListItem key={redirection[1].text} disablePadding>
              <Link to={redirection[1].link}>
                <ListItemButton>
                  <ListItemText
                    style={{ width: "256px" }}
                    primary={redirection[1].text}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h3>Tp 2</h3>
          {Object.entries(countryRedirections).map((redirection, index) => (
            <ListItem key={redirection[1].text} disablePadding>
              <Link to={redirection[1].link}>
                <ListItemButton>
                  <ListItemText
                    style={{ width: "256px" }}
                    primary={redirection[1].text}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
