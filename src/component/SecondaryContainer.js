import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const movies = useSelector((store) => store.movies);
   
    return (
        <div className='bg-black'>
            <div className='-mt-40 pl-12 relative z-20 '>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

                <MovieList title={"Populr"} movies={movies.popularMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer