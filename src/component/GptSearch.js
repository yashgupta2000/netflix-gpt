import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

function GptSearch() {
    return (
        <div>
            <div>
                <img className='absolute -z-10' src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='Background' />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestion />

        </div>
    )
}

export default GptSearch