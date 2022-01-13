import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetarEstiloGlobal from "./styles/reset";
import GlobalEstilo from "./styles/GlobalEstilo";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";
import PorcentagemContext from './contexts/PorcentagemContext';

function App(){
    const [porcentagemHabitos, setPorcentagemHabitos] = useState(0);

    return (
        <PorcentagemContext.Provider value={{porcentagemHabitos, setPorcentagemHabitos}}>
                <BrowserRouter>
                    <ResetarEstiloGlobal />
                    <GlobalEstilo />
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/cadastro" element={<Cadastro />}></Route>
                        <Route path="/habitos" element={<Habitos />}></Route>
                        <Route path="/hoje" element={<Hoje />}></Route>
                        <Route path="/historico" element={<Historico />}></Route>
                    </Routes>
                </BrowserRouter>
        </PorcentagemContext.Provider>
    );
}

export default App;