import {Styledtopo} from "./styled";
import logotop from "../../Assets/Logo_topo.png";

function Topo(){
    const imagemPerfil = localStorage.getItem("imagemPerfil");
    return (
        <Styledtopo>
            <img src={logotop} alt="logo-topo" />
            <img className="imagem-Perfil" src={imagemPerfil} alt="foto do perfil"/>
        </Styledtopo>
    );
}

export default Topo;