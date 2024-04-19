import styled from "styled-components";
import { Navbar, Container, Nav, NavDropdown, Modal } from "react-bootstrap";


export const HeaderNavbar = styled(Navbar)`
    padding: 1rem;
    min-height: 5rem;
    width: 100vw;
    display: flex;
    width: 100vw;
    background: ${props => props.theme['gray-700']};

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

export const SearchButton = styled.button`


`




