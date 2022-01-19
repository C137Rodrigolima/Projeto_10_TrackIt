import axios from "axios";
import { useEffect, useState } from "react";
import Topo from "../Topo";
import Menu from "../Menu";
import { Conteiner, TopoConteinerHabitos, StyledFormulario, StyledHabitos, ConteinerBotoes, BotaoCustomizado } from "./style";
import lixeira from "../../Assets/Lixeira.png";

function Habitos(){
    const token = localStorage.getItem("token");
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
    const [recarregamento, setRecarregamento] = useState(true);

    useEffect(()=> {
        const PromessaHabitos = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {headers: {Authorization: `Bearer ${token}`}}
        );
        PromessaHabitos.then((resposta)=> {
            setHabitosUsuario(resposta.data);
        });
        PromessaHabitos.catch(()=>alert("erro com autentificação de token. Faça Login novamente."));
    }, [recarregamento]);

    function colocarDias(arr){
        let nomeDias = ["D", "S", "T", "Q", "Q", "S", "S"];
        let arraydeDiasGenericos = [0,1,2,3,4,5,6];
        let arraydeDias = [];
        for(let i=0; i<arraydeDiasGenericos.length; i++){
            if(arr.includes(arraydeDiasGenericos[i])){
                arraydeDias.push(
                    <BotaoCustomizado corTexto="#FFFFFF" corBorda= "#CFCFCF" corFundo= "#CFCFCF">
                        {`${nomeDias[i]}`}
                    </BotaoCustomizado>);
            } else {
                arraydeDias.push(
                    <BotaoCustomizado corTexto="#DBDBDB" corBorda= "#D5D5D5" corFundo= "#FFFFFF">
                        {`${nomeDias[i]}`}
                    </BotaoCustomizado>);
            }
        
        }
        return arraydeDias;
    }

    function selecionarDia(botao){
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
        setRecarregamento(false);
        setCriandoHabito(false);
        const objetoHabito = {
            name: inputNomeHabito,
            days: diasSelecionados
        };
        const PromessaEnvio = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        objetoHabito, {headers: {Authorization: `Bearer ${token}`}});
        PromessaEnvio.then(()=> {
            setRecarregamento(true);
        });
        PromessaEnvio.catch(()=> {
            setRecarregamento(true);
        });
    }

    function apagarHabito(id){
        if (window.confirm("Você realmente deseja apagar o hábito?")){
            setRecarregamento(false);

            const PromessaDelete = axios.delete(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}
            `, {headers: {Authorization: `Bearer ${token}`}});

            PromessaDelete.then(()=> {
                setRecarregamento(true);
            });
            PromessaDelete.catch(()=> {
                setRecarregamento(true);
            });
        }
    }

    return (
        <>
        <Topo />
        <Conteiner alturaTela={habitosUsuario.length}>
            <TopoConteinerHabitos>
                <h1>Meus hábitos</h1>
                <button onClick={()=> setCriandoHabito(true)}>+</button>
            </TopoConteinerHabitos>
            {criandoHabito &&
            <StyledFormulario>
                <input placeholder="nome do hábito" value={inputNomeHabito}
                onChange={(e) => setInputNomeHabito(e.target.value)}></input>
                <ConteinerBotoes>
                    {objetoBotoes.map((botao) => 
                        <BotaoCustomizado corTexto={botao.corTexto}
                        corBorda={botao.corBorda} corFundo={botao.corFundo}
                        key={botao.numero} onClick={()=> selecionarDia(botao)}>
                            {botao.dia}
                        </BotaoCustomizado>)}
                </ConteinerBotoes>
                <div className="caixaBotoes">
                <div className="navegacao-formulario"
                onClick={()=> setCriandoHabito(false)}>Cancelar</div>
                <div className="navegacao-formulario"
                onClick={enviarFormulario}>Salvar</div>
                </div>
            </StyledFormulario>
            }
            {habitosUsuario.length===0?
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            :
            habitosUsuario.map((habito) =>
                <StyledHabitos key={habito.id}>
                    <div className="top-habito">
                        <h3>{habito.name}</h3>
                        <img onClick={()=>apagarHabito(habito.id)} src={lixeira} alt="lixeira imagem" />
                    </div>
                    <ConteinerBotoes>
                        {colocarDias(habito.days)}
                    </ConteinerBotoes>
                </StyledHabitos>
                )}
        </Conteiner>
        <Menu />
        </>
    );
}

export default Habitos;