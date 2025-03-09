import { Play, SkipBack, SkipForward } from 'lucide-react'
import React from 'react'

const Controls = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col">
                <div className='flex justify-center items-center w-full p-4 gap-16 mt-12'>

                    <button className="p-12 rounded-full border dark:border-cyan-800 border-blue-300 backdrop-blur-sm cursor-pointer hover:scale-105 duration-200">
                        <SkipBack size={32} />
                    </button>
                    <button className="p-20 rounded-full border dark:border-cyan-800 border-blue-300 backdrop-blur-sm cursor-pointer hover:scale-105 duration-200">
                        <Play size={62} />
                    </button>
                    <button className="p-12 rounded-full border dark:border-cyan-800 border-blue-300 backdrop-blur-sm cursor-pointer hover:scale-105 duration-200">
                        <SkipForward size={32} />
                    </button>

                </div>
                <div className="flex items-center justify-center flex-col mt-12">
                    <div className="text-2xl font-bold backdrop-blur-md">Song Title</div>
                    <div className="text-sm font-semibold backdrop-blur-md mt-2">Artist Name</div>

                    <div className="flex items-center justify-center mt-4 gap-2.5">
                        <span>00:00</span>
                        <input type="range" className="w-2xl backdrop-blur-md" />
                        <span>00:00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Controls