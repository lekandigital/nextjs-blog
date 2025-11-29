"use client"

import { useEffect, useRef } from 'react'
import { AudioPlayer } from './audio-player'

interface AudioPlayerWrapperProps {
  audioSrc: string
  title: string
  nextSlug?: string
  essayContent: string
  autoplay?: boolean
}

export function AudioPlayerWrapper({ audioSrc, title, nextSlug, essayContent, autoplay = false }: AudioPlayerWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const positionPlayer = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      // Determine placement priority based on content
      const hasMainImage = essayContent.includes('alt="Main image"')
      const hasH4 = essayContent.includes('#### ')
      
      let targetElement: Element | null = null

      if (hasMainImage) {
        const mainImage = document.querySelector('img[alt="Main image"]')
        if (mainImage) {
          targetElement = mainImage.closest('div')
        }
      } else if (hasH4) {
        targetElement = document.querySelector('.essay-content h4')
      }

      if (targetElement && targetElement.parentNode) {
        // Remove from current position
        wrapper.remove()
        
        // Insert after target element
        targetElement.insertAdjacentElement('afterend', wrapper)
        wrapper.style.marginTop = hasH4 && !hasMainImage ? '16px' : '32px'
        wrapper.style.marginBottom = '32px'
      }
    }

    // Position after a short delay to ensure DOM is ready
    const timer = setTimeout(positionPlayer, 100)
    return () => clearTimeout(timer)
  }, [essayContent])

  return (
    <div ref={wrapperRef} style={{ marginTop: '32px', marginBottom: '32px' }}>
      <AudioPlayer 
        audioSrc={audioSrc}
        title={title}
        nextSlug={nextSlug}
        autoplay={autoplay}
      />
    </div>
  )
}
