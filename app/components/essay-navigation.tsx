"use client"

import Link from 'next/link'

interface EssayNavigationProps {
  currentSlug: string
  allPosts: any[]
}

export function EssayNavigation({ currentSlug, allPosts }: EssayNavigationProps) {
  // Sort posts by slug number (1, 2, 3, etc.)
  const sortedPosts = allPosts.sort((a, b) => {
    const aNum = parseInt(a.slug)
    const bNum = parseInt(b.slug)
    return aNum - bNum
  })
  
  const currentIndex = sortedPosts.findIndex(post => post.slug === currentSlug)
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  
  const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'left' ? 'rotate(180deg)' : 'none'
      }}
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'flex-start',
      marginTop: '64px',
      paddingTop: '32px',
      borderTop: '1px solid #e0e0e0',
      gap: '16px'
    }}>
      <div style={{ 
        justifySelf: 'start',
        minWidth: '0', // Allow content to shrink
        maxWidth: '250px' // Consistent max width
      }}>
        {prevPost ? (
          <Link
            href={`/essays/${prevPost.slug}`}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.15s ease',
              minHeight: '60px' // Increased to accommodate 2-line titles
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#6b7280'}
          >
            <ArrowIcon direction="left" />
            <div style={{ 
              minWidth: '0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                fontSize: '12px', 
                opacity: 0.7,
                lineHeight: '16px',
                height: '16px'
              }}>Previous</div>
              <div style={{
                lineHeight: '1.3',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>{prevPost.slug} - {prevPost.metadata.title.replace(/^\d+\s*-\s*/, '').replace(/\[.*?\]\s*/, '')}</div>
            </div>
          </Link>
        ) : null}
      </div>
      
      <div style={{
        fontSize: '14px',
        color: '#9ca3af',
        textAlign: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        position: 'sticky',
        top: '50%',
        transform: 'translateY(-50%)',
        whiteSpace: 'nowrap',
        padding: '0 8px'
      }}>
        {currentIndex + 1} of {sortedPosts.length}
      </div>
      
      <div style={{ 
        justifySelf: 'end',
        minWidth: '0', // Allow content to shrink
        maxWidth: '250px' // Consistent max width
      }}>
        {nextPost ? (
          <Link
            href={`/essays/${nextPost.slug}`}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px',
              textAlign: 'right',
              transition: 'color 0.15s ease',
              minHeight: '60px' // Increased to accommodate 2-line titles
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#6b7280'}
          >
            <div style={{ 
              minWidth: '0',
              textAlign: 'right',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                fontSize: '12px', 
                opacity: 0.7,
                lineHeight: '16px',
                height: '16px'
              }}>Next</div>
              <div style={{
                lineHeight: '1.3',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>{nextPost.slug} - {nextPost.metadata.title.replace(/^\d+\s*-\s*/, '').replace(/\[.*?\]\s*/, '')}</div>
            </div>
            <ArrowIcon direction="right" />
          </Link>
        ) : null}
      </div>
    </div>
  )
}