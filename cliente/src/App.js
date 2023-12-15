import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Home from "./components/Home";
import Usuarios from "./components/Usuarios";
import Citas from "./components/Citas";
import Servicios from "./components/Servicios";
import Empleados from "./components/Empleados";
import Farmacia from "./components/Farmacia";
import Login from './components/login'

function App() {
  const[modalState, changeModalState] = useState(false);
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/sesion")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  return (
    <Router>
      <Navbar /> 
      <DivContainer>
        <Sidebar />
        <div className="contenido">
          <Routes>
            <Route path="/" exact={true} Component={Home}/>
            <Route path="/empleados" exact={true} Component={Empleados}/>
            <Route path="/usuarios" exact={true} Component={Usuarios}/>
            <Route path="/servicios" exact={true} Component={Servicios}/>
            <Route path="/farmacia" exact={true} Component={Farmacia}/>
            <Route path="citas" exact={true} Component={Citas}/>
          </Routes>
        </div>
        {!data ? 
        (<Login state={!modalState} changeState={!changeModalState}></Login>) : 
        (<Login state={modalState} changeState={changeModalState}></Login>)} 
      </DivContainer>

    </Router>
  );
}

export default App;

const DivContainer = styled.div`
  display: flex;
`