import '../App.css'

const ProjectContainer = () => {

	const route = '../../public/project.jpeg'
		
  return (
		<div className='project-container'>
			<a name="portfolio"></a>
			<div className="Project-alone">
				<div className="Project-description">
					<div className="Project-title">01 Project</div>
					<p>This first project is one of my most recent one, this app shows you a random Kanye West’s quote, which you can also tweet. It is built with only React, and you can find the code in my GitHub. It makes requests to a REST API called kanye.rest. You can find my project <a href="https://kanye-west-quotes.herokuapp.com/">here</a></p></div>
				<div className="Project-img">
					<img src={route} alt="01 Project" />
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
  )
}

export default ProjectContainer
