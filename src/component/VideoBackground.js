import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieID }) => {

    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
    useMovieTrailer(movieID);
    return (
        <div>
            <iframe className='w-screen aspect-video' mute src={"https://www.youtube.com/embed/"+ trailerVideo?.key + '?&autoplay=1&mute=1  '} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground