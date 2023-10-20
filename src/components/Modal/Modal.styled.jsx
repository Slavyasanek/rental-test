import styled from "styled-components";
import { devices } from "../../utils/devices";
import { AiOutlineClose } from 'react-icons/ai';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: ${p => p.theme.greyText};
`

export const ModalBox = styled.div`
    background-color: ${p => p.theme.mainBcg};
    border-radius: 24px;
    padding: 14px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    position: relative;
    @media screen and (${devices.tablet}){
        padding: 20px;
    }
    @media screen and (${devices.desktop}){
        padding: 40px;
        max-width: 540px;
        margin-top: 150px;
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
        fill: ${p => p.theme.decorativePurple};
    }
    @media screen and (${devices.desktop}) {
        top: 16px;
        right: 16px;
    }
`
export const CloseIcon = styled(AiOutlineClose)`
    fill: ${p => p.theme.mainText};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
    @media screen and (${devices.desktop}){
        width: 24px;
        height: 24px;
    }
`

export const ImageWrapper = styled.div`
    border-radius: 14px;
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    @media screen and (${devices.desktop}){
        height: 248px;
        margin-bottom: 14px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Description = styled.p`
    line-height: 1.42;
    margin-bottom: 24px;
    font-size: 12px;
    @media screen and (${devices.tablet}){
        font-size: 14px;
    }
`

export const Subtitle = styled.p`
    line-height: 1.42;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 12px;
    @media screen and (${devices.tablet}){
        font-size: 14px;
    }
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    & > span {
        color: ${p => p.theme.decorativePurple};
    }
`

export const Conditions = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`

export const ConditionItem = styled.li`
    background-color: ${p => p.theme.oddBcg};
    border-radius: 35px;
    padding: 7px 14px;
`

export const ConditionText = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: ${p => p.theme.lightGrey};
    & > span {
        font-weight: 600;
        color: ${p => p.theme.decorativePurple};
    }
`

