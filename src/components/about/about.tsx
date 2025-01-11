import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src="/headshot.jpg"
            alt="Pranav Palle Image"
            className={styles.headshot}
          />
        </div>
        <div className={styles.textContent}>
          <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">About Me</h1>
          <p>
            Hello! I'm a passionate software developer with a keen interest in building
            elegant solutions to complex problems. With experience in modern web
            technologies, I specialize in creating responsive and user-friendly
            applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;