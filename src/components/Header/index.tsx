import { MagnifyingGlass } from "phosphor-react";
import { useContext, useState } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../contexts/MoviesContext";
import { HeaderNavbar, HeaderNavbarBrand } from './styles';

interface SearchProps{
  text: string
  page?: number
}

export function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {searchMovies} = useContext(MoviesContext)
  
  const {register,reset,handleSubmit} = useForm<SearchProps>()


  async function handleSearch(data:SearchProps) {
    const text = data.text
    const page = 1
    await searchMovies(text,page)
    handleClose()
    reset()
    navigate('/search_result')
  }

    return(
    <>
    <HeaderNavbar expand="lg" variant='dark' bg="none" style={{width:"100vw"}}>
      
        <HeaderNavbarBrand href="/">Movie Finder</HeaderNavbarBrand>
          <HeaderNavbar.Toggle aria-controls="basic-navbar-nav" />
          <HeaderNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/favorites">Favoritos</Nav.Link>
              <Nav.Link href="#" onClick={handleShow}><MagnifyingGlass/></Nav.Link>
              
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


