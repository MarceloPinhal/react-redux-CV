import React from 'react'

const Language = (languages) => {
  return (
    <div className="language-card">
    <h3>Languages</h3>
      {languages.languages.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="language-element">Language:{item.language}</p>
            <p className="language-element">Level:{item.level} </p>
          </div>
        );
      })}
    </div>
  );
}
export default Language