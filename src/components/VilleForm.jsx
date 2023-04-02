import {
  Button,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavbarComponent from "./Navbar";
import SidebarComponent from "./Sidebar";
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import FooterComponent from "./Footer";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Home.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function VilleForm() {
  //const villes = useSelector((state) => state.villeRedux.villes);
  const [name, setName] = useState("");
  const [countryname, setCountryname] = useState("");
  const [countryid, setCountryid] = useState(0);

  function submitClientData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/clientdata/save", {
        name: name,
        paysname: countryname,
        paysid: countryid,
      })
      .then((response) => {
        setName("");
        setCountryname("");
        setCountryid(0);
      })
      .catch(console.error());
  }

  return (
    <>
      <div className="EmployeesListComponent">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavbarComponent />
          <SidebarComponent />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className="inside">
              <div className="left-inside">
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                </Typography>
                <div className="ville-form">
                  <TextField
                    fullWidth
                    label="name"
                    id="fullWidth"
                    sx={{ width: 500, pb: 3 }}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <TextField
                    fullWidth
                    label="country"
                    id="fullWidth"
                    sx={{ width: 500, pb: 3 }}
                    value={countryname}
                    onChange={(event) => {
                      setCountryname(event.target.value);
                    }}
                  />
                  <TextField
                    fullWidth
                    label="countryid"
                    id="fullWidth"
                    sx={{ width: 500, pb: 3, pt: 5 }}
                    value={countryid}
                    onChange={(event) => {
                      setCountryid(event.target.value);
                    }}
                  />
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={(e) => {
                        submitClientData(e);
                      }}
                    >
                      Send
                    </Button>
                  </Stack>
                </div>
              </div>
              <Divider />
              <div className="inside-right">
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                  <List>
                    <ListItem key={"Inbox"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Inbox"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key={"email"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"email"} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                      "StaticDatePicker",
                    ]}
                  >
                    <DemoItem label="Datum">
                      <DatePicker defaultValue={dayjs(new Date())} />
                    </DemoItem>
                    <DemoItem label="Calendar">
                      <StaticDatePicker defaultValue={dayjs(new Date())} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <Toolbar />
          </Box>
        </Box>
      </div>
      <div className="footer">
        <FooterComponent />
      </div>
    </>
  );
}

export default VilleForm;
