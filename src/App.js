import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";
import "./styles/reset.css";
import "./styles/style.css";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/habitos" element={<Habitos />}></Route>
            <Route path="/hoje" element={<Hoje />}></Route>
            <Route path="/historico" element={<Historico />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;