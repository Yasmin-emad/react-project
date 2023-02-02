
const InitialValues = {
    favorites: [],
    isFavorite: false
}

export default function FavoriteReducer(state = InitialValues, action){
    let newFavorite = [...state.favorites];
    let isFavorited = false;
    const MOVIE_INDEX = newFavorite.findIndex(movie => movie.id === action.payload.id)
    if(MOVIE_INDEX <= -1){
        newFavorite = newFavorite.concat({...action.payload})
        isFavorited = true;
    }
    else{
        newFavorite = newFavorite.map((movie) => {
            if(movie.id === action.payload.id){
                return {...movie}
            }else{
                return movie;
            }
        })
        isFavorited = false;
    }
    console.log(action.payload);
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return{
                ...state,
                // favorites: state.favorites.concat(action.payload),
                favorites: newFavorite,
                isFavorite: isFavorited
            };
            case "REMOVE_FROM_FAVORITES":
                let removeFavorite = [...state.favorites];
                removeFavorite = removeFavorite.filter(movie => movie.id !== action.payload)
                console.log(removeFavorite);
            return {
                ...state,
                favorites: removeFavorite
            };
        default: 
            return state

    }

}