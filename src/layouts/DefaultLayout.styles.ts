import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/crown.svg';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoLink = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const LogoImage = styled(Logo)``;

export const NavLinkCollection = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
