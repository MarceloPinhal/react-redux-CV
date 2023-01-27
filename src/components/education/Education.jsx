import React from "react";

function Education({ education }) {
  return (
    <div className="education-card">
    <h3>Education</h3>
      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="education-tittle">What: {item.name}</p>
            <p className="education-element">Where: {item.where}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
