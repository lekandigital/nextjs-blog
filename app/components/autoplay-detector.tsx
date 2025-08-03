"use client"

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { AudioPlayerWrapper } from './audio-player-wrapper'

interface AutoplayDetectorProps {
  audioSrc: string
  title: string
  nextSlug?: string
  essayContent: string
}

function AutoplayDetectorInner(props: AutoplayDetectorProps) {
  const searchParams = useSearchParams()
  const autoplay = searchParams.get('autoplay') === 'true'
  
  return <AudioPlayerWrapper {...props} autoplay={autoplay} />
}

export function AutoplayDetector(props: AutoplayDetectorProps) {
  return (
    <Suspense fallback={<div>Loading audio player...</div>}>
      <AutoplayDetectorInner {...props} />
    </Suspense>
  )
}
