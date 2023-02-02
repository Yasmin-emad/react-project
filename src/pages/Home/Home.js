// import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import "./Home.css";
import arrow from "../../arrow.png"
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavorites,
    removeFromFavorites,
} from '../../Store/Actions/FavoriteAction.js';
import { axiosInstance } from "../../Network/axiosInstance";

function Home(){

    const [movieData, setmovieData ] = useState([])

    console.log(movieData);

    useEffect(() => {
        axiosInstance.get("/popular?api_key=1583bd4a7b0da462480c756403c9bc65",
            {
                params: {
                    page: 3,
                }
            }
        )
        .then((data) => setmovieData(data.data.results))
        .catch((err) => console.log(err))
    }, [])

    const MovieContainers = [...document.querySelectorAll('.Movie-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    MovieContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

    const dispatch = useDispatch();
    // const favorites = useSelector((state) => state.favoriteStore.favorites);
    const favoritesFlag = useSelector((state) => state.favoriteStore.isFavorite);
    console.log(favoritesFlag);
    // const movie = {};
    const [Favorite, setFavorite] = useState(false)
    // let isFavorite = movie in favorites;

    // console.log(isFavorite);
    
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

    const isFaved = (value, movie) => {
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
        <>
            {/* <h1> Movie List  </h1> */}
            {/* <ul className="row list-unstyled"> */}
            <section className="Movie"> 
        <h2 className="Movie-category">best selling</h2>
        <button className="pre-btn"><img src={arrow} alt="" /></button>
        <button className="nxt-btn"><img src={arrow} alt="" /></button>
        <div className="Movie-container">

                {movieData.map((single) =>   {
                    return(
                        // <li key={single.id} className="col-4 mb-5 mt-3"> 
                        //     <Link to={`/Single/${single.id}`}>  
                        //     <div className="">
                        //     <div className="movie-image"> 
                        //             <h4 className="name w-100">
                        //                 {single.original_title}
                        //             </h4>
                        //         {/* <a href="#"> */}
                        //             <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`} alt=""className="w-100" />
                        //         {/* </a>  */}
                        //     </div>
                        //     </div>
                        //     </Link>
                        // </li>
                        <div className="Movie-card">
                        <div className="Movie-image">
                            <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`} alt=""className="w-100" />
                            <button className="card-btn" onClick={() => {
                            isFaved(Favorite, {id: single.id, desc:single.original_title, img: single.poster_path, name: single.overview});
                            }}>
                            {Favorite ? "Remove from favorites" : "Add to favorites"}
                            </button>
                        </div>
                        <div className="Movie-info">
                            <h2 className="Movie-brand">{single.title}</h2>
                            <p className="Movie-short-description">popularity: {single.popularity}</p>
                        </div>
                    </div>
                    )
                })}
            {/* </ul> */}
            </div>
            </section>
        </>
    )
}

export default Home;