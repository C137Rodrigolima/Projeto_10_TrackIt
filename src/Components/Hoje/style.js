import styled from "styled-components";

const SubtituloHabitos = styled.div`
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;

    color: ${props => props.porcentagemHabitos===0? "#BABABA" : "#8FC549"};
`;

const CheckHabito = styled.div`
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    padding: 13px;
    
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 5px;

    h5 {
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }
    h6 {
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
    span {
        color: ${props => props.checkcor? "#8FC549" : "#666666"}
    }
`;

const Botaocheck = styled.button`
    all: unset;
    width: 69px;
    height: 69px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.checkcor? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
`;

export {CheckHabito, Botaocheck, SubtituloHabitos};