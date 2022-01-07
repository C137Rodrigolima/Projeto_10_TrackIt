import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../../Assets/Logo.png";
import { TelaCadastro, StyledLink } from "./style";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Cadastro(){
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
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
        setCarregando(true);
        const Promessa=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", objetoCadastro);
        
        setTimeout(() => 
        setCarregando(false), 3000);

        Promessa.then(() => navigate('/'));
        Promessa.catch(() => alert("Requisição mal sucedida. Tente novamente."));
    }

    return (
        <TelaCadastro>
        <img src={logo} alt="imagem logo"/>
        <input type="email" disabled={carregando} placeholder="email"
        onChange={(e) => setEmailUsuario(e.target.value)} value={emailUsuario}></input>
        <input type="password" disabled={carregando} placeholder="senha"
        onChange={(e) => setSenhaUsuario(e.target.value)} value={senhaUsuario}></input>
        <input type="text" disabled={carregando} placeholder="nome"
        onChange={(e) => setNomeUsuario(e.target.value)} value={nomeUsuario}></input>
        <input type="url" disabled={carregando} placeholder="foto"
        onChange={(e) => setFotoUsuario(e.target.value)} value={fotoUsuario}></input>
        <button disabled={carregando} onClick={enviarCadastro}>
            {carregando?
                <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50}></Loader>
            : "Cadastrar"}
        </button>
        <StyledLink to="/">Já tem uma conta? Faça Login!</StyledLink>
        </TelaCadastro>
    );
}

export default Cadastro;