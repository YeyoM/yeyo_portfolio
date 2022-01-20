import '../App.css'

const LandingContainer = () => {
  return (
      <div className='landing-container'>
        <div className='left-container'>
          <div className="Name-container">
            Diego Moreno
          </div>
          <div className="Occupation-container">Software Engineer</div>
          <div className="Portfolio-container">
            <a href="#portfolio">Portfolio</a>
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
            <p className="Contact-title">Contact</p>
            <p className="Contact-body">Send me an email</p> 
          </div>
          <div className="Social-container">Social</div>
        </div>
      </div>
    )
}

export default LandingContainer