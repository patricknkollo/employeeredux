import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function SidebarComponent() {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", color: "green" }}>
        <List sx={{ color: "green" }}>
          <ListItem
            key={"ville"}
            disablePadding
            component="a"
            href="http://localhost:3000/villes"
            style={{ color: "initial" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"ville"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"pays"}
            disablePadding
            component="a"
            href="http://localhost:3000/pays"
            style={{ color: "initial" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"pays"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"continent"}
            disablePadding
            component="a"
            href="http://localhost:3000/pays"
            style={{ color: "initial" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"continent"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default SidebarComponent;
