import React from 'react'
import { IMG_CDN } from '../utils/constant'

function MovieCard({posterPath}) {
    console.log(posterPath);
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard