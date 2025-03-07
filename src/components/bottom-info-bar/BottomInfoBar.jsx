import React from 'react'
import './BottomInfoBar.css'

const BottomInfoBar = () => {
    return (
        <>
            <div className="flex items-center justify-start backdrop-blur-md bottom-status-bar">

                <div className="flex items-center justify-center">
                    <div className="text-sm font-bold backdrop-blur-sm absolute show-opacity-onhover">Song Title</div>
                    <img src="https://static.vecteezy.com/system/resources/previews/037/044/052/non_2x/ai-generated-studio-shot-of-black-headphones-over-music-note-explosion-background-with-empty-space-for-text-photo.jpg" alt="Song Cover Image" className='song-img' />
                </div>

            </div>
        </>
    )
}

export default BottomInfoBar