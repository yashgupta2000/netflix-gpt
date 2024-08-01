import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import SecondaryContainer from './SecondaryContainer';

function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview, id
    } = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id} />
            <SecondaryContainer/>
        </div>
    )
}

export default MainContainer