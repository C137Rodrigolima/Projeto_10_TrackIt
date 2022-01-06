import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../../Assets/Logo.png";
import TelaCadastro from "./style";

function Cadastro(){
    const navigate = useNavigate();
    const [emailUsuario, setEmailUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [fotoUsuario, setFotoUsuario] = useState("");

    const objetoCadastro = {
        email: emailUsuario,
        name: nomeUsuario,
        image: fotoUsuario,
        password: senhaUsuario
    }

    function enviarCadastro(){
        const Promessa=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", objetoCadastro);
        Promessa.then(() => navigate('/'));
        Promessa.catch(() => alert("Sua requisição falhou. Tente novamente."));
    }

    return (
        <TelaCadastro>
        <img src={logo} alt="imagem logo"/>
        <input type="email" placeholder="email"
        onChange={(e) => setEmailUsuario(e.target.value)} value={emailUsuario}></input>
        <input type="text" placeholder="senha"
        onChange={(e) => setSenhaUsuario(e.target.value)} value={senhaUsuario}></input>
        <input type="text" placeholder="nome"
        onChange={(e) => setNomeUsuario(e.target.value)} value={nomeUsuario}></input>
        <input type="url" placeholder="foto"
        onChange={(e) => setFotoUsuario(e.target.value)} value={fotoUsuario}></input>
        <button onClick={enviarCadastro}>Cadastrar</button>
        <Link to="/">Já tem uma conta? Faça Login!</Link>
        </TelaCadastro>
    );
}

export default Cadastro;