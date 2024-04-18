import { Container, Nav, NavDropdown } from "react-bootstrap";
import {HeaderNavbar, HeaderNavbarBrand} from './styles'

export function Header() {
    return(
    <HeaderNavbar expand="lg" variant='dark' bg="dark" >
      
        <HeaderNavbarBrand href="#home">Movie Finder</HeaderNavbarBrand>
        <HeaderNavbar.Toggle aria-controls="basic-navbar-nav" />
        <HeaderNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
            
          </Nav>
        </HeaderNavbar.Collapse>
      
    </HeaderNavbar>
    )
}