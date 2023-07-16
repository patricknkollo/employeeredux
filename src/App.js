import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
//import HomePage from "./components/Home";
import EmployeesListComponent from "./components/EmployeesList";
import HomePage from "./components/Home";
import PaysListComponent from "./components/PaysList";
import VilleForm from "./components/VilleForm";
import VillesListComponent from "./components/VillesList";

function App() {
  return (
    <div className="App">
      {/* <VillesListComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/pays" element={<PaysListComponent />} />
          <Route path="/villes" element={<VillesListComponent />} />
          <Route path="/employees" element={<EmployeesListComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
