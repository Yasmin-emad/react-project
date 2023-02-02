// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../../component/Card/Card";
// import Favorites from "../../component/Favorites/Favorites";
import { axiosInstance } from "../../Network/axiosInstance";


function SingleMovie(){
    
    const param = useParams()
    // console.log(id)
    // {id:2}

    const[MyMovie, setMyMovie] = useState({})

    useEffect(() => {
        axiosInstance.get(`/${param.id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
        // https://api.themoviedb.org/3/movie/880009?api_key={apiKey}
        .then((data) => setMyMovie(data.data))
        // .then((data) => console.log(data.data))
        .catch((error) => console.log(error))
    },[])

    return(
        <>
             <h1> Single Movie Details </h1>
             <MyCard  id={MyMovie.id} img={MyMovie.poster_path} desc={MyMovie.original_title} name={MyMovie.overview} />
             {/* <Favorites  id={MyMovie.id} img={MyMovie.poster_path} desc={MyMovie.original_title} name={MyMovie.overview} /> */}
             
        </>
       
    )
}

export default SingleMovie;