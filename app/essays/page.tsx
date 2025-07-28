import { EssaysPosts } from 'app/components/posts'

export const metadata = {
  title: 'Essays',
  description: 'Read my essays.',
}

export default function Page() {
  return (
    <section>
      <EssaysPosts />
    </section>
  )
}
