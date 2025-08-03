import { getEssaysPosts } from 'app/essays/utils'
import { EssayFilter } from 'app/components/essay-filter'

export const metadata = {
  title: 'Essays',
  description: 'Read my essays here.',
}

export default function Page() {
  const allPosts = getEssaysPosts()

  return (
    <div>
      <h1 className="mb-24">Essays</h1>
      <EssayFilter allPosts={allPosts} />
    </div>
  )
}