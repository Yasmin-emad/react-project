
const InitialValues = {
    list: []
}

export default function MovieReducer(state = InitialValues, action){

    switch(action.type){
        case "MOVIE_LIST":
            return{
                ...state,
                list: action.payload
            };
        default: 
            return state

    }

}