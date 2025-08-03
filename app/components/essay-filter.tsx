"use client"

import { useState } from 'react'
import { EssaysPosts } from './posts'

export function EssayFilter({ allPosts }: { allPosts: any[] }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  
  const topics: string[] = Array.from(new Set(
    allPosts
      .map(post => {
        const match = post.metadata.title.match(/\[([^\]]+)\]/)
        return match ? match[1] : null
      })
      .filter((topic): topic is string => Boolean(topic))
  )).sort()

  return (
    <div>
      <div
        style={{
          position: 'relative',
          marginBottom: '32px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Left blur edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.8), transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
        
        {/* Right blur edge */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.8), transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
        
        <div
          style={{
            overflowX: 'auto',
            overflowY: 'visible',
            paddingBottom: '16px', // Increased to allow shadows
            paddingTop: '16px', // Increased to allow shadows
            paddingLeft: '20px',
            paddingRight: '20px',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
          className="hide-scrollbar"
        >
          <div
            style={{
              display: 'flex',
              gap: '12px',
              minWidth: 'max-content',
              paddingLeft: '60px', // Space for left blur
              paddingRight: '60px', // Space for right blur
            }}
          >            <button
              key="all-topics"
              onClick={() => setSelectedTopic(null)}
              style={{
                background: selectedTopic === null 
                  ? 'rgba(30, 30, 30, 0.9)' 
                  : 'rgba(255, 255, 255, 0.7)',
                color: selectedTopic === null ? 'white' : '#475569',
                border: selectedTopic === null 
                  ? '1px solid rgba(255, 255, 255, 0.2)' 
                  : '1px solid rgba(203, 213, 225, 0.3)',
                borderRadius: '24px',
                padding: '10px 18px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: selectedTopic === null 
                  ? '0 4px 16px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                willChange: 'transform', // Force hardware acceleration
              }}
            >
              All Topics
            </button>
            
            {topics.map((topic) => (
              <button
                key={`topic-${topic}`}
                onClick={() => setSelectedTopic(topic)}
                style={{
                  background: selectedTopic === topic 
                    ? 'rgba(30, 30, 30, 0.9)' 
                    : 'rgba(255, 255, 255, 0.7)',
                  color: selectedTopic === topic ? 'white' : '#475569',
                  border: selectedTopic === topic 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(203, 213, 225, 0.3)',
                  borderRadius: '24px',
                  padding: '10px 18px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: selectedTopic === topic 
                    ? '0 4px 16px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform', // Force hardware acceleration
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
      <EssaysPosts allPosts={allPosts} selectedTopic={selectedTopic} />
    </div>
  )
}