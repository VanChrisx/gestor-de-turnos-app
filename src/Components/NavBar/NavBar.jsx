import {
  AppBar,
  Tabs,
  Toolbar,
  Typography,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import NavDrawer from "./NavDrawer";

function NavBar() {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const queryMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3" color="initial">
          NavBar
        </Typography>
        {queryMatch ? (
          <NavDrawer />
        ) : (
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="Turnos" />
            <Tab label="Mis Turnos" />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
