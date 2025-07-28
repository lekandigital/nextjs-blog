import { EssaysPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lekan
      </h1>
      <p className="mb-4">
        {`I'm a CS/Physics undergrad who's shipped production AI systems since high school. My `}
        <a href="https://github.com/lekanadeyeri/Single-File-Library-for-Python-Alexa-Skills" className="underline">clinical trial chatbot for decentralized trials</a>
        {` was deployed in clinical settings. I've published `}
        <a href="https://scholar.google.com/citations?user=VxTWNqgAAAAJ" className="underline">deep learning research at Stanford Medicine</a>
        {`, interned as SWE+PM at `}
        <a href="http://microsoft.com/" className="underline">Microsoft</a>
        {`, and been recognized as a Kleiner Perkins Engineering Fellowship Finalist and `}
        <a href="https://twitter.com/BessemerVP/status/1547271355539734528" className="underline">Bessemer Venture Partners Fellow</a>
        {` participant before taking a break for reasons including to explore emerging technologies without unconstrained.`}
      </p>
      <p className="mb-4">
        {`Previously, I've built `}
        <a href="https://github.com/lekanadeyeri/Commonwealth-Honors-Project" className="underline">computer vision tools for autism support</a>
        {`, grocery carpooling platforms with 450+ users, and `}
        <a href="https://github.com/lekandigital/InjuryEmotion" className="underline">hackathon-winning worker sentiment analysis</a>
        {` using computer vision in industrial contexts. Currently developing energy-efficient 3D rendering pipelines, audio-first rowing interfaces, and discrete math curriculum for non-traditional learners. Long-term, I'm drawn to photonics research and AR experiences that reimagine human-computer interaction.`}
      </p>
      <p className="mb-4">
        {`I focus on systems that amplify human creativity rather than replace it. I use this space to share technical builds, design experiments, and reflections on engineering the future of human-AI collaboration.`}
      </p>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Selected Essays
        </h2>
        <EssaysPosts />
      </div>
    </section>
  )
}
