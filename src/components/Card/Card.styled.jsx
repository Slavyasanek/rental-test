import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { devices } from "../../utils/devices";

export const CardBox = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;

export const ImageWrapper = styled.div`
position: relative;
width: 100%;
height: 120px;
overflow: hidden;
border-radius: 14px;
@media screen and (${devices.tablet}) {
    height: 200px;
}
@media screen and (${devices.desktop}) {
    height: 266px;
}
`

export const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const LikeButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    top: 14px;
    right: 14px;
`

export const LikeIconOutline = styled(AiOutlineHeart)`
fill: ${p => p.theme.decorativeWhite};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus {
fill: ${p => p.theme.decorativePurple};
}
`
export const LikeIconFilled = styled(AiFillHeart)`
fill: ${p => p.theme.decorativePurple};
width: 18px;
height: 18px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`

export const CharacteristicBox = styled.div`
    margin-top: 7px;
    @media screen and (${devices.desktop}) {
        margin-top: 14px;
    }
`

export const CardTitle = styled.p`
    font-size: 10px;
    font-weight: 500;
    line-height: 1.5;
    @media screen and (${devices.tablet}){
        font-size: 14px;
    }
    @media screen and (${devices.desktop}) {
        font-size: 16px;
    }
`

export const CardTitleOutline = styled.span`
    color: ${p => p.theme.decorativePurple};
`

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

export const LearnButton = styled.button`
    background-color: ${p => p.theme.decorativePurple};
    border-radius: 12px;
    border: none;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    color: ${p => p.theme.mainBcg};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.42;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (${devices.desktop}){
        font-size: 14px;
    }
    &:hover, &:focus {
        background-color: ${p => p.theme.decorativePurpleHover};
    }
`
