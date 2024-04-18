import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { MoviesContext } from "../../contexts/MoviesContext";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const CustomCarousel = styled(Carousel)`
    display: flex;
    width: 100vw;
    height: 50vh;
    text-align: center;
    
    img {
        width: 100vw;
    }
`

export const CustomCarouselCaption = styled(Carousel.Caption)`
    
    position: absolute;
    top: 19rem;
    text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;


`