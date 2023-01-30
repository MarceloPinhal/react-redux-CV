import React from 'react'
import "./Language.css"

const Language = (languages) => {
  return (
    <div className="language-card">
      {languages.languages.map((item) => {
        return (
          <div key={JSON.stringify(item)} className="language-elements">
            <p className="language-element"><strong>Language:</strong>{item.language}</p>
            <p className="language-element"><strong>Level:</strong>{item.level} </p>
          </div>
        );
      })}
    </div>
  );
}
export default Language