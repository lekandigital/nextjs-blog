import Link from 'next/link'
import { getEssaysPosts } from 'app/essays/utils'

export function EssaysPosts({ slugs }: { slugs?: string[] } = {}) {
  let allEssayss = getEssaysPosts()
  if (slugs) {
    allEssayss = allEssayss.filter(post => slugs.includes(post.slug))
    allEssayss = allEssayss.sort(
      (a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug)
    )
  } else {
    allEssayss = allEssayss.sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
  }

  return (
    <div>
      {allEssayss.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/essays/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
