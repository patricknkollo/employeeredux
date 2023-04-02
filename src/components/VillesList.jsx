import {
  Box,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";
import SidebarComponent from "./Sidebar";
import "./Home.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchCities } from "../redux/VillesActionsFunctions";

function VillesListComponent() {
  const villes = useSelector((state) => state.villeRedux.villes);

  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = axios.get("http://localhost:8080/api/ville/villes");
      const r = await Promise.all([response]);
      const towns = r[0].data;
      console.log(towns);
      dispatch(fetchCities(towns));
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="VillesListComponent">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavbarComponent />
          <SidebarComponent />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className="inside">
              <div className="left-inside">
                <img
                  className="johann"
                  src="johannesbourg.png"
                  alt="la ville"
                ></img>
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
                  commodo quis imperdiet massa tincidunt. Cras tincidunt VILLE
                  LIST
                </Typography>
                <div className="employees-table">
                  <TableContainer component={Paper}>
                    <Table className="" size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>villeid</TableCell>
                          <TableCell align="right">name</TableCell>
                          <TableCell align="right">paysname</TableCell>
                          <TableCell align="right">paysid</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {villes.map((row) => (
                          <TableRow key={row.villeid}>
                            <TableCell component="th" scope="row">
                              {row.villeid}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.paysname}</TableCell>
                            <TableCell align="right">{row.paysid}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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
                    <DemoItem label="Responsive variant">
                      <DatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                    <DemoItem label="Static variant">
                      <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <Toolbar />
          </Box>
        </Box>
      </div>
      <div className="reference">
        <div className="list1">
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
        </div>
        <div className="list1">
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
        </div>
        <div className="list1">
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
        </div>
      </div>
      <div className="footer">
        <FooterComponent />
      </div>
    </>
  );
}

export default VillesListComponent;
