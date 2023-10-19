import { Logo } from "../Logo/Logo";
import { Burger, HeaderWrapper, MenuButton } from "./Header.styled";
import PropTypes from "prop-types";

export const Header = ({openMethod}) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <MenuButton onClick={openMethod}><Burger/></MenuButton>
        </HeaderWrapper>
    )
};

Header.propTypes = {
    openMethod: PropTypes.func
}