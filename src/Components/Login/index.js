import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import TelaCadastro from "../Cadastro/style";

function Login(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");
    console.log(token);

    const objetoLogin = {
        email: email,
	    password: senha
    }

    function fazerLogin(){
        const PromessaTokien = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        objetoLogin);
        setLoading(true);
        setTimeout(() => 
        setLoading(false), 5000);
        PromessaTokien.then(
            resposta=> setToken(resposta.data.token),
            navigate("/habitos")

        );
        PromessaTokien.catch(() =>
            alert("Login mal sucedido. Tente novamente.")
        );
    }

    return (
        <TelaCadastro>
        <img src={logo} alt="imagem logo"/>
        <input placeholder="email" value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder="senha" value={senha}
        onChange={(e) => setSenha(e.target.value)}></input>
        <button onClick={fazerLogin}>
            {loading? "carregando..." : "Entrar"}
        </button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </TelaCadastro>
    );
}

export default Login;