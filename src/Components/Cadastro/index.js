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

    function enviarCadastro(event){
        event.preventDefault();

        const Promessa=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", objetoCadastro);
        setCarregando(true);

        Promessa.then(() => {
            setCarregando(false);
            navigate('/');
        });
        Promessa.catch(() => {
            alert("Requisição mal sucedida. Tente novamente.");
            setCarregando(false);
        });
    }

    return (
        <TelaCadastro>
            <form onSubmit={enviarCadastro}>
                <img src={logo} alt="imagem logo"/>
                <input type="email" required disabled={carregando} placeholder="email"
                onChange={(e) => setEmailUsuario(e.target.value)} value={emailUsuario}></input>
                <input type="password" required disabled={carregando} placeholder="senha"
                onChange={(e) => setSenhaUsuario(e.target.value)} value={senhaUsuario}></input>
                <input type="text" required disabled={carregando} placeholder="nome"
                onChange={(e) => setNomeUsuario(e.target.value)} value={nomeUsuario}></input>
                <input type="url" required disabled={carregando} placeholder="foto"
                onChange={(e) => setFotoUsuario(e.target.value)} value={fotoUsuario}></input>
                <button type="submit" disabled={carregando}>
                    {carregando?
                        <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50}></Loader>
                        : "Cadastrar"}
                </button>
            </form>
                <StyledLink to="/">Já tem uma conta? Faça Login!</StyledLink>
        </TelaCadastro>
    );
}

export default Cadastro;