import styled from "styled-components";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


export const HeaderNavbar = styled(Navbar)`
    padding: 1rem;
    display: flex;
    border-bottom: 1px solid ${props => props.theme['gray-500']};
    width: 100vw;

`

export const HeaderNavbarBrand = styled(Navbar.Brand)`

    font-size: larger;
    color: red;
    text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
    

`



