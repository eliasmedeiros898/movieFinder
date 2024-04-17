import { Container, Nav, NavDropdown } from "react-bootstrap";
import {HeaderNavbar,HeaderContainer} from './styles'

export function Header() {
    return(
    <HeaderNavbar expand="lg" className="bg-body-tertiary">
      <HeaderContainer>
        <HeaderNavbar.Brand href="#home">Movie Finder</HeaderNavbar.Brand>
        <HeaderNavbar.Toggle aria-controls="basic-navbar-nav" />
        <HeaderNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
            
          </Nav>
        </HeaderNavbar.Collapse>
      </HeaderContainer>
    </HeaderNavbar>
    )
}