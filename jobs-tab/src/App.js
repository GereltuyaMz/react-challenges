import React, { useState, useEffect } from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setJobs(newJob);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  // console.log(jobs[value]?.title)
  const { company, dates, duties, title } = jobs[value] || ''
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {jobs && jobs.map((job, index) => {
            return (
              <h4 key={job.id} onClick={() => setValue(index)} className={`job-name ${index === value && 'active'}`} >{job.company}</h4>
            )
          })}
        </div>
        <div className="company-content">
          <h2 className="job-title">{title}</h2>
          <p className="company-name">{company}</p>
          <p className="date">{dates}</p>
          {duties && duties.map((duty, index) => (
            <div className="text" key={index}>
              <AiFillCaretRight />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
