import styled from "styled-components";

const StyledFormulario = styled.div `
    width: 340px;
    height: 180px;
    margin-bottom: 10px;
    padding: 18px;
    gap: 8px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    
    background: #FFFFFF;
    border-radius: 5px;

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

export {StyledFormulario, ConteinerBotoes, BotaoCustomizado};