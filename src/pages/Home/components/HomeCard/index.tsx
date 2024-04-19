import { Card } from "react-bootstrap";
import { CustomStar } from "../../styles";
import { useContext, useState } from "react";
import { MoviesContext } from "../../../../contexts/MoviesContext";
import { Heart } from "phosphor-react";
import { CustomCard } from "./styles";
import { useNavigate } from "react-router-dom";
import { FavoriteButton } from "../../../../components/FavoriteButton";


interface HomeCardProps{
    title: string
    id: number
    vote_average: number
    poster_path: string | null
}


export function HomeCard({title, id, vote_average, poster_path}:HomeCardProps) {

    
    const [heartClicked, setHeartClicked] = useState(false);

    const navigate = useNavigate()

    function navigateFoward(){
        navigate(`/movie_page/${id}`)
    }

    



    return(
    
        <CustomCard style={{width:"20rem"}} bg="dark" text="white" onClick={navigateFoward}>
            
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <Card.Body >
                <Card.Title >{title}</Card.Title>
                <Card.Text style={{display:"flex", gap:"1rem", alignItems:"center", justifyContent:"space-between"}}>
                    <div>
                        <CustomStar weight="fill"/> {vote_average.toFixed(1)}
                    </div>
                    <FavoriteButton movieId={id}/>
                
                </Card.Text>
            </Card.Body>
        </CustomCard>
    )
}