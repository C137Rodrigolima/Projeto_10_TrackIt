import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import Topo from "../Topo";
import Menu from "../Menu";
import {Conteiner} from "../Historico/style";
import {CheckHabito, Botaocheck, SubtituloHabitos} from "./style";
import check from "../../Assets/Check.png";

function Hoje(){
    const {token, setToken} = useContext(TokenContext);
    const [hojeHabitos, setHojeHabitos] = useState([]);
    const [habitosConcluidos, sethabitosConcluidos] = useState(0);
    const [recarregamento, setRecarregamento] = useState(true);

    useEffect(()=> {
        const PromessaHabitosHoje = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitosHoje.then((resposta)=> {
            setHojeHabitos(resposta.data);
        });
        PromessaHabitosHoje.catch(()=>alert("erro com autentificação de token. Faça login novamente."));
    }, [recarregamento]);


    function marcarHabito(id, feito) {
        console.log(id, feito);
        setRecarregamento(false);
        const PromessaMarcarHabito = axios.post(`
        https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${feito?"uncheck":"check"}`,{},
        {headers: {Authorization: `Bearer ${token}`}});
        PromessaMarcarHabito.then(()=> {
            setRecarregamento(true);
        });
        PromessaMarcarHabito.catch((erro)=>{
            console.log(erro);
            setRecarregamento(true);
        });
    }


    if(hojeHabitos.length === 0){
        return(
            <>
        <Topo />
        <Conteiner>
            <div>Loading</div>
        </Conteiner>
        <Menu />
        </>
        );
    }
    
    return (
        <>
        <Topo />
        <Conteiner>
            <h1>Dia de Hoje</h1>
            <SubtituloHabitos habitosConcluidos={habitosConcluidos}>
            { habitosConcluidos === 0?
            "Nenhum hábito concluído ainda"
            :
            "Alguns dos hábitos concluídos"
            }
            </SubtituloHabitos>
            
            {hojeHabitos.map((habito)=>
            <CheckHabito checkcor={habito.done}>
                <div>
                <h5>{habito.name}</h5>
                <h6>
                    <p>Sequência atual: <span >{habito.currentSequence} dias</span></p>
                    <p>Seu recorde:
                        {habito.currentSequence === habito.highestSequence?
                        <span checkcor={habito.done}> {habito.highestSequence} dias</span>
                        :` ${habito.highestSequence} dias`
                        }
                    </p>
                </h6>
                </div>
                <Botaocheck onClick={()=> marcarHabito(habito.id, habito.done)} checkcor={habito.done}>
                    <img src={check} alt="check" />
                </Botaocheck>
            </CheckHabito>
            )}
        </Conteiner>
        <Menu />
        </>
    );
}

export default Hoje;