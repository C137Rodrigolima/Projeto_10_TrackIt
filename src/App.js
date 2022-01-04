import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";
import "./styles/style.css";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Cadastro" element={<Cadastro />}></Route>
            <Route path="/Habitos" element={<Habitos />}></Route>
            <Route path="/Hoje" element={<Hoje />}></Route>
            <Route path="/Historico" element={<Historico />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;