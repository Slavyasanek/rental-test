import { CloseButton, CloseIcon, Nav, PageLink, SideBarWrapper } from "./SideBar.styled";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
const sideBarVars = {
    initial: { x: '100%', opacity: 0 },
    isOn: { x: '0%',opacity: 1, transition: { type: "spring", stiffness: 100, damping: 18 } },
    exit: { x: '100%', opacity: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
}

export const SideBar = ({ closeMethod }) => {
    return (
        <SideBarWrapper
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={sideBarVars}
        >
            <CloseButton onClick={closeMethod}><CloseIcon /></CloseButton>
            <Logo/>
            <nav>
                <Nav>
                    <li><PageLink to={'/'}>Home</PageLink></li>
                    <li><PageLink to={'/catalog'}>Catalog</PageLink></li>
                    <li><PageLink to={'favorites'}>Favourite</PageLink></li>
                </Nav>
            </nav>
        </SideBarWrapper>
    )
};

SideBar.propTypes = {
    closeMethod: PropTypes.func
}
