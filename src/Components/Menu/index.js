import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import PorcentagemContext from "../../contexts/PorcentagemContext";
import {StyledMenu} from './styled';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function Menu() {
    const navigate = useNavigate();
    const { porcentagemHabitos } = useContext(PorcentagemContext);

    return (
        <>
            <StyledMenu>
                <button onClick={()=> navigate("/habitos")}>Hábitos</button>
                <div onClick={()=> navigate("/hoje")} className='barra-progresso-circular'>
                <CircularProgressbar
                    value={porcentagemHabitos}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                })}
                />
                </div>
                <button onClick={()=> navigate("/historico")}>Histórico</button>
            </StyledMenu>
        </>
    );
}

export default Menu;