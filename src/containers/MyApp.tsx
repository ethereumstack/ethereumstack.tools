import React, { useState, ChangeEvent } from "react";
import { MuiThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline, Grid, InputBase, Paper } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HelpIcon from "@material-ui/icons/Help";
import { lightTheme, darkTheme } from "../themes/theme";
import ToolList from "./ToolList";
import tools from "../tools.json";

import "./MyApp.css";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignContent="center" alignItems="center" justify="space-between">
            <Typography variant="h6">{"🧰 ethereumstack.tools"}</Typography>
            <Paper style={{
              background: "rgba(0, 0, 0, 0.1)",
              padding: "0px 10px 0px 10px",
              width: "40%",
            }} elevation={0}>
              <InputBase placeholder="Search for a tool" onChange={
                (ev: ChangeEvent<HTMLInputElement>) => setSearchQuery(ev.target.value)
              } />
            </Paper>
            <Grid item>
              <Tooltip title={"An index of open-source chain-agnostic Ethereum tools"}>
                <IconButton>
                  <HelpIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Toggle Dark Mode"}>
                <IconButton onClick={darkMode.toggle}>
                  {darkMode.value ? <Brightness3Icon /> : <WbSunnyIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <ToolList tools={tools.filter(
            (tool) => {
              return tool.name.toLowerCase().includes(searchQuery) ||
                tool.description.toLowerCase().includes(searchQuery);
            })
          }></ToolList>
        </Grid>
      </div>
    </MuiThemeProvider >
  );
};

export default MyApp;
