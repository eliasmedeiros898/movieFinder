import { Navbar } from "react-bootstrap";
import styled from "styled-components";


export const HeaderNavbar = styled(Navbar)`
    padding: 1rem;
    min-height: 5rem;
    
    align-items: center;
    width: auto;
    display: flex;
    width: 100vw;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    z-index: 1;

`

export const HeaderNavbarBrand = styled(Navbar.Brand)`

    font-size: larger;
    color: red;
    text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
    
     
     transition: 0.5s;

`






