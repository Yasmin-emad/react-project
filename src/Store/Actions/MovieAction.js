import { axiosInstance } from "../../Network/axiosInstance"

export const MovieAction = () => (dispatch) => {
    return axiosInstance.get("/popular?api_key=1583bd4a7b0da462480c756403c9bc65")
    
    .then((res) => {
        dispatch({
        type: "MOVIE_LIST",
        payload: res.data.results
        
        });
    })
    .catch((err) => console.log(err))
}