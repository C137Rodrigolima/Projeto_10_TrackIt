import { Link } from "react-router-dom";
import styled from "styled-components";

const TelaCadastro = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-top: 68px;
        margin-bottom: 33px;
    }
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
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
    input::placeholder{
        color: #DBDBDB;
    }

    button {
        all: unset;
        margin-bottom: 25px;
        width: 303px;
        height: 45px;

        background: #52B6FF;
        border-radius: 4.63636px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: normal;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`;

export {
    TelaCadastro, 
    StyledLink
};