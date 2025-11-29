import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getEssaysPosts, checkAudioExists } from 'app/essays/utils'
import { baseUrl } from 'app/sitemap'
import { AutoplayDetector } from 'app/components/autoplay-detector'
import { EssayNavigation } from 'app/components/essay-navigation'

export async function generateStaticParams() {
  let posts = getEssaysPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getEssaysPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/essays/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getEssaysPosts().find((post) => post.slug === params.slug)
  let allPosts = getEssaysPosts()

  if (!post) {
    notFound()
  }

  // Audio player setup
  const audioSrc = `/audio/${post.slug}-1.mp3`
  const hasAudio = checkAudioExists(post.slug)

  // Get next essay slug for auto-navigation
  const sortedPosts = allPosts.sort((a, b) => parseInt(a.slug) - parseInt(b.slug))
  const currentIndex = sortedPosts.findIndex(p => p.slug === post!.slug)
  const nextSlug = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1].slug : null
  
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/essays/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      
      <article className="article">
        <h1>{post.metadata.title}</h1>
        
        <div className="essay-content">
          <CustomMDX 
            source={post.content} 
            components={{}}
          />
        </div>
        
        {/* Audio player with smart positioning */}
        {hasAudio && (
          <AutoplayDetector
            audioSrc={audioSrc}
            title={`Listen to "${post.metadata.title.replace(/^\d+\s*-\s*/, '')}"`}
            nextSlug={nextSlug || undefined}
            essayContent={post.content}
          />
        )}
        
        {/* Essay Navigation */}
        <EssayNavigation 
          currentSlug={post.slug} 
          allPosts={allPosts}
        />
      </article>
    </section>
  )
}