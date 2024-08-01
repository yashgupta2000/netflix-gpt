import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  )
}

export default Browse