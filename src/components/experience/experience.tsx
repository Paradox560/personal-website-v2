import './experience.css';

type ExperienceInfo = {
  image: string;
  title: string;
  date: string;
  description: string[];
  company: string;
  link: string;
};

const experiences: ExperienceInfo[] = [
  {
    image: "/experience/umdcs.png",
    title: "Undergraduate Teaching Assistant",
    date: "Aug 2024 - Present",
    description: [
      "• Taught and curated Java programming concepts and guided them on learning different concepts during office hours",
      "• Graded quizzes, projects, and exams of around 200+ students giving helpful feedback on mistakes and methods to improve",
    ],
    company: "University of Maryland Department of Computer Science",
    link: "https://undergrad.cs.umd.edu/teaching-assistants"
  },
  {
    image: "/experience/inovalon.png",
    title: "Software Engineer Intern",
    date: "Jun 2024 - Dec 2024",
    description: [
      "• Created Snowflake SQL tables to query AWS Managed Workflow for Apache Airflow metrics to construct comprehensive Datadog and Power BI dashboards",
      "• Deployed Airflow code to AWS following CI/CD practices in Azure DevOps to ensure successful integration of DAG changes",
      "• Worked with over 70 billion data points to create client side Angular UI for dynamic query building based on user specifications",
      "• Taught company wide Power BI session on conditional formatting and AI tools to help 30+ analysts create more intuitive dashboards"
    ],
    company: "Inovalon",
    link: "https://www.inovalon.com/"
  },
  {
    image: "/experience/usnews.png",
    title: "Technical Lead - Contract",
    date: "Jan 2024 - Present",
    description: [
      "• Unified queried API data to create comprehensive internal QA web application to efficiently validate metric values using time series analysis and machine learning models saving non-technical staff hundreds of hours of manual lookup",
      "• Bridged knowledge gap between departments by creating easy visual access to PostgreSQL tables of thousands of colleges and metrics ",
      "• Presented the product at the U.S. News Headquarters to company leadership, including the CTO and lead engineers"
    ],    company: "US News and World Report",
    link: "https://appdevclub.com/#/project/664d226acc3b67d0b751de0b"
  },
  {
    image: "/experience/lpf.png",
    title: "Software Engineer - Contract",
    date: "Aug 2024 - Dec 2024",
    description: [
      "• Developing inventory management application for a non-profit organization utilizing Salesforce for backend with mobile scalability",
      "• Collaborated with engineers through the Microsoft Mentorship Program to reduce security risks and achieve greater quality code"
    ],    company: "Hack4Impact-UMD & Leveling the Playing Field",
    link: "https://umd.hack4impact.org/ourwork/lpf"
  },
];

const Experience = () => {
  return (
    <div className="uk-container uk-padding">
      <div className="uk-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="uk-timeline-item">
            <div className="uk-timeline-icon">
              <img src={experience.image} alt={experience.title} className="experience-icon" />
            </div>
            <div className="uk-timeline-content">
              <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div className="uk-card-header">
                  <div className="uk-grid-small uk-flex-middle" uk-grid>
                    <div className="uk-width-expand">
                      <h3 className="uk-card-title uk-margin-remove-bottom">{experience.title}</h3>
                      <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">{experience.company}</p>
                    </div>
                    <div className="uk-card-badge uk-label">{experience.date}</div>
                  </div>
                </div>
                <div className="uk-card-body uk-text-left">
                  {experience.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
                <div className="uk-card-footer">
                  <a href={experience.link} className="uk-button uk-button-text" target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
