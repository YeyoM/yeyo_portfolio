import classes from './AboutMeContainer.module.css'

const AboutMeContainer = () => {
  return (
    <div className={classes.aboutMeContainer}>
      <div className={classes.aboutText}>
        <p className={classes.aboutTitle}>Hey there! </p>
          <p className={classes.aboutP}>I'm Diego Moreno, a computer science student at Universidad Autónoma de Aguascalientes, Mex. I have a strong passion for software engineering and all the exciting aspects that come with it.</p>
          <p className={classes.aboutP}>Throughout my academic journey, I have developed a keen interest in frontend development and ensuring websites are reliable and accessible for all users.</p>
          <p className={classes.aboutP}>In addition to my technical skills, I value collaboration and effective communication within development teams. I believe in the power of teamwork and appreciate the diverse perspectives that each team member brings to the table.</p>
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
