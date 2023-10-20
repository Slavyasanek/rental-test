import { LogoWrapper, LogoIcon } from "./Logo.styled";
import logo from '../../assets/logo.png';

export const Logo = () => {
    return (
        <LogoWrapper to={'/'}><p>CarRent</p>
        <LogoIcon src={logo} width={'20px'} alt="logo"/>
        </LogoWrapper>
    )
};
