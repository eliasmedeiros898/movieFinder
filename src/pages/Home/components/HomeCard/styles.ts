import { Card } from "react-bootstrap";
import styled from "styled-components";


export const CustomCard = styled(Card)`

    
    text-decoration: none;
    transition: transform 0.4s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.04);
        
        
    }

    button {
        background: none;
        border: none;
    }


`

