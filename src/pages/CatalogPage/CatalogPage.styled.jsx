import styled from "styled-components";
import { devices } from "../../utils/devices";

export const ListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    @media screen and (${devices.desktop}){
        row-gap: 100px;   
    }   
    
`