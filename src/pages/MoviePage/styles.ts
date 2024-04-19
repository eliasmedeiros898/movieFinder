import styled from "styled-components";




export const MovieDetails = styled.div`
  
  border: 1px solid red;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  
`;

export const Poster = styled.img`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  position: relative;
  
  
  
  
`;

export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    margin-top: 10rem;
    margin-left: 4rem;
    width: 50vw;
    backdrop-filter: blur(10px);
    padding: 2rem;
    align-items: flex-start;
    justify-content: space-between;
    

    h1{
        font-size: 64px;
    }

`;

export const ReleaseDate = styled.div`
    p{
        color: yellow;
        
    }

`;

export const AverageVote = styled.div``;


export const Content = styled.div`
    position: absolute;
    top:0;
    width: 100vw;
    height: 80vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    color: white;


`