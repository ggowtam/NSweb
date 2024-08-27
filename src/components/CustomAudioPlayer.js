// src/components/CustomAudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/CustomAudioPlayer.scss';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const CustomAudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : 1;
  }, [isMuted]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    const progressBar = document.querySelector('.progress-bar');
    const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    progressBar.style.setProperty('--fill-percentage', `${percentage}%`);
  };
  

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    const seekTo = event.target.value;
    audioRef.current.currentTime = seekTo;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="custom-audio-player">
      <div className="time-display">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="progress-bar"
      />
      <div className="controls">
        <button onClick={handlePlayPause} className="play-pause-button">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={toggleMute} className="mute-button">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default CustomAudioPlayer;
