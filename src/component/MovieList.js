import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {
  
    return (
        <div className='px-6'>
            <h1 className='text-2xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scroll-smooth '>
                

                <div className='flex'>
                    {movies?.map((item)=>(
                        <>
                        <MovieCard posterPath={item.poster_path} />
                        
                        </>
                    ))}
                    
                </div>
            </div>




        </div>
    )
}

export default MovieList