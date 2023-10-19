import styled from "styled-components";
import { AiOutlineMenu} from 'react-icons/ai';
import { devices } from "../../utils/devices";

export const HeaderWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const MenuButton = styled.button`
padding: 0;
background-color: transparent;
border: none;
cursor: pointer;
@media screen and (${devices.desktop}){
        display: none;
    }
`

export const Burger = styled(AiOutlineMenu)`
width: 20px;
height: 20px;
fill: ${p => p.theme.mainFont};
`
