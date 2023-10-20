import styled, { css } from "styled-components";
import { devices } from "../../utils/devices";

const left = () => css`
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);
    padding: 14px;
    padding-left: 60px;
    &::before {
        content: 'From';
    }
`

const right = () => css`
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 14px 40px;
    &::before {
        content: "To";
    }
`

export const InputWrapper = styled.div`
    position: relative;
    &::before {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        position: absolute;
        left: 14px;
        top: 14px;
        z-index: 10;
        @media screen and (${devices.desktop}){
        font-size: 18px;
    }
        ${p => {
            if (p.side === 'left') {
                return `content: "From"`;
            } else {
                return `content: "To"`;
            }
        }}
    }
`

export const Box = styled.input`
    background-color: ${p => p.theme.oddBcg};
    border: none;
    width: 160px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    outline: none;
    @media screen and (${devices.desktop}){
        font-size: 18px;
    }
    ${p => {
        if (p.name === 'from') {
            return `${left()}`
        } else if (p.name === 'to') {
            return `${right()}`
        }
    }}
`