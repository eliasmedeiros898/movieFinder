import styled from "styled-components";




export const MovieDetails = styled.div`
  margin-top: -6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
  
`;

export const Poster = styled.img`
  width: 100vw;
  height: 100.9vh;
  object-fit: cover;
  position: relative;
  
  
  
  
`;

export const Overview = styled.div`
    flex-direction: column;
    
    border-radius: 6px;
    border: 1px solid ${props => props.theme['gray-300']};
    margin-top: 10rem;
    margin-left: 4rem;
    width: 70vw;
    backdrop-filter: blur(10px);
    padding: 2rem;
    align-items: flex-start;
    justify-content: space-between;
    

    h1{
        font-size: 64px;
    }

    p{
        font-size: 29px;
    }

`;

export const ReleaseDate = styled.div`
    p{
        color: yellow;
        
    }

`;

export const AverageVote = styled.div`
    color: ${props => {
        if(props.property){
            const voteAverage = parseFloat(props.property);
        if (voteAverage < 7) {
            return 'red'; 
        } else if (voteAverage >= 7 && voteAverage < 8) {
            return 'yellow'; 
        } else {
            return 'green'; 
    }
        }
        
    }};

    h2{
        color: white;
    }

`;


export const Content = styled.div`
    position: absolute;
    display: flex;
    margin-top: -60rem;
    width: 100vw;
    height: 80vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    color: white;
    font-family: "Varela Round", sans-serif;
    
    


`