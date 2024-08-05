import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();

  const gptSearch = useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? <GptSearch/> :   <MainContainer/>}
      
    
    </div>
  )
}

export default Browse