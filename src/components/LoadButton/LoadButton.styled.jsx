import styled from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    color: ${p => p.theme.decorativePurple};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
    align-self: center;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        color: ${p => p.theme.decorativePurpleHover};
    }
`;
