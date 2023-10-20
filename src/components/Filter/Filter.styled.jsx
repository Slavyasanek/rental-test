import styled from "styled-components";
import { devices } from "../../utils/devices";

export const FilterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 20px;
    @media screen and (${devices.desktop}){
        margin-bottom: 50px;
        gap: 18px;
    }
`

export const Label = styled.label`
    color: ${p => p.theme.oddText};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FilterButton = styled.button`
    background-color: ${p => p.theme.decorativePurple};
    border: none;
    border-radius: 12px;
    padding: 14px 44px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42; 
    color: ${p => p.theme.mainBcg};
    height: 48px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    align-self: flex-end;
    &:hover, &:focus {
        background-color: ${p => p.theme.decorativePurpleHover};
    }
`