import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </Container>
  );
};

export default NavDrawer;
