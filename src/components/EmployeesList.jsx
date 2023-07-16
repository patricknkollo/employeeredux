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
import { getAllEmployees } from "../redux/EmployeeActionsFunctions";
import axios from "axios";
import "./EmployeesList.css";

function EmployeesListComponent() {
  const employees = useSelector((state) => state.employeeRedux.employees);

  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "http://localhost:8080/api/employee/employees"
      );
      const emps = response.data;
      console.log(emps);
      dispatch(getAllEmployees(emps));
    }
    fetchData();
  }, []);

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
                <Typography>
                  <img
                    className="johann"
                    src="johannesbourg.png"
                    alt="la ville"
                  />
                </Typography>
                <Typography
                  paragraph
                  fontFamily={"serif"}
                  textAlign={"justify"}
                  fontSize={19}
                  marginBottom={5}
                >
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

                <div className="employees-table">
                  <TableContainer component={Paper}>
                    <Table className="" size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>employeeid</TableCell>
                          <TableCell align="right">firstname</TableCell>
                          <TableCell align="right">lastname</TableCell>
                          <TableCell align="right">age</TableCell>
                          <TableCell align="right">villeid</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {employees.map((row) => (
                          <TableRow key={row.employeeid}>
                            <TableCell component="th" scope="row">
                              {row.employeeid}
                            </TableCell>
                            <TableCell align="right">{row.firstname}</TableCell>
                            <TableCell align="right">{row.lastname}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.villeid}</TableCell>
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
      <div className="reference">
        <div className="list1">
          <List>
            <ListItem key={"java"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"java"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"SQL"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"SQL"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"python"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"python"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"C++"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"C++"} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="list1">
          <List>
            <ListItem key={"php"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"php"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"CSS"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"CSS"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"javascript"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"javascript"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"HTML"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"HTML"} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="list1">
          <List>
            <ListItem key={"VBA"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"VBA"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Excel"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Excel"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"React JS"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"React JS"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Angular"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Angular"} />
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

export default EmployeesListComponent;
