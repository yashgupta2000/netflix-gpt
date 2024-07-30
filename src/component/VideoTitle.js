import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-56 px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/3 pt-8'>{overview}</p>

        <div className='pt-4'>
            <button className='hover:bg-opacity-70 text-xl font-bold bg-white text-black px-10 py-2 rounded-md'>Play</button>
            <button className='hover:bg-opacity-70 mx-2 text-xl font-bold bg-white text-black px-10 py-2 rounded-md'>More Info</button>

        </div>
    </div>
  )
}

export default VideoTitle