// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import './Movie-list.css';
import { MovieAction } from "../../Store/Actions/MovieAction";

function MovieList(){

    const dispatch = useDispatch();
    const Movie = useSelector((state)=> state.ListStore.list)
    useEffect(() => {
        dispatch(MovieAction())
    }, [])
    return(
        <>
            <h1> Movie List  </h1>
            <ul className="row list-unstyled">
                {Movie.map((single) =>   {
                    return(
                        <li key={single.id} className="col-4 mb-5 mt-3"> 
                            <div className="d-flex flex-row justify-content-between">
                                <h4 className="name w-100 fs-5">
                                    {single.original_title}
                                </h4>
                            </div>
                            <Link to={`/Single/${single.id}`}>  
                            
                            <div className="w-100 h-100">
                                <div className="movie-image"> 
                                    <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`} alt=""className="w-100 h-100" />                                
                                </div>
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MovieList;