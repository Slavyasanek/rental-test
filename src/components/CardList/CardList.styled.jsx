import styled from "styled-components";
import { devices } from "../../utils/devices";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:15px;
    @media screen and (${devices.desktop}) {
        gap: 30px;
    }
`;
