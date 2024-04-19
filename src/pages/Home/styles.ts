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

export const MovieCardWrapper = styled.div`
    display: flex;
    gap: 1rem;
    width: fit-content;
    height: fit-content;
    
    a {
        text-decoration: none;
        transition: transform 0.4s ease;
    }

    a:hover{
        transform: scale(1.04);
        
        
    }

`

export const SectionTitle = styled.div`
    position: sticky;
    top: 1px;
    left: 1px;

`



export const MovieSection = styled.div`

    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    margin-top: 2rem;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;

    :-webkit-scrollbar {
        background: none;
    }

    :-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
    }

    :-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

`