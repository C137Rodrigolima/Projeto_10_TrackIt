import {StyledMenu} from './styled';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <StyledMenu>
                <button onClick={()=> navigate("/habitos")}>Hábitos</button>
                <button onClick={()=> navigate("/hoje")}>Hoje</button>
                <button onClick={()=> navigate("/historico")}>Histórico</button>
            </StyledMenu>
        </>
    );
}

export default Menu;