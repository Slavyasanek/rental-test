import styled from "styled-components";
import Sale from "../../assets/car-sale.svg?react";
import { devices } from "../../utils/devices";

export const TitleWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 18px;
    column-gap: 8px;
    @media screen and (${devices.desktop}) {
        margin-bottom: 30px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    @media screen and (${devices.desktop}) {
        font-size: 28px;
    }
`

export const Icon = styled(Sale)`
    width: 24px;
    height: 24px;
    fill: ${p => p.theme.mainText};
    @media screen and (${devices.desktop}){
       width: 30px;
       height: 30px; 
    }
`

export const EmptyNotification = styled.p`
    line-height: 1.42;
    font-size: 16px;
    color: ${p => p.theme.oddText};
`
