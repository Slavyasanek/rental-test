import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {AiOutlineCar} from 'react-icons/ai';
import { devices } from "../../utils/devices";

export const LogoWrapper = styled(NavLink)`
    display: flex;
    gap: 10px;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.mainBcg};
    background-color: ${p => p.theme.decorativePurple};
    border-radius: 8px;
    padding: 5px 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color:  ${p => p.theme.decorativePurpleHover};
    }
`

export const LogoIcon = styled(AiOutlineCar)`
    fill: ${p => p.theme.mainBcg};
    width: 24px;
    height: 24px;
    @media screen and (${devices.desktop}) {
        width: 30px;
        height: 30px;
    }
`