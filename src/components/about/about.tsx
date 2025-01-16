import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src="/headshot.jpg"
            alt="Pranav Palle"
            className={styles.headshot}
          />
        </div>
        <div className={styles.textContent}>
          <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">About Me</h1>
          <p>
            Hello! I'm an university student and software engineer learning about 
            web development, data science, robotics, cloud computing, and recently
            quantum computing.
          </p>
          <p>
            When I'm not coding, you can find me bouldering, playing badminton, 
            destroying my friends at word based games, and reading about mythology
            in specific.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;