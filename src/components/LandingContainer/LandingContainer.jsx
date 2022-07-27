import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import classes from './LandingContainer.module.css'

const LandingContainer = () => {

  return (
      <div className={classes.landingContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.nameContainer}>
            Diego Moreno
          </div>
          <div className={classes.occupationContainer}>
            <div className={classes.occupationTitle}>
              Software Developer
            </div>
            <div className={classes.occupationDesc}>
              Coding this website and a bunch of other things
            </div>
          </div>
          <div className={classes.portfolioContainer}>
              <a href="#portfolio" className={classes.portfolioA}>Portfolio</a>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.resumeContainer}>
            <p className={classes.resumeTitle}>Resume</p>
            <p className={classes.resumeBody}>Based in Mexico</p>
            <p className={classes.resumeBody}>Universidad Autónoma</p>
            <p className={classes.resumeBody}>de Aguascalientes</p>
            <a className={classes.resumeBodyA} href="https://drive.google.com/drive/folders/16rc1Mlc5jv_A_KASvH3FbdzykIPZrmO0?usp=sharing">Get my Resume Here</a>
          </div>
          <div className={classes.contactContainer}>
            <a className={classes.contactBody} href="#contact">
            <p className={classes.contactTitle}>Contact</p>
              Send me an email
            </a> 
          </div>
          <div className={classes.socialContainer}>
            <p className={classes.socialTitle}>Social</p>
            <div className={classes.socialIcons}>
              <a href="https://www.linkedin.com/in/diego-moreno-05a158219/">
                <FontAwesomeIcon icon={faLinkedin} className={classes.icon}/>
              </a>
              <a href="https://www.instagram.com/yeyo.moreno/">
                <FontAwesomeIcon icon={faInstagramSquare} className={classes.icon}/>
              </a>
              <a href="https://github.com/YeyoM">
                <FontAwesomeIcon icon={faGithubSquare} className={classes.icon}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LandingContainer
