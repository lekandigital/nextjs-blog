import { getEssaysPosts } from 'app/essays/utils'

export const baseUrl = 'https://hy.ms'

export default async function sitemap() {
  let essays = getEssaysPosts().map((post) => ({
    url: `${baseUrl}/essays/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/essays'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...essays]
}
