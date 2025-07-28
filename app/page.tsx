import { EssaysPosts } from 'app/components/posts'

export default function Page() {
 return (
   <section>
     <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Lekan
     </h1>
     <p className="mb-4">
       {`I'm a CS/Physics undergrad on leave. I've shipped production AI systems since high school including a `}
       <a href="https://github.com/lekanadeyeri/Single-File-Library-for-Python-Alexa-Skills" className="underline">chatbot for decentralized clinical trials</a>
       {` deployed at eResearch Technology (acquired by Clario). I've published `}
       <a href="https://scholar.google.com/citations?user=VxTWNqgAAAAJ" className="underline">deep learning research at Stanford</a>
       {` as a co-author that's won the `}
       <a href="https://www.asnr.org/cornelius-g-dyke-award/" className="underline">Cornelius G. Dyke Award from ASNR</a>
       {`. I've interned as SWE+PM at `}
       <a href="http://microsoft.com/" className="underline">Microsoft</a>
       {` working with GPT-3 and microservices, and I've explored various venture capital `}
       <a href="https://twitter.com/BessemerVP/status/1547271355539734528" className="underline">fellowships</a>
       {` before taking a break to explore emerging technologies unconstrained. Previously, I've built `}
       <a href="https://github.com/lekanadeyeri/Commonwealth-Honors-Project" className="underline">computer vision tools for autism support</a>
       {`, grocery carpooling platforms with 450+ users in one target location with a $30 budget, and `}
       <a href="https://github.com/lekandigital/InjuryEmotion" className="underline">hackathon-winning worker sentiment analysis systems</a>
       {` using computer vision in industrial contexts. I focus on building systems that amplify human creativity rather than replace it.`}
     </p>
     <div className="my-8">
       <h2 className="mb-4 text-xl font-semibold tracking-tight">
         Selected Essays
       </h2>
       <EssaysPosts slugs={['4', '2', '10', '9', '1']} />
     </div>
   </section>
 )
}