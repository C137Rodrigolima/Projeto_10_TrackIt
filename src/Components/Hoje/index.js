import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import Topo from "../Topo";
import Menu from "../Menu";

function Hoje(){
    const {token, setToken} = useContext(TokenContext);

    useEffect(()=> {
        const PromessaHabitosHoje = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitosHoje.then((resposta)=> console.log(resposta));
        PromessaHabitosHoje.catch(()=>alert("erro com autentificação de token"));
    }, []);
    
    return (
        <>
        <Topo />
        <Menu />
        </>
    );
}

export default Hoje;