import { forwardRef } from "react";
import { Logo } from "../Logo/Logo";
import { Burger, HeaderWrapper, MenuButton } from "./Header.styled";
import PropTypes from "prop-types";

export const Header = forwardRef(function Header ({openMethod, isOpen}, ref) {
    return (
        <HeaderWrapper>
            <Logo/>
            <MenuButton onClick={openMethod} ref={ref} disabled={isOpen && true}><Burger/></MenuButton>
        </HeaderWrapper>
    )
});

Header.propTypes = {
    openMethod: PropTypes.func,
    isOpen: PropTypes.bool
}
