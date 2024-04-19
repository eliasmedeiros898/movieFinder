import { Alert } from "react-bootstrap";
import styled from "styled-components";

export const ResultDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80rem;
    height: fit-content;
    gap: 1rem;
    margin-left: 2rem;

    

    a {
        text-decoration: none;
        transition: transform 0.4s ease;
    }

    a:hover{
        transform: scale(1.04);
        
        
    }

`


export const AlertDiv = styled(Alert)`

    position: absolute;
    top: 50%;
    padding: 2rem;
    left: 50%;
    transform: translate(-50%, -50%);


`