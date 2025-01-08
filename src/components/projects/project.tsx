import styles from './project.module.css';

type LinkInfo = {
  name: string;
  url: string;
}

type ProjectInfo = {
  title: string;
  description: string;
  image: string;
  links: LinkInfo[];
  skills: string[];
}

const projects: ProjectInfo[] = [
  {
    title: "Word Games Solver",
    description: "Work In Progress: This project is a word games solver that helps users solve word games like Word Hunt, Spelling Bee, and Anagrams. The application is built using Next.js and integrates with a Flask backend to implement a Trie data structure with depth first search to ensure all possible words are found within the list of 370K+ words.",
    image: "/projects/wordgames.png",
    links: [
        { name: "Live Demo", url: "" },
        { name: "GitHub", url: "https://github.com/Paradox560/wordgames"}
    ],
    skills: ["React", "Next.js", "Flask", "Vercel", "Python"]
  },
  {
    title: "AllThyme",
    description: "This project is a recipe generation website that helps users manage their ingredients and spices, and generate recipes based on the available items. The application is built using Next.js and integrates with Firebase for data storage.",
    image: "/projects/allthyme.png",
    links: [
        { name: "Live Demo", url: "https://allthymerecipes.design/" },
        { name: "Hackathon Submission", url: "https://devpost.com/software/all-thyme-recipes"},
        { name: "GitHub", url: "https://github.com/Paradox560/all-thyme-recipes"}
    ],
    skills: ["React", "Next.js", "Gemini", "Firebase", "Material UI", "Vercel"]
  },
  {
    title: "ProJourney",
    description: "MindSpark is a fullstack AI flashcard generation website that makes it easy to generate flashcard sets and save them for further learning.",
    image: "/projects/projourney.png",
    links: [
        { name: "Live Demo", url: "https://projourney.pro/" },
        { name: "GitHub", url: "https://github.com/karla-zamora/ProJourney"}
    ],
    skills: ["React", "Next.js", "Gemini", "Firebase", "Material UI", "Vercel"]
  },
  {
    title: "MindSpark",
    description: "MindSpark is a fullstack AI flashcard generation website that makes it easy to generate flashcard sets and save them for further learning.",
    image: "/projects/mindspark.png",
    links: [
        { name: "Live Demo", url: "https://flashcardsaas-mu.vercel.app/" },
        { name: "GitHub", url: "https://github.com/jballo/flashcardsaas"}
    ],
    skills: ["React", "Next.js", "Gemini", "Firebase", "Material UI", "Vercel"]
  },
  {
    title: "PerLoan",
    description: "PerLoan is a revolutionary peer-to-peer lending service which allows people to request loans from others at a lower interest rate than traditional banks and credit cards, decreasing the burden on them, while also providing lenders with a way to grow their savings. People can either loan money to others via campaigns, or they can start their own campaign! This is linked with your credit score so these loans can be used to increase your credit score. We are also using PropelAuth to minimize account fraud and implementing a unique approach through our Artificial Intelligence model to minimize loan fraud, revolutionizing the loan industry.",
    image: "/projects/perloan.png",
    links: [
        { name: "Hackathon Submission", url: "https://devpost.com/software/perloan" },
        { name: "GitHub", url: "https://github.com/lokashrinav/Loan"}
    ],
    skills: ["React Native", "PropelAuth", "Cloudflare", "SQL"]
  },
  {
    title: "Readanize",
    description: "Readanize is my final project for CS50X: Harvard's Introduction to Computer Science. It is a web application that helps users organize their reading lists and track their progress.",
    image: "/projects/readanize.png",
    links: [
        { name: "Video Demo", url: "https://youtu.be/Y5taFZ5RImM/" },
        { name: "GitHub", url: "https://github.com/me50/Paradox560/tree/cs50/problems/2020/x/project"}
    ],
    skills: ["SQL", "HTML", "Flask", "PHP", "Python"]
  }
]

const Project = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={styles.content}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.skills}>
              {project.skills.map((skill, idx) => (
                <span key={idx} className={styles.skill}>{skill}</span>
              ))}
            </div>
            <div className={styles.links}>
              {project.links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;