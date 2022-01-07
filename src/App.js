import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";
import TokenContext from './contexts/TokenContext';
import ImagemPerfilContext from "./contexts/ImagemPerfilContext";
import "./styles/reset.css";
import "./styles/style.css";

function App(){
    const [token, setToken] = useState("");
    const [imagemPerfil, setImagemPerfil] = useState("");

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <ImagemPerfilContext.Provider value={{imagemPerfil, setImagemPerfil}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/cadastro" element={<Cadastro />}></Route>
                        <Route path="/habitos" element={<Habitos />}></Route>
                        <Route path="/hoje" element={<Hoje />}></Route>
                        <Route path="/historico" element={<Historico />}></Route>
                    </Routes>
                </BrowserRouter>
            </ImagemPerfilContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;