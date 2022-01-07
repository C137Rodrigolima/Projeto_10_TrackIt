import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import Topo from "../Topo";
import Menu from "../Menu";

function Habitos(){
    const {token, setToken} = useContext(TokenContext);

    useEffect(()=> {
        const PromessaHabitos = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitos.then((resposta)=> console.log(resposta));
        PromessaHabitos.catch(()=>alert("erro com autentificação de token"));
    }, []);

    return (
        <>
        <Topo />
        <Menu />
        </>
    );
}

export default Habitos;