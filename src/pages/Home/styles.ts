import { Heart, Star } from "phosphor-react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    


`

export const CustomCarousel = styled(Carousel)`
    width: 100vw;
    height: 70vh;
    margin-top: -6rem;
    
    
    
    img {
        width: 100vw;
        height: 90vh;
        
    }
    

    .carousel-control-next, .carousel-control-prev{
        z-index: 0;
    }

    @media screen and (max-width: 768px) {
        height: 50vh;

        img{
            height: 70vh;
        }
    }

    @media screen and (max-width: 576px) {
        height: 30vh;
    }
    @media screen and (max-width: 400px) {
        img{
            height: 50vh;
        }
    }
`

export const CustomCarouselCaption = styled(Carousel.Caption)`
    
    position: absolute;
    top: 30rem;
    text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;

     @media screen and (max-width: 768px) {
        top: 19rem;

        
    }

    @media screen and (max-width: 576px) {
        top: 8rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 20px;
    }


`

export const MovieCardWrapper = styled.div`
    display: flex;
    gap: 1rem;
    width: fit-content;
    height: fit-content;
    
    
    
    
    button {
        background: none;
        border: none;

    }

    button:hover{
        
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

export const CustomStar = styled(Star)`
    color: yellow;


`

export const CustomHeart = styled(Heart)`
    color: red;
    z-index: 2;
    


`