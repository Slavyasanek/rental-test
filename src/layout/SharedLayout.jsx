import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, LayoutWrapper, SuspenseWrapper, Wrapper } from "./SharedLayout.styled";
import { SideBar } from "../components/SideBar/SideBar";
import { Header } from "../components/Header/Header";
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AnimatePresence } from "framer-motion";

export const SharedLayout = () => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    const openBtnRef = useRef(null);
    const isDesktop = useMediaQuery('(min-width: 1440px)')
    const closeSideBar = () => setIsOpenSideBar(false);
    const openSideBar = () => setIsOpenSideBar(true);

    useEffect(() => {
        if (isDesktop) setIsOpenSideBar(true);
    }, [isDesktop])

    return (
        <Wrapper>
            <LayoutWrapper>
                {!isDesktop && <Header openMethod={openSideBar} ref={openBtnRef} isOpen={isOpenSideBar}/>}
                <SuspenseWrapper>
                    <AnimatePresence>
                        {isOpenSideBar && <SideBar closeMethod={closeSideBar} openBtnRef={openBtnRef} isOpen={isOpenSideBar}/>}
                    </AnimatePresence>
                    <Container>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </Container>
                </SuspenseWrapper>
            </LayoutWrapper>
        </Wrapper>
    )
};
