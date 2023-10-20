import styled from "styled-components";
import { devices } from "../utils/devices";

export const Wrapper = styled.div`
    min-width: 375px;
    max-width: 375px;
    padding: 0 15px;
    margin: 0 auto;
    @media screen and (${devices.tablet}){
        max-width: 768px;
    }
    @media screen and (${devices.desktop}){
        max-width: 1440px;
    }
`
export const LayoutWrapper = styled.div`
    position: relative;
`

export const SuspenseWrapper = styled.div`
    @media screen and (${devices.maxDesktop}){
        padding-top: 20px;
    }
    @media screen and (${devices.desktop}){
        display: flex;
        column-gap: 50px;
    }
`

export const Container = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    @media screen and (${devices.desktop}){
        padding-top: 150px;
        padding-bottom: 150px;
    }
`