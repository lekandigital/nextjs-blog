import { EssaysPosts } from 'app/components/posts'
import { getEssaysPosts } from 'app/essays/utils'

export default function Page() {
  const allPosts = getEssaysPosts()

  return (
    <section>
      <h1 className="mb-32">
        Lekan
      </h1>
      <p className="mb-16">
        {`I'm a CS/Physics undergrad on leave ☹️. I've shipped production AI systems since high school including a `}
        <a href="https://github.com/lekanadeyeri/Single-File-Library-for-Python-Alexa-Skills">chatbot for decentralized clinical trials</a>
        {` deployed at `}
        <a href="https://www.scribd.com/document/747619642/Programs-STC-2016-Tech-Apprentice-Program-Summary">eResearch Technology</a>
        {` (`}
        <a href="https://ert.com">acquired by Clario</a>
        {`). I've published `}
        <a href="https://scholar.google.com/citations?user=VxTWNqgAAAAJ">deep learning research at Stanford</a>
        {` as a co-author that's won the `}
        <a href="https://www.asnr.org/cornelius-g-dyke-award/">Cornelius G. Dyke Award from ASNR</a>
        {`. I've interned as SWE+PM at `}
        <a href="http://microsoft.com/">Microsoft</a>
        {` working with `}
        <a href="https://youtu.be/Ql7_WvaLpy4">GPT-3 and microservices</a>
        {`, and I've explored various venture capital `}
        <a href="https://twitter.com/BessemerVP/status/1547271355539734528">fellowships</a>
        {` before taking a break to `}
        <a href="https://blog.yeri.io">explore emerging technologies unconstrained</a>
        {`. Previously, I've built `}
        <a href="https://github.com/lekanadeyeri/Commonwealth-Honors-Project">computer vision tools for autism support</a>
        {`, `}
        <a href="https://web.archive.org/web/20220110183251/https://droped.co/">grocery carpooling platforms with 450+ users in one target location with a $30 budget</a>
        {`, and `}
        <a href="https://imgur.com/a/tzSVJ57">hackathon-winning</a>
        {` `}
        <a href="https://github.com/lekanadeyeri/InjuryEmotion">worker sentiment analysis systems using computer vision in industrial contexts</a>
        {`. I focus on building systems that `}
        <a href="https://yeri.io">amplify human creativity rather than replace it</a>
        {`.`}
      </p>
      <div className="mb-32">
        <h2 className="mb-24">
          Selected Essays
        </h2>
        <EssaysPosts allPosts={allPosts} slugs={['4', '2', '10', '9', '1']} />
      </div>
    </section>
  )
}
