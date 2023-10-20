import styled from "styled-components";
import { devices } from "../../utils/devices";
import Skeleton from "react-loading-skeleton"

export const SkeletonWrapper = styled.div`
    & > span {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap:15px;
    @media screen and (${devices.desktop}) {
        gap: 30px;
    }
    }
`

export const StyledSkeleton = styled(Skeleton)`
    width: calc((100% - 15px) / 2);
    height: 240px;
    @media screen and (${devices.tablet}) {
        width: calc((100% - 2 * 15px) / 3);
        height: 350px;
    }
    @media screen and (${devices.desktop}) {
        width: calc((100% - 3 * 30px) / 4);
        height: 430px;
    }
`