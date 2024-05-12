import { Outlet } from "react-router-dom";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
