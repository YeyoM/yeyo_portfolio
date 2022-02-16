import './App.css'
import LandingContainer from './components/LandingContainer'
import ProjectContainer from './components/ProjectContainer'
import ContactContainer from './components/ContactContainer'
import AboutMeContainer from './components/AboutMeContainer'
import Footer from './components/Footer'

function App () {
	return (
		<div className='App'>
			<LandingContainer />
			<AboutMeContainer />
			<ProjectContainer />
			<ContactContainer />
			<Footer />
		</div>
	)
}

export default App
