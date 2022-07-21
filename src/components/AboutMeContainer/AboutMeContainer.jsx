import classes from './AboutMeContainer.module.css'

const AboutMeContainer = () => {
  return (
    <div className={classes.aboutMeContainer}>
      <div className={classes.aboutText}>
        <p className={classes.aboutTitle}>Hey there! </p>
          <p className={classes.aboutP}>My name is Diego and I’m a software engineer focused on web development. I started coding back in 2019 when I was in high school. I’m currently coursing 2nd semester in college. I’m studying Computer Science and my favorite course is “Computational Structures” where I master my code abilities with C++.</p>
          <p className={classes.aboutP}>By now, I’m looking for my first Internship or my first approach with the IT work field. My main tech core is based mostly in JavaScript and all around with web development and I’m passionate about building great and excellent digital products that live on the internet.</p>
          <p className={classes.aboutP}>Apart from coding, you will normally find me playing basketball or maybe playing guitar, who knows? </p>
        <p className={classes.aboutTech}>Technologies I've used in recent projects:</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>NextJs</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMeContainer