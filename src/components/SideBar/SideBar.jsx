import { CloseButton, CloseIcon, Nav, PageLink, SideBarWrapper } from "./SideBar.styled";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import { useEffect, useRef } from "react";
const sideBarVars = {
    initial: { x: '100%', opacity: 0 },
    isOn: { x: '0%',opacity: 1, transition: { type: "spring", stiffness: 100, damping: 18 } },
    exit: { x: '100%', opacity: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
}

export const SideBar = ({ closeMethod, openBtnRef, isOpen }) => {
    const sideBarRef = useRef(null);
    useEffect(() => {
        const closeOnEsc = e => {
            if (e.code === 'Escape') closeMethod();
        }
        const closeOnClickOutside = e => {
            if (sideBarRef.current) {
                if (!sideBarRef.current.contains(e.target) &&
                (openBtnRef.current && !openBtnRef.current.contains(event.target))) {
                    closeMethod()
                }
            }
        }
        if (sideBarRef.current) {
            window.addEventListener("click", closeOnClickOutside);
            window.addEventListener("keydown", closeOnEsc);
        }
        return () => {
            window.removeEventListener("click", closeOnClickOutside);
            window.removeEventListener("keydown", closeOnEsc)
        }
    }, [closeMethod, openBtnRef])

    return (
        <SideBarWrapper
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={sideBarVars}
            ref={sideBarRef}>
            <CloseButton onClick={closeMethod} disabled={!isOpen && true}><CloseIcon /></CloseButton>
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
    closeMethod: PropTypes.func,
    openBtnRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.any })
    ]),
    isOpen: PropTypes.bool
}
