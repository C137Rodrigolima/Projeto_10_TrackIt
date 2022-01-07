import Topo from "../Topo";
import Menu from "../Menu";
import {Conteiner} from "./style"

function Historico(){
    return (
        <>
        <Topo />
        <Conteiner>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Conteiner>
        <Menu />
        </>
    );
}

export default Historico;