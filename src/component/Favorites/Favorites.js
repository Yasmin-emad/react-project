import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import {
    removeFromFavorites,
} from '../../Store/Actions/FavoriteAction.js'


export default function Favorites() {
    const favorites = useSelector((state) => state.favoriteStore.favorites);
    console.log(favorites);
    const dispatch = useDispatch();


    const removeItem = (list) => {
        dispatch(removeFromFavorites(list));
    };
    
    return (
        <>
        <h1 className="favorites-header">Favorites</h1>
            {/* <div className="favorites">
                
                <div className="content"> */}
                    {Object.values(favorites).map((favorite) => (
                        <div className="card mx-auto mt-5" style={{width: "60rem"}}>
            {/* , height: "400px" */}
            <div className="row">
                <div className="card-body col-md-8 text-align-center mt-4">
                    <h5 className="card-title text-danger fs-3 mb-4">{favorite.desc}</h5>
                    <p className="card-text text-dark fs-6 mb-4 mx-4">{favorite.name}</p>
                    <button className="btn btn-danger me-3 fs-5" onClick={() => removeItem(favorite)}>remove</button>
                </div>
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500${favorite.img}?api_key=1583bd4a7b0da462480c756403c9bc65`} className="card-img-top movie-card" alt="movie" />
                </div>
            </div>
            
        </div>
                    ))}
                {/* </div>
            </div> */}
        </>
    );
  }
  