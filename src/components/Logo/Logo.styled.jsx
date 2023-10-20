import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../utils/devices";

export const LogoWrapper = styled(NavLink)`
    display: flex;
    gap: 10px;
    font-weight: 800;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 5px 8px;
    @media screen and (${devices.tablet}){
        font-size: 16px;
    }
`

export const LogoIcon = styled.img`
    width: 40px;
    height: 45px;
`