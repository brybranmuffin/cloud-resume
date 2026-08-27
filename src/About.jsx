import Photo from './Photo'
import Icon from './Icon'

const SOCIALS = [
  { name: 'github', label: 'GitHub', href: 'https://github.com/brybranmuffin' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/bryantbet/' },
]

export default function About() {
  return (
    <div className="page">
      <div className="content">
        <p className="eyebrow">AI Researcher &middot; Engineer &middot; Chicago</p>
        <h1 className="name">
          Hi I&rsquo;m<span className="last">Bryant</span>
        </h1>
        <p className="tagline">
          I&rsquo;m an AI researcher in Chicago working on model understanding
          and harness engineering. I studied AI at Northwestern and data science
          at Berkeley, and built FPGA tooling at Intel before that. I care about
          making how these systems work legible to the people learning them.
        </p>

        <ul className="social" aria-label="Elsewhere">
          {SOCIALS.map(({ name, label, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon name={name} size={20} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Photo alt="Bryant Bettencourt" />
    </div>
  )
}
