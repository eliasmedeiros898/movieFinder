import { Nav, Modal, Button } from "react-bootstrap";
import { HeaderNavbar, HeaderNavbarBrand, SearchButton } from './styles';
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SearchProps{
  text: string
}

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const {register,reset,handleSubmit} = useForm<SearchProps>()


  function handleSearch(data:SearchProps) {
    const text = data.text


    handleClose()
    reset()

    
  }

    return(
    <>
    <HeaderNavbar expand="lg" variant='dark' bg="none">
      
        <HeaderNavbarBrand href="#home">Movie Finder</HeaderNavbarBrand>
        <HeaderNavbar.Toggle aria-controls="basic-navbar-nav" />
        <HeaderNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Categorias</Nav.Link>
            <Nav.Link href="#" onClick={handleShow}>Search</Nav.Link>
            
          </Nav>
        </HeaderNavbar.Collapse>
      
    </HeaderNavbar>

      
            <Modal show={show} onHide={handleClose} data-bs-theme='dark' >
            <form onSubmit={handleSubmit(handleSearch)}>
              <Modal.Header closeButton>
                <Modal.Title>Qual filme deseja ver hoje?</Modal.Title>
              </Modal.Header>
              <Modal.Body><input {...register('text')}></input></Modal.Body>
              <Modal.Footer>
                
                <Button variant="light" type="submit">Search</Button>
              </Modal.Footer>
            </form>
          </Modal>
      
      
      </>
    )
}


