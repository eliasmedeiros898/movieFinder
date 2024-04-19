import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FavoriteButton } from "../../../../components/FavoriteButton";
import { CustomStar } from "../../styles";
import { CustomCard } from "./styles";


interface HomeCardProps{
    title: string
    id: number
    vote_average: number
    poster_path: string | null
}


export function HomeCard({title, id, vote_average, poster_path}:HomeCardProps) {

    
   

    const navigate = useNavigate()

    function navigateFoward(){
        navigate(`/movie_page/${id}`)
    }

    



    return(
    
        <CustomCard  bg="dark" text="white" onClick={navigateFoward}>
            
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <Card.Body style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Card.Title >{title}</Card.Title>
                <Card.Footer style={{display: "flex",alignItems:"center", gap:"8rem"}}>
                    <div>
                    <CustomStar weight="fill"/> {vote_average.toFixed(1)}
                    </div>
                    <FavoriteButton movieId={id}/>
                </Card.Footer>
                
            </Card.Body>
        </CustomCard>
    )
}