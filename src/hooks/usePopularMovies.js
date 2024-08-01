import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

function usePopularMovies() {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?page=1'
        const data = await fetch(url, API_OPTIONS);
        const jsondata = await data.json();
        dispatch(addPopularMovies(jsondata.results));
    }
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies