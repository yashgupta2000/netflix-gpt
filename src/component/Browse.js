import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  )
}

export default Browse