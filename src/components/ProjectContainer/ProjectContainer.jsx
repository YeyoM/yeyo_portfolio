import classes from './ProjectContainer.module.css'

const ProjectContainer = () => {

	const route = '../../public/01project.png'
		
  return (
		<div className={classes.projectContainer}>
			<a name="portfolio"></a>
			<div className={classes.projectAlone}>
				<div className={classes.projectDescription}>
					<div className={classes.projectTitle}>01.Blog</div>
					<p>I created this blog to help people that are starting in the computer science field as well on building web apps. Also it helps me improving my skills. Check it <a href="https://next-blog-nu-wine.vercel.app/">here</a>. Or found the code <a href="https://github.com/YeyoM/next_blog">here</a></p></div>
				<div className={classes.projectImg}>
					<img src={require('../../images/04project.png')} alt="01 Project" />
				</div>
			</div>
			<div className={classes.projectAlone}>
				<div className={classes.projectDescription}>
					<div className={classes.projectTitle}>02.YeQuotes</div>
					<p>This first project is one of my most recent one, this app shows you a random Kanye West’s quote, which you can also tweet. It is built with only React, and you can find the code in my GitHub. It makes requests to a REST API called kanye.rest. You can find my project <a href="https://yeyom.github.io/kanye_quotes/">here</a>. Check out my code <a href="https://github.com/YeyoM/kanye_quotes">here</a>.</p></div>
				<div className={classes.projectImg}>
					<img src={require('../../images/01project.png')} alt="02 Project" />
				</div>
			</div>
			<div className={classes.projectAlone}>
				<div className={classes.projectDescription}>
					<div className={classes.projectTitle}>03.Next-Events</div>
					<p>The next one is a introduction to what is NextJS and how to create a very first project, in the code you will found things like the folder-routing, how to add react components to the pages, static site generation and server side rendering! Check it <a href="https://next-events-app-phi.vercel.app/">here</a>. Or found the code <a href="https://github.com/YeyoM/next_events_app">here</a></p></div>
				<div className={classes.projectImg}>
					<img src={require('../../images/03project.png')} alt="03 Project" />
				</div>
			</div>
		</div>
  )
}

export default ProjectContainer
