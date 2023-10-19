import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../utils/devices";
import { AiOutlineClose } from 'react-icons/ai'

export const SideBarWrapper = styled(motion.div)`
    background-color: ${p => p.theme.oddBcg};
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    padding: 60px 20px;
    @media screen and (${devices.desktop}){
        position: sticky;
        width: 160px;
    }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover, &:focus > svg {
        fill: ${p => p.theme.decorativePurpleHover};
    }
    @media screen and (${devices.desktop}){
        display: none;
    }
`

export const CloseIcon = styled(AiOutlineClose)`
    fill: ${p => p.theme.decorativePurple};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
`

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    @media screen and (${devices.tablet}) {
        margin-top: 40px;
    }
    @media screen and (${devices.desktop}) {
        margin-top: 50px;
    }
`

export const PageLink = styled(NavLink)`
    font-family: Manrope, sans-serif;
    font-weight: 500;
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 14px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.active, &:hover, &:focus {
        background-color: ${p => p.theme.decorativePurple};
        color: ${p => p.theme.mainBcg}
    }
    @media screen and (${devices.tablet}) {
        font-size: 16px;
    }
`