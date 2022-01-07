import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import {TelaCadastro, StyledLink } from "../Cadastro/style";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TokenContext from "../../contexts/TokenContext";
import ImagemPerfilContext from "../../contexts/ImagemPerfilContext";

function Login(){
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {token, setToken} = useContext(TokenContext);
    const {imagemPerfil, setImagemPerfil} = useContext(ImagemPerfilContext);

    const objetoLogin = {
        email: email,
	    password: senha
    }

    function fazerLogin(){
        setCarregando(true);
        const PromessaToken = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        objetoLogin);

        setTimeout(() =>
        setCarregando(false)
        , 3000);

        PromessaToken.then((resposta) => {

            setToken(resposta.data.token)
            setImagemPerfil(resposta.data.image)
            
            navigate("/hoje");
        });

        PromessaToken.catch(() =>{
            alert("Email ou Senha incorretos. Tente novamente.");
        });
    }


    return (
        <TelaCadastro>
        <img src={logo} alt="imagem logo"/>
        <input type="email" disabled={carregando} placeholder="email" value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" disabled={carregando} placeholder="senha" value={senha}
        onChange={(e) => setSenha(e.target.value)}></input>
        <button onClick={fazerLogin} disabled={carregando} >
            {carregando?
                <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50}></Loader>
            : "Entrar"}
        </button>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </TelaCadastro>
    );
}

export default Login;