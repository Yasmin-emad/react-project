import "./Card.css"
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavorites,
    removeFromFavorites,
} from '../../Store/Actions/FavoriteAction.js'
import { useState } from "react";
import {ReactComponent as Star} from '../../assets/svg/star.svg';

// import { useEffect } from "react";


function MyCard(props){
    console.log(props);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favoriteStore.favorites);
    const favoritesFlag = useSelector((state) => state.favoriteStore.isFavorite);
    console.log(favoritesFlag);
    const movie = props;
    const [Favorite, setFavorite] = useState(false)
    let isFavorite = movie in favorites;

    console.log(isFavorite);
    
    // else{
    //     setFavorite(Favorite);
    // }
    // console.log(Favorite);
    // console.log(movie);
    // console.log(favorites);
    // console.log(isFavorite);


    // if(favoritesFlag){
    //     setFavorite(!Favorite);
    // }

    const isFaved = (value) => {
        // console.log(value);
        console.log(movie);
        if (value) {
        dispatch(removeFromFavorites(movie));
        setFavorite(!Favorite);
        } else {
        dispatch(addToFavorites(movie));
            setFavorite(!Favorite);
        }
        if(favoritesFlag){
            setFavorite(!Favorite);
            console.log(Favorite);
        }
        // console.log(Favorite);
    };
    return(
        <div className="card mx-auto mt-5" style={{width: "60rem"}}>
            {/* , height: "400px" */}
            <div className="row">
                <div className="card-body col-md-8 text-align-center mt-4">
                    <h5 className="card-title text-danger fs-3 mb-4">{props.desc}</h5>
                    <p className="card-text text-dark fs-6 mb-4 mx-4">{props.name}</p>
                    <button className="btn btn-success me-3 fs-5">Watch Now!</button>
                    <button className="btn btn-warning text-white fs-5">Download Movie</button>
                    <span 
                        onClick={() => {
                            isFaved(Favorite);
                        }}>
                        <Star className="text-warning"
                        width="42"
                        height="48"
                        fill = {` ${Favorite ? "yellow" : "grey"}` }
                        size={52} 
                        strokeColor="#f54c4c"
                        pathCss="fill: #f54c4c; cursor: pointer" />
                        {/* {Favorite ? "Remove from favorites" : "Add to favorites"} */}
                    </span>
                </div>
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500${props.img}?api_key=1583bd4a7b0da462480c756403c9bc65`} className="card-img-top movie-card" alt="movie" />
                </div>
            </div>
            
        </div>
    )
}

export default MyCard;