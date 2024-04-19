import styled from "styled-components";

export const FavoritesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 1rem;
    margin-left: 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    

`