import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import Topo from "../Topo";
import Menu from "../Menu";
import {Conteiner} from "../Historico/style";
import { StyledFormulario, ConteinerBotoes, BotaoCustomizado } from "./style";

function Habitos(){
    const {token, setToken} = useContext(TokenContext);
    const [criandoHabito, setCriandoHabito] = useState(false);
    const [objetoBotoes, setObjetoBotoes] = useState([
        {dia: "D", numero: 0, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "S", numero: 1, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "T", numero: 2, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "Q", numero: 3, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "Q", numero: 4, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "S", numero: 5, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"},
        {dia: "S", numero: 6, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"}
    ])
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [inputNomeHabito, setInputNomeHabito] = useState("");
    const [habitosUsuario, setHabitosUsuario] = useState([]);

    useEffect(()=> {
        const PromessaHabitos = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitos.then((resposta)=> {
            console.log(resposta);
            setHabitosUsuario(resposta.data);
            
        });
        PromessaHabitos.catch(()=>alert("erro com autentificação de token"));
    }, []);

    function handleDia(botao){
        let validation = false;
        diasSelecionados.filter((indicebotao) =>{
            if(indicebotao === botao.numero){
                return validation=true;
            };
        })
        if(validation){
            let newArray= diasSelecionados.filter( (n) =>
                {return n!==botao.numero;}
            );
            setDiasSelecionados(newArray);
            const novobotao= {...botao, corTexto: "#DBDBDB", corBorda: "#D5D5D5", corFundo: "#FFFFFF"};
            objetoBotoes[botao.numero] = novobotao;
            setObjetoBotoes(objetoBotoes);
        } else {
            setDiasSelecionados([...diasSelecionados, botao.numero]);
            const novobotao= {...botao, corTexto: "#FFFFFF", corBorda: "#CFCFCF", corFundo: "#CFCFCF"};
            objetoBotoes[botao.numero] = novobotao;
            setObjetoBotoes(objetoBotoes);
        }
    }

    function enviarFormulario(){
        const objetoHabito = {
            name: inputNomeHabito,
            days: diasSelecionados
        };
        const PromessaEnvio = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", objetoHabito,
        {headers: {Authorization: `Bearer ${token}`}});
        PromessaEnvio.then((resposta)=> console.log(resposta.data));
        PromessaEnvio.catch((erro)=> console.log(erro));
    }

    return (
        <>
        <Topo />
        <Conteiner>
            <div>
                <h1>Meus hábitos</h1>
                <button onClick={()=> setCriandoHabito(true)}>+</button>
            </div>
            {criandoHabito &&
            <StyledFormulario>
                <input placeholder="nome do hábito" value={inputNomeHabito}
                onChange={(e) => setInputNomeHabito(e.target.value)}></input>
                <ConteinerBotoes>
                    {objetoBotoes.map((botao) => 
                        <BotaoCustomizado corTexto={botao.corTexto} corBorda={botao.corBorda} corFundo={botao.corFundo}
                        key={botao.numero} onClick={()=> handleDia(botao)}>
                            {botao.dia}
                        </BotaoCustomizado>)}
                </ConteinerBotoes>
                <div className="navegacao-formulario" onClick={()=> setCriandoHabito(false)}>Cancelar</div>
                <div className="navegacao-formulario" onClick={enviarFormulario}>Salvar</div>
            </StyledFormulario>
            }
            {//buscar a dica do Dina sobre como usar menos elementos de curto circuito e o outro negócio nas validações...
            //está no LiveCoding do ZapRecall...
            }
            {habitosUsuario.length===0?
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            //do contrário, mudar para curtcircuit e colocar o map com eles aqui...
            :
            
            <StyledFormulario>
                {habitosUsuario.map((habito) =>
                <>
                <div>{habito.id}</div>
                <div>{habito.name}</div>
                <div>{habito.days}</div>
                </>
                )}
            </StyledFormulario>
            }
            
        </Conteiner>
        <Menu />
        </>
    );
}

export default Habitos;