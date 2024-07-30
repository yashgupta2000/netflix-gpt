import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    
    const getMoviesVideo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`;
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((item) => item.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMoviesVideo();
    }, [])
}

export default useMovieTrailer