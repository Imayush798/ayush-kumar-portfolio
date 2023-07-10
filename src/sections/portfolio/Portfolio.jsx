import './portfolio.css'
import data from './data'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
        data.map(({id, image, title, github, demo}) => {
          return (
             <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn primary' target='_blank'>Github</a>
                <a href={demo} className='btn primary' target='_blank'>Demo</a>
              </div>
             </article>
          )
        })
        }
      </div>
      </section>
  )
}

export default Portfolio