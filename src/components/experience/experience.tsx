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
    title: "Software Engineer",
    date: "Jan 2020 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Tech Company",
    link: "https://techcompany.com"
  },
  {
    title: "Frontend Developer",
    date: "Jun 2018 - Dec 2019",
    description: "Built responsive user interfaces with HTML, CSS, and JavaScript.",
    company: "Web Solutions",
    link: "https://websolutions.com"
  },
  {
    title: "Software Engineer",
    date: "Jan 2020 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Tech Company",
    link: "https://techcompany.com"
  },
  {
    title: "Frontend Developer",
    date: "Jun 2018 - Dec 2019",
    description: "Built responsive user interfaces with HTML, CSS, and JavaScript.",
    company: "Web Solutions",
    link: "https://websolutions.com"
  },
  {
    title: "Software Engineer",
    date: "Jan 2020 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
    company: "Tech Company",
    link: "https://techcompany.com"
  },
  {
    title: "Frontend Developer",
    date: "Jun 2018 - Dec 2019",
    description: "Built responsive user interfaces with HTML, CSS, and JavaScript.",
    company: "Web Solutions",
    link: "https://websolutions.com"
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div className="uk-container uk-padding">
      <div className="uk-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="uk-timeline-item">
            <div className="uk-timeline-icon">
              <span className="uk-badge"><span data-uk-icon="icon: check"></span></span>
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
                  <a href={experience.link} className="uk-button uk-button-text" target="_blank" rel="noopener noreferrer">Read more</a>
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
