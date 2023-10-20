import styled from "styled-components";
import { devices } from "../../utils/devices";

export const Keywords = styled.ul`
    display: flex;
    width: 100%;
    column-gap: 6px;
    margin-bottom: 4px;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (${devices.desktop}){
        column-gap: 12px;
    }
`

export const Key = styled.li`
    color: ${p => p.theme.greyText};
    font-size: 10px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    &:last-child {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (${devices.desktop}){
        font-size: 12px;
    }
    &:not(:last-child) {
        &::after {
            position: absolute;
            content: "";
            height: 100%;
            width: 0.1px;
            right: -3px;
            top: 0;
            background-color: rgba(18, 20, 23, 0.10);;
            display: block;
            @media screen and (${devices.desktop}) {
                right: -6px;
            }
        }
    }
`