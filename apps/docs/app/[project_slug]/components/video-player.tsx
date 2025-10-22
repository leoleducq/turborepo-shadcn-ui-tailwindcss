"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
  poster?: string;
  style?: React.CSSProperties;
  preview?: boolean; // Mode preview pour la homepage
}

export default function VideoPlayer({
  src,
  className,
  poster,
  style,
  preview = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    const rect = progress.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    video.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const accentColor = "rgb(255, 0, 0)";

  return (
    <div
      className={cn(
        "relative group overflow-hidden border border-[rgb(255,0,0)] bg-white",
        className
      )}
      style={style}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="h-full w-full object-cover"
        onClick={preview ? undefined : togglePlay}
        muted={preview}
        autoPlay={preview}
        loop={preview}
        playsInline={preview}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[rgb(255,0,0)] border-t-white" />
        </div>
      )}

      {!preview && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 border-t border-[rgb(255,0,0)] bg-white p-4 transition-transform duration-300 ease-out",
            showControls
              ? "translate-y-0"
              : "translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0"
          )}
        >
          <div
            ref={progressRef}
            className="mb-3 h-1 w-full cursor-pointer border border-[rgb(255,0,0)]"
            onClick={handleProgress}
          >
            <div
              className="h-full bg-[rgb(255,0,0)] transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[rgb(255,0,0)]">
            <button onClick={togglePlay} className="uppercase">
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>

            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="uppercase">
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16"
                style={{ accentColor }}
              />
            </div>

            <div className="text-sm font-mono uppercase tracking-wide">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <button onClick={toggleFullscreen} className="uppercase">
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
