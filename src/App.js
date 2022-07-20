import './App.css'
import LandingContainer from './components/LandingContainer/LandingContainer.jsx'
import ProjectContainer from './components/ProjectContainer/ProjectContainer.jsx'
import ContactContainer from './components/ContactContainer/ContactContainer.jsx'
import AboutMeContainer from './components/AboutMeContainer/AboutMeContainer.jsx'
import Footer from './components/Footer/Footer.jsx'

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
