import React from 'react'
import "./Experience.css"

const Experience = ({experience}) => {
    return (
      <div className="experience-card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="experience-elements">
              <p className="education-tittle"><strong>What:</strong> {item.name}</p>
              <p className="education-element"><strong>Where:</strong> {item.where}</p>
              <p className="education-element"><strong>Description:</strong> {item.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
export default Experience