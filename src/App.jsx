import hero from './assets/hero.svg'
import './FetchProjects'
import { useFetchProjects } from './FetchProjects'

const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Contentful CMS</h1>
        <p>
          Pitchfork schlitz tonx, coloring book celiac tousled succulents ascot
          affogato cardigan jianbing crucifix seitan. Synth man braid everyday
          carry try-hard pour-over keffiyeh slow-carb sriracha chillwave banjo
          gochujang kinfolk small batch mustache.
        </p>
      </div>
      <div className="img-container">
        <img src={hero} alt="hero" />
      </div>
    </div>
  )
}
const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return (
      <section className="projects-container">
        <h2>Loading...</h2>
        <div className="projects"></div>
      </section>
    )
  }
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

const SingleProject = ({ title, url, img }) => {
  return (
    <article className="single-project">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={title} className="img" />
        <h3>{title}</h3>
      </a>
    </article>
  )
}

export default App
