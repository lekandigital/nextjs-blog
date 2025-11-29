import { EssaysPosts } from 'app/components/posts'
import { getEssaysPosts } from 'app/essays/utils'

export default function Page() {
  const allPosts = getEssaysPosts()

  return (
    <section>
      <h1 className="mb-32">
        Developer Name
      </h1>
      <p className="mb-16">
        {`I'm a software engineer and writer. This is a template for a personal blog built with Next.js. `}
        {`It features a clean design, MDX support for essays, and a custom audio player. `}
        {`You can customize this bio to tell your own story, highlight your projects, and share your background. `}
        {`The template is designed to be easy to fork and adapt for your own needs.`}
      </p>
      <div className="mb-32">
        <h2 className="mb-24">
          Selected Essays
        </h2>
        <EssaysPosts allPosts={allPosts} slugs={['1', '2', '3', '4', '5']} />
      </div>
    </section>
  )
}
