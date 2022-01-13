import axios from "axios";
import { useEffect, useState, useContext } from "react";
import PorcentagemContext from "../../contexts/PorcentagemContext";
import Topo from "../Topo";
import Menu from "../Menu";
import {Conteiner} from "../Habitos/style";
import {CheckHabito, Botaocheck, SubtituloHabitos} from "./style";
import check from "../../Assets/Check.png";
import dayjs from "dayjs";

function Hoje(){
    const token = localStorage.getItem("token");
    const [hojeHabitos, setHojeHabitos] = useState([]);
    const { porcentagemHabitos, setPorcentagemHabitos } = useContext(PorcentagemContext);
    const [recarregamento, setRecarregamento] = useState(true);
    require('dayjs/locale/pt-br');

    useEffect(()=> {
        const PromessaHabitosHoje = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitosHoje.then((resposta)=> {
            console.log(resposta.data);
            setHojeHabitos(resposta.data);
        });
        PromessaHabitosHoje.catch(()=>alert("erro com autentificação de token. Faça login novamente."));
    }, [recarregamento]);
    
    useEffect(()=>{
        calcularHabitos(null);
    },[hojeHabitos]);

    function marcarHabito(id, feito) {
        setRecarregamento(false);
        const PromessaMarcarHabito = axios.post(`
        https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${feito?"uncheck":"check"}`,{},
        {headers: {Authorization: `Bearer ${token}`}});
        PromessaMarcarHabito.then(()=> {
            setRecarregamento(true);
        });
        PromessaMarcarHabito.catch((erro)=>{
            alert(erro);
            setRecarregamento(true);
        });
        calcularHabitos(feito);
    }

    function calcularHabitos(parametro){
        let numero = 0;
        for(let i=0; i<hojeHabitos.length; i++){
            if(hojeHabitos[i].done === true){
                numero++;
            }
        }
        console.log(numero);
        if(parametro){
            numero--;
        } else if(parametro === null){
            console.log("null");
        }else if(!parametro){
            numero++;
        }

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
            <div>Não há nenhum hábito</div>
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
            <CheckHabito checkcor={habito.done} key={habito.id}>
                <div>
                <h5>{habito.name}</h5>
                <h6>
                    <p>Sequência atual: <span >{habito.currentSequence} dias</span></p>
                    <p>Seu recorde:
                        {habito.currentSequence >= habito.highestSequence?
                        <span> {habito.highestSequence} dias</span>
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