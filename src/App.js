import './App.css'

function App () {
  return (
    <div className='App'>
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
          <div className="Resume-container">Resume</div>
          <div className="Contact-container">Contact</div>
          <div className="Social-container">Social</div>
        </div>
      </div>
      <div className='project-container'>
        <a name="portfolio"></a>
        <div className="Project-alone">
          <div className="Project-description">
          <div className="Project-title">01 Project</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div>
          <div className="Project-img">
            <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/sites/4/2017/08/i-1-brutalist-ux-gets-its-own-satirical-website.jpg" alt="01 Project" />
          </div>
        </div>
        <div className="Project-alone">
          <div className="Project-description">
          <div className="Project-title">02 Project</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div>
          <div className="Project-img">
            <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/sites/4/2017/08/i-1-brutalist-ux-gets-its-own-satirical-website.jpg" alt="01 Project" />
          </div>
        </div>
        <div className="Project-alone">
          <div className="Project-description">
          <div className="Project-title">03 Project</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div>
          <div className="Project-img">
            <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/sites/4/2017/08/i-1-brutalist-ux-gets-its-own-satirical-website.jpg" alt="01 Project" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
