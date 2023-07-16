import {
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
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
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
import { deleteCities, fetchCities } from "../redux/VillesActionsFunctions";
import DeleteIcon from "@mui/icons-material/Delete";

function VillesListComponent() {
  const villes = useSelector((state) => state.villeRedux.villes);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [villeName, setVilleName] = useState();
  const [countryName, setCountryName] = useState();
  const [countryid, setCountryid] = useState();
  const [currentVilleid, setCurrentVilleid] = useState();

  const handleClickOpen = (id) => {
    setCurrentVilleid(id);
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const dispatch = useDispatch();

  const myDispatch = useDispatch();

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

  const updateVilleFront = () => {
    //myDispatch(updateCityFrontend(newVilleOnTheList, currentVilleid));
    const res = axios.put(
      `http://localhost:8080/api/ville/update/${currentVilleid}`,
      {
        name: villeName,
        paysname: countryName,
        paysid: countryid,
      }
    );
    setOpen(false);
    console.log(res.data);
    window.location.reload();
  };

  const saveVille = () => {
    const res = axios.post(`http://localhost:8080/api/ville/save`, {
      name: villeName,
      paysname: countryName,
      paysid: countryid,
    });
    setOpen(false);
    console.log(res.data);
    window.location.reload();
  };

  const popUpVilleDesign = (
    <div>
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            insert the datas of the new town that you want to save or update
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <TextField
                id="outlined-controlled"
                label="name of town"
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setVilleName(e.target.value);
                }}
                value={villeName}
              />
              <TextField
                id="outlined-controlled"
                label="country's name"
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setCountryName(e.target.value);
                }}
                value={countryName}
              />
              <TextField
                id="outlined-controlled"
                label="country's id"
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setCountryid(e.target.value);
                }}
                value={countryid}
              />
            </FormControl>

            <Box sx={{ marginTop: 5 }}>
              <Button variant="contained" component="label" onClick={saveVille}>
                save
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  const deleteItemOfTheList = (id) => {
    myDispatch(deleteCities(id));
  };

  const deleteItemOfTheListInDataBase = (id) => {
    async function fetchData() {
      // You can await here
      const response = axios.delete(
        `http://localhost:8080/api/ville/delete?id=${id}`
      );
      const r = await Promise.all([response]);
      const towns = r[0].data;
      console.log(towns);
      myDispatch(fetchCities(towns));
    }
    fetchData();
    window.location.reload();
  };

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
                <h2>Johannesbourg Town</h2>
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
                            <Box sx={{ marginBottom: 1, display: "flex" }}>
                              <Button
                                variant="contained"
                                component="label"
                                onClick={(e) => {
                                  handleClickOpen(row.villeid);
                                }}
                                sx={{ marginRight: 1 }}
                              >
                                edit
                              </Button>
                              <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<DeleteIcon />}
                                onClick={(e) => {
                                  deleteItemOfTheList(row.villeid);
                                }}
                                sx={{ marginRight: 1 }}
                              ></Button>
                              <Button
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={(e) => {
                                  deleteItemOfTheListInDataBase(row.villeid);
                                }}
                              ></Button>
                            </Box>
                            {popUpVilleDesign}
                            {
                              <div>
                                <Dialog open={open} onClose={handleClose}>
                                  <DialogTitle>Optional sizes</DialogTitle>
                                  <DialogContent>
                                    <DialogContentText>
                                      insert the datas of the new town that you
                                      want to save or update
                                    </DialogContentText>
                                    <Box
                                      noValidate
                                      component="form"
                                      sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        m: "auto",
                                        width: "fit-content",
                                      }}
                                    >
                                      <FormControl
                                        sx={{ mt: 2, minWidth: 120 }}
                                      >
                                        <TextField
                                          id="outlined-controlled"
                                          sx={{ marginBottom: 2 }}
                                          value={currentVilleid}
                                        />
                                        {console.log(
                                          "le row villeid est : " + row.villeid
                                        )}
                                        <TextField
                                          id="outlined-controlled"
                                          label="name of town"
                                          sx={{ marginBottom: 2 }}
                                          onChange={(e) => {
                                            setVilleName(e.target.value);
                                          }}
                                          value={villeName}
                                        />
                                        <TextField
                                          id="outlined-controlled"
                                          label="country's name"
                                          sx={{ marginBottom: 2 }}
                                          onChange={(e) => {
                                            setCountryName(e.target.value);
                                          }}
                                          value={countryName}
                                        />
                                        <TextField
                                          id="outlined-controlled"
                                          label="country's id"
                                          sx={{ marginBottom: 2 }}
                                          onChange={(e) => {
                                            setCountryid(e.target.value);
                                          }}
                                          value={countryid}
                                        />
                                      </FormControl>

                                      <Box sx={{ marginTop: 5 }}>
                                        <Button
                                          variant="contained"
                                          component="label"
                                          onClick={updateVilleFront}
                                        >
                                          save
                                        </Button>
                                      </Box>
                                    </Box>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>
                                  </DialogActions>
                                </Dialog>
                              </div>
                            }
                            {/* {popUpVilleDesign} */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <Box sx={{ marginTop: 10 }}>
                  <Button
                    variant="contained"
                    component="label"
                    onClick={handleClickOpen2}
                  >
                    Upload
                  </Button>
                </Box>
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

export default VillesListComponent;
