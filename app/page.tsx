import { EssaysPosts } from 'app/components/posts'
import { getEssaysPosts } from 'app/essays/utils'

export default function Page() {
  const allPosts = getEssaysPosts()

  return (
    <section>
      <h1 className="mb-32">
        Lekan
      </h1>
      <div className="mb-32">
        <h2 className="mb-24">
          Selected Essays
        </h2>
        <EssaysPosts allPosts={allPosts} slugs={['4', '2', '10', '9', '1']} />
      </div>
      <p className="mb-16">
        {`I'm a CS/Physics undergrad on leave. I've shipped production AI systems since high school including a `}
        <a href="https://github.com/lekanadeyeri/Single-File-Library-for-Python-Alexa-Skills">chatbot for decentralized clinical trials</a>
        {` deployed at eResearch Technology (acquired by Clario). I've published `}
        <a href="https://scholar.google.com/citations?user=VxTWNqgAAAAJ">deep learning research at Stanford</a>
        {` as a co-author that's won the `}
        <a href="https://www.asnr.org/cornelius-g-dyke-award/">Cornelius G. Dyke Award from ASNR</a>
        {`. I've interned as SWE+PM at `}
        <a href="http://microsoft.com/">Microsoft</a>
        {` working with GPT-3 and microservices, and I've explored various venture capital `}
        <a href="https://twitter.com/BessemerVP/status/1547271355539734528">fellowships</a>
        {` before taking a break to explore emerging technologies unconstrained. Previously, I've built `}
        <a href="https://github.com/lekanadeyeri/Commonwealth-Honors-Project">computer vision tools for autism support</a>
        {`, grocery carpooling platforms with 450+ users in one target location with a $30 budget, and `}
        <a href="https://github.com/lekandigital/InjuryEmotion">hackathon-winning worker sentiment analysis systems</a>
        {` using computer vision in industrial contexts. I focus on building systems that amplify human creativity rather than replace it.`}
      </p>
    </section>
  )
}
