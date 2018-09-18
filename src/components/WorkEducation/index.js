import React from 'react';

class WorkEducation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const jobs = this.props.work.jobs.map((job, i) =>
      <div className="work__job" key={i}>
        <h4 className="job__date">{job.date}</h4>
        <h4><span><a href={job.url} target="_blank">{job.website}</a></span></h4>
        <h4><span>{job.title}</span></h4>
        <div className="job__breaker"></div>
      </div>
    );

    const education = this.props.education.education.map((education, i) =>
      <div className="education__source" key={i}>
        <h4>{education.source}</h4>
        <ul className="classes" >
        {education.classes.map((source, i) =>

            <li key={i}>{source.class}</li>

        )}
        </ul>
      </div>
    );

    return (
        <section className="section work-education">
          <div className="work">
            <h2>{this.props.work.title}</h2>
            <div className="work__container">
              {jobs}
            </div>
          </div>
          <div className="education">
            <h2>{this.props.education.title}</h2>
            {education}
          </div>
        </section>
    );
  }
}

export default WorkEducation;
