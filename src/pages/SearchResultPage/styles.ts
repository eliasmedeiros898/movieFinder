import { Alert } from "react-bootstrap";
import styled from "styled-components";

export const ResultDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100vw;
    height: fit-content;
    gap: 4rem;
    margin-left: 2rem;

    

    a {
        text-decoration: none;
        transition: transform 0.4s ease;
    }

    a:hover{
        transform: scale(1.04);
        
        
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 755px) {
        grid-template-columns: repeat(1, 1fr);
    }

`


export const AlertDiv = styled(Alert)`

    position: absolute;
    top: 50%;
    padding: 2rem;
    left: 50%;
    transform: translate(-50%, -50%);


`