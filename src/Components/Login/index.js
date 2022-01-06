import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import TelaCadastro from "../Cadastro/style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Login(){
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");

    const objetoLogin = {
        email: email,
	    password: senha
    }

    function fazerLogin(){
        setCarregando(true);
        const PromessaTokien = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        objetoLogin);

        setTimeout(() => 
        setCarregando(false), 4000);

        PromessaTokien.then(
            (resposta)=> {
            setToken(resposta.data.token);
            navigate("/habitos");
        });
        PromessaTokien.catch(() =>{
            alert("Login mal sucedido. Tente novamente.");
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
                <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} />
            : "Entrar"}
        </button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelaCadastro>
    );
}

export default Login;