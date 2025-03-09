import React, { useState } from 'react';
import './BottomInfoBar.css';
import { Pause, Play } from 'lucide-react';

const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', cover: 'src/assets/momo-img.jpeg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', cover: 'src/assets/momo-img.jpeg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', cover: 'src/assets/momo-img.jpeg' },
    { id: 4, title: 'Song 4', artist: 'Artist 4', cover: 'src/assets/momo-img.jpeg' },
    { id: 5, title: 'Song 5', artist: 'Artist 5', cover: 'src/assets/momo-img.jpeg' },
    { id: 6, title: 'Song 6', artist: 'Artist 6', cover: 'src/assets/momo-img.jpeg' },
    { id: 7, title: 'Song 7', artist: 'Artist 7', cover: 'src/assets/momo-img.jpeg' },
    { id: 8, title: 'Song 8', artist: 'Artist 8', cover: 'src/assets/momo-img.jpeg' },
    { id: 9, title: 'Song 9', artist: 'Artist 9', cover: 'src/assets/momo-img.jpeg' },
    { id: 10, title: 'Song 10', artist: 'Artist 10', cover: 'src/assets/momo-img.jpeg' },
    { id: 11, title: 'Song 11', artist: 'Artist 11', cover: 'src/assets/momo-img.jpeg' },
    { id: 12, title: 'Song 12', artist: 'Artist 12', cover: 'src/assets/momo-img.jpeg' },
    { id: 13, title: 'Song 13', artist: 'Artist 13', cover: 'src/assets/momo-img.jpeg' },
    { id: 14, title: 'Song 14', artist: 'Artist 14', cover: 'src/assets/momo-img.jpeg' },
    { id: 15, title: 'Song 15', artist: 'Artist 15', cover: 'src/assets/momo-img.jpeg' },
    { id: 16, title: 'Song 16', artist: 'Artist 16', cover: 'src/assets/momo-img.jpeg' },
    { id: 17, title: 'Song 17', artist: 'Artist 17', cover: 'src/assets/momo-img.jpeg' },
    { id: 18, title: 'Song 18', artist: 'Artist 18', cover: 'src/assets/momo-img.jpeg' },
    { id: 19, title: 'Song 19', artist: 'Artist 19', cover: 'src/assets/momo-img.jpeg' },
    { id: 20, title: 'Song 20', artist: 'Artist 20', cover: 'src/assets/momo-img.jpeg' },
    { id: 21, title: 'Song 21', artist: 'Artist 21', cover: 'src/assets/momo-img.jpeg' },
    { id: 22, title: 'Song 22', artist: 'Artist 22', cover: 'src/assets/momo-img.jpeg' },
    { id: 23, title: 'Song 23', artist: 'Artist 23', cover: 'src/assets/momo-img.jpeg' },
    { id: 24, title: 'Song 24', artist: 'Artist 24', cover: 'src/assets/momo-img.jpeg' },
    { id: 25, title: 'Song 25', artist: 'Artist 25', cover: 'src/assets/momo-img.jpeg' }
];

const BottomInfoBar = () => {
    const [currentPlaying, setCurrentPlaying] = useState(null);

    const togglePlay = (songId) => {
        setCurrentPlaying((prev) => (prev === songId ? null : songId));
    };

    return (
        <div className="flex items-center justify-start overflow-x-auto backdrop-blur-md bottom-status-bar">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center justify-center relative current-song-info-box">
                    <div className="text-sm mb-8 font-bold backdrop-blur-sm absolute show-opacity-onhover">
                        {song.title}
                    </div>
                    <button
                        className={`p-3 mb-2 me-4 rounded-full bg-green-600 absolute play-button ${currentPlaying === song.id ? `always-visible` : ``}`}
                        onClick={() => togglePlay(song.id)}
                    >
                        {currentPlaying === song.id ? <Pause className="play-icon" /> : <Play className="play-icon" />}
                    </button>
                    <img src={song.cover} alt={song.title} className="song-img" />
                </div>
            ))}
        </div>
    );
};

export default BottomInfoBar;
