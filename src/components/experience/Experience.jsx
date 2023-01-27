import React from 'react'

const Experience = ({experience}) => {
    return (
      <div className="education-card">
      <h3>Experience</h3>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="education-tittle">What: {item.name}</p>
              <p className="education-element">Where: {item.where}</p>
              <p className="education-element">Description: {item.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
export default Experience