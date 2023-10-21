import styled from "styled-components";
import { devices } from "../../utils/devices";

export const ImageWrapper = styled.div`
    min-width: 200px;
    height: 230px;
    @media screen and (${devices.tablet}){
        min-width: 50%;
    }
    @media screen and (${devices.desktop}) {
        min-width: 500px;
        height: 300px;
    }
`

export const Description = styled.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.05px;
    text-align: center;
    & > span, & > p > span  {
        color: ${p => p.theme.decorativePurple};
        font-weight: 500;
    }
    @media screen and (${devices.tablet}) {
        font-size: 16px;
    }
    @media screen and (${devices.desktop}){
        font-size: 20px;
        min-width: 500px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media screen and (${devices.tablet}){
        flex-direction: row;
    }
    @media screen and (${devices.desktop}) {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
    }
`


