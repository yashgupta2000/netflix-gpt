import React from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

function useNowPlayingMovie() {
    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
        const data = await fetch(url, API_OPTIONS);
        const jsondata = await data.json();
        dispatch(addNowPlayingMovies(jsondata.results));
    }
    useEffect(() => {
        getNowPlayingMovie();
    }, [])

}

export default useNowPlayingMovie