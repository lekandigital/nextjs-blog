import Link from 'next/link'
import { getEssaysPosts } from 'app/essays/utils'

export function EssaysPosts({ slugs, selectedTopic, allPosts }: { 
  slugs?: string[], 
  selectedTopic?: string | null,
  allPosts: any[] // Make allPosts a required prop
}) {
  let allEssayss = allPosts
  
  if (slugs) {
    // Homepage logic - filter by specific slugs
    allEssayss = allEssayss.filter(post => slugs.includes(post.slug))
    allEssayss = allEssayss.sort(
      (a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug)
    )
  } else {
    // Essays page logic - filter by topic if selected
    if (selectedTopic) {
      allEssayss = allEssayss.filter(post => {
        const match = post.metadata.title.match(/\[([^\]]+)\]/)
        return match && match[1] === selectedTopic
      })
    }
    
    // Sort by published date descending
    allEssayss = allEssayss.sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
  }

  return (
    <div className="post-list">
      {allEssayss.map((post) => (
        <Link
          key={post.slug}
          href={`/essays/${post.slug}`}
          className="post-item"
        >
          <div className="post-title">
            {slugs
              ? post.metadata.title.replace(/^\d+\s*-\s*/, '')
              : post.metadata.title}
          </div>
          <div className="post-summary">
            {post.metadata.summary}
          </div>
        </Link>
      ))}
    </div>
  )
}