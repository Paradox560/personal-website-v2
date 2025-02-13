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
        { name: "Live Demo", url: "https://word-games-solver.vercel.app/" },
        { name: "GitHub", url: "https://github.com/Paradox560/wordgames"}
    ],
    skills: ["React", "Next.js", "Flask", "Vercel", "Python"]
  },
  {
    title: "AllThyme Recipes",
    description: "This project is a recipe generation website that helps users manage their ingredients and spices, and generate recipes based on the available items. The application is built using Next.js and integrates with Firebase for data storage. Winner of the 2024 HackUMBC Major League Hackathon Best Environmental Hack and Best GoDaddy Domain Name.",
    image: "/projects/allthyme.png",
    links: [
        { name: "Live Demo", url: "https://allthymerecipes.design/" },
        { name: "Hackathon Submission", url: "https://devpost.com/software/all-thyme-recipes"},
        { name: "GitHub", url: "https://github.com/Paradox560/all-thyme-recipes"}
    ],
    skills: ["React", "Next.js", "Gemini", "Firebase", "Material UI", "Clerk", "Vercel"]
  },
  {
    title: "ProJourney",
    description: "ProJourney is an AI powered DSA learning platform. We have constructed an AI powered roadmap to recommend problems based on which problems you've already completed to continuously help 30+ waitlist users retain data structure skills. When users complete problems on the page with a functional code editor, they will see feedback about their solution and potentials to improve it.",
    image: "/projects/projourney.png",
    links: [
        { name: "Live Demo", url: "https://projourney.pro/" },
        { name: "GitHub", url: "https://github.com/karla-zamora/ProJourney" },
        { name: "Video Demo", url: "https://www.youtube.com/watch?v=JHTNLbtLkgE"}
    ],
    skills: ["React", "Next.js", "Gemini", "Supabase", "Clerk", "Firebase", "AWS Amplify", "Cloudflare", "LemonSqueezy", "Monaco Code Editor"]
  },
  {
    title: "MindSpark",
    description: "MindSpark is a fullstack AI flashcard generation website that makes it easy to generate flashcard sets and save them for further learning. We integrated Clerk for authentication and Stripe for potential monetization.",
    image: "/projects/mindspark.png",
    links: [
        { name: "Live Demo", url: "https://flashcardsaas-mu.vercel.app/" },
        { name: "GitHub", url: "https://github.com/jballo/flashcardsaas"}
    ],
    skills: ["React", "Next.js", "Gemini", "Firebase", "Clerk", "Stripe", "Vercel"]
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
    description: "Readanize is my final project for CS50X: Harvard's Introduction to Computer Science. I constructed a website to document book metrics by storing user information in PHP tables and utilized SQL queries to update data. I also interpreted data transforming user interactions by implementing real-time Flask alerts for book completion milestones",
    image: "/projects/readanize.png",
    links: [
        { name: "Video Demo", url: "https://youtu.be/Y5taFZ5RImM/" },
        { name: "GitHub", url: "https://github.com/me50/Paradox560/tree/cs50/problems/2020/x/project"}
    ],
    skills: ["SQL", "HTML", "Flask", "PHP", "Python"]
  },
  {
    title: "Trading Card Generation",
    description: "This is a website created by the East Computer Science club board members that will automatically generate random cards based on our own custom algorithms. The application is built using React and integrates with Firebase for data storage.",
    image: "/projects/checsclub.png",
    links: [
      { name: "Live Demo", url: "https://checsclub.web.app/" },
    ],
    skills: ["React", "Firebase", "Python", "HTML", "CSS", "Mathematics"]
  }
]

const Project = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
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