import {StyledMenu} from './styled';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <StyledMenu>
                <button onClick={()=> navigate("/habitos")}>Hábitos</button>
                <div onClick={()=> navigate("/hoje")} className='barra-progresso-circular'>
                <CircularProgressbar value={100} text="Hoje" />
                </div>
                <button onClick={()=> navigate("/historico")}>Histórico</button>
            </StyledMenu>
        </>
    );
}

export default Menu;