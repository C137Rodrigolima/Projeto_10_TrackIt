import styled from "styled-components";

const Conteiner = styled.div`
    height: ${props => props.alturaTela<4? "100vh" :"100%"};
    width: 100%;
    padding: 70px 17px;
    padding-bottom: 70px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    background-color: #F2F2F2;

    h1 {
        margin-top: 28px;
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
    h2 {
        margin-top: 17px;
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
    .top-conteinerhabitos {
        display
    }
`;

const TopoConteinerHabitos = styled.div `
    width: 375px;
    padding: 0px 17px;
    margin-bottom: 15px;

    text-align: center;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;


    button {
        all: unset;
        width: 40px;
        height: 35px;

        font-size: 26.976px;
        line-height: 34px;
        text-align: center;

        color: #FFFFFF;

        background: #52B6FF;
        border-radius: 4.63636px;
    }
`;

const StyledFormulario = styled.div `
    width: 340px;
    height: 180px;
    margin-bottom: 10px;
    padding: 17px 18px;
    gap: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: left;
    
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;

    input {
        width: 303px;
        height: 45px;
        padding-left: 11px;
        
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
    input::placeholder {
        color: #DBDBDB;
    }
    .caixaBotoes {
        display: flex;
        gap:10px;
        justify-content: right;
        align-items: center;
    }
    .top-habito {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .navegacao-formulario {
        width: 84px;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        color: #FFFFFF;

        background: #52B6FF;
        border-radius: 4.63636px;
    }
`;

const StyledHabitos= styled.div `

    width: 340px;
    height: 91px;
    margin-bottom: 10px;
    padding: 17px 18px;
    gap: 8px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 5px;

    .top-habito{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h3 {
        margin-bottom: 10px;
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
}
`;

const ConteinerBotoes = styled.div`
    width: 303px;
    display: flex;
    justify-content: left;
    gap: 4px;
`;

const BotaoCustomizado = styled.button`
    all: unset;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.corTexto};

    background: ${props => props.corFundo};
    border: 1px solid ${props => props.corBorda};
    box-sizing: border-box;
    border-radius: 5px;
`;

export {Conteiner, TopoConteinerHabitos, StyledFormulario, StyledHabitos, ConteinerBotoes, BotaoCustomizado};