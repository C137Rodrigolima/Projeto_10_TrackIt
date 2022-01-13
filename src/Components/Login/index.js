import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import {TelaCadastro, StyledLink } from "../Cadastro/style";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Login(){
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function fazerLogin(event){
        event.preventDefault();
        setCarregando(true);
        const PromessaToken = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        {email: email, password: senha});

        PromessaToken.then((resposta) => {
            console.log(resposta.data);
            const token= resposta.data.token;
            const imagemPerfil= resposta.data.image;
            localStorage.setItem("token", token);
            localStorage.setItem("imagemPerfil", imagemPerfil);
            setCarregando(false);
            navigate("/hoje");
        });

        PromessaToken.catch(() =>{
            alert("Email ou Senha incorretos. Tente novamente.");
            setCarregando(false);
        });
    }

    return (
        <TelaCadastro>
        <img src={logo} alt="imagem logo"/>
        <form onSubmit={fazerLogin}>
            <input type="email" required disabled={carregando} placeholder="email" value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" required disabled={carregando} placeholder="senha" value={senha}
            onChange={(e) => setSenha(e.target.value)}></input>
            <button type="submit" disabled={carregando} >
                {carregando?
                    <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50}></Loader>
                    : "Entrar"}
            </button>
        </form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </TelaCadastro>
    );
}

export default Login;