import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import Topo from "../Topo";
import Menu from "../Menu";
import {Conteiner} from "../Historico/style";
import {CheckHabito, Botaocheck, SubtituloHabitos} from "./style";
import check from "../../Assets/Check.png";
import dayjs from "dayjs";

function Hoje(){
    const {token, setToken} = useContext(TokenContext);
    const [hojeHabitos, setHojeHabitos] = useState([]);
    const [porcentagemHabitos, setPorcentagemHabitos] = useState(0);
    const [recarregamento, setRecarregamento] = useState(true);
    require('dayjs/locale/pt-br');

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
        calcularHabitos();
    }

    function calcularHabitos(){
        let numero = 0;
        for(let i=0; i<hojeHabitos.length; i++){
            if(hojeHabitos[i].done === true){
                numero++;
            }
        }
        console.log(numero);
        if(numero===0) {
            setPorcentagemHabitos(0);
        } else{
            let porcentagem = (numero/hojeHabitos.length)*100;
            setPorcentagemHabitos(porcentagem.toFixed(0));
        }
    }


    if(hojeHabitos.length === 0){
        return(
            <>
        <Topo />
        <Conteiner>
            <div>Carregando</div>
        </Conteiner>
        <Menu />
        </>
        );
    }
    
    return (
        <>
        <Topo />
        <Conteiner>
            <h1>{dayjs().locale('pt-br').format("dddd")}, {dayjs().format('DD/MM')}</h1>
            <SubtituloHabitos porcentagemHabitos={porcentagemHabitos}>
            { porcentagemHabitos === 0?
            "Nenhum hábito concluído ainda"
            :
            `${porcentagemHabitos}% dos hábitos concluídos`
            }
            </SubtituloHabitos>
            
            {hojeHabitos.map((habito)=>
            <CheckHabito checkcor={habito.done}>
                <div>
                <h5>{habito.name}</h5>
                <h6>
                    <p>Sequência atual: <span >{habito.currentSequence} dias</span></p>
                    <p>Seu recorde:
                        {habito.currentSequence >= habito.highestSequence?
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