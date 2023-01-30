import React from "react";
import "./Education.css"
function Education({ education }) {
  return (
    <div className="education-card">
      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)} className="education-elements">
            <p className="education-tittle"><strong>What:</strong>{item.name}</p>
            <p className="education-element"><strong>Where: </strong>{item.where}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
