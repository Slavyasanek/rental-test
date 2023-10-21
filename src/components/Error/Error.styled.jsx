import {BiError} from 'react-icons/bi';
import styled from 'styled-components';
import { devices } from '../../utils/devices';

export const ErrorIcon = styled(BiError)`
    width: 50px;
    height: 50px;
    fill: ${p => p.theme.decorativePurple};
    flex-shrink: 0;
`;

export const ErrorMessage = styled.p`
    font-size: 16px;
`;

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    @media screen and (${devices.tablet}){
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
`

