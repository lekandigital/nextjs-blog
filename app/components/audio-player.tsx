"use client"

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AudioPlayerProps {
  audioSrc: string
  title: string
  nextSlug?: string
  autoplay?: boolean
}

export function AudioPlayer({ audioSrc, title, nextSlug, autoplay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const router = useRouter()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnd = () => {
      setIsPlaying(false)
      // Auto-navigate to next essay if it exists
      if (nextSlug) {
        setTimeout(() => {
          router.push(`/essays/${nextSlug}?autoplay=true`)
        }, 2000) // 2 second delay
      }
    }

    const handleCanPlay = async () => {
      // Check if we should autoplay (from prop)
      if (autoplay) {
        try {
          await audio.play()
          setIsPlaying(true)
        } catch (error) {
          // Autoplay failed (likely due to browser policy)
          console.log('Autoplay failed:', error)
          // You could show a play button or notification here
        }
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnd)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnd)
      audio.removeEventListener('canplay', handleCanPlay)
    }
    }, [nextSlug, router, autoplay])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div style={{
      background: '#fafafa',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '32px'
    }}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <button
          onClick={togglePlayPause}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            background: isPlaying ? '#1a1a1a' : '#ffffff',
            color: isPlaying ? '#ffffff' : '#1a1a1a',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            transition: 'all 0.15s ease'
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#1a1a1a',
            marginBottom: '4px'
          }}>
            {title}
          </div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <div
        onClick={handleSeek}
        style={{
          width: '100%',
          height: '4px',
          background: '#e0e0e0',
          borderRadius: '2px',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <div
          style={{
            width: `${duration ? (currentTime / duration) * 100 : 0}%`,
            height: '100%',
            background: '#1a1a1a',
            borderRadius: '2px',
            transition: 'width 0.1s ease'
          }}
        />
      </div>
    </div>
  )
}