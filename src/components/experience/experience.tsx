import './experience.css';

type ExperienceInfo = {
  title: string;
  date: string;
  description: string;
  company: string;
  link: string;
};

const experiences: ExperienceInfo[] = [
  {
    title: "Undergraduate Teaching Assistant",
    date: "Aug 2024 - Present",
    description: "Built responsive user interfaces with HTML, CSS, and JavaScript.",
    company: "University of Maryland Department of Computer Science",
    link: "https://undergrad.cs.umd.edu/teaching-assistants"
  },
  {
    title: "Software Engineer Intern",
    date: "Jun 2024 - Dec 2024",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Inovalon",
    link: "https://www.inovalon.com/"
  },
  {
    title: "Technical Lead - Contract",
    date: "Jan 2024 - Jan 2025",
    description: "Built responsive user interfaces with HTML, CSS, and JavaScript.",
    company: "US News and World Report",
    link: "https://appdevclub.com/#/project/664d226acc3b67d0b751de0b"
  },
  {
    title: "Software Engineer - Contract",
    date: "Aug 2024 - Dec 2024",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Hack4Impact-UMD & Leveling the Playing Field",
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
              <span className="uk-badge"><span uk-icon="check"></span></span>
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
                  <p className="uk-text-success">{experience.description}</p>
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
