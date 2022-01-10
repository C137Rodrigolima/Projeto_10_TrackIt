import styled from "styled-components";

const StyledMenu = styled.div`
    width: 100%;
    height: 70px;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;

    background: #FFFFFF;

    button {
        all: unset;
        width: 79px;
        height: 22px;

        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }

    .barra-progresso-circular {
        width: 91px;
        height: 91px;
        position: fixed;
        bottom: 0;
        right: calc(50% - 45px);
    }
`;

export {StyledMenu};