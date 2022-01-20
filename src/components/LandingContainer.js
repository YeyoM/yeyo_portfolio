import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import '../App.css'

const LandingContainer = () => {
  return (
      <div className='landing-container'>
        <div className='left-container'>
          <div className="Name-container">
            Diego Moreno
          </div>
          <div className="Occupation-container">
            <div className="Occupation-title">
              Software Engineer
            </div>
            <div className="Occupation-desc">
              Coding this website and a bunch of other things
            </div>
          </div>
          <div className="Portfolio-container">
            <a href="#portfolio" className="Portfolio-a">Portfolio</a>
            </div>
        </div>
        <div className="Right-container">
          <div className="Resume-container">
            <p className="Resume-title">Resume</p>
            <p className="Resume-body">Based in Mexico</p>
            <p className="Resume-body">Universidad Autónoma</p>
            <p className="Resume-body">de Aguascalientes</p>
            <p className="Resume-body">Class of 2026</p>
          </div>
          <div className="Contact-container">
            <a className="Contact-body" href="#contact">
            <p className="Contact-title">Contact</p>
              Send me an email
            </a> 
          </div>
          <div className="Social-container">
            <p className="Social-title">Social</p>
            <div className="Social-icons">
              <a href="https://www.linkedin.com/in/diego-moreno-05a158219/">
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
              </a>
              <a href="https://www.instagram.com/yeyo.moreno/">
                <FontAwesomeIcon icon={faInstagramSquare} className="icon"/>
              </a>
              <a href="https://github.com/YeyoM">
                <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LandingContainer