import '../App.css'

const ProjectContainer = () => {

	const route = '../../public/01project.png'
		
  return (
		<div className='project-container'>
			<a name="portfolio"></a>
			<div className="Project-alone">
				<div className="Project-description">
					<div className="Project-title">01.YeQuotes</div>
					<p>This first project is one of my most recent one, this app shows you a random Kanye West’s quote, which you can also tweet. It is built with only React, and you can find the code in my GitHub. It makes requests to a REST API called kanye.rest. You can find my project <a href="https://yeyom.github.io/kanye_quotes/">here</a>. Check out my code <a href="https://github.com/YeyoM/kanye_quotes">here</a>.</p></div>
				<div className="Project-img">
					<img src={require('../images/01project.png')} alt="01 Project" />
				</div>
			</div>
			<div className="Project-alone">
				<div className="Project-description">
					<div className="Project-title">02.Optimave</div>
					<p>This one right here, it is my most recent project made for a client. It works as a Landing page to know the product wich is a tool to boost your PC to get the maximum performance when playing games, it also features payments with stripe check-out system and a login and signup system. Check the WebApp <a href="https://optimave.herokuapp.com/">here</a> </p></div>
				<div className="Project-img">
					<img src={require('../images/02project.png')} alt="02 Project" />
				</div>
			</div>
		</div>
  )
}

export default ProjectContainer
