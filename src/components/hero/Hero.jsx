import React from "react";
import "./Hero.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const { hero } = useSelector((state) => state.hero);
  console.log(hero);
  return (
    <div className="hero">
      <div className="hero-image__container">
        <img src={hero.image} alt="profile"></img>
      </div>
      <div className="about-me__container">
        <h2>{hero.name}</h2>
        <p>{hero.aboutMe}</p>
        <p>"{hero.catchPhrase}"</p>
        <div className="social-media__container">
        <a
          href="https://github.com/MarceloPinhal"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-media__logo__gitHub"
            src={hero.gitHub}
            alt="gitHub"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-pinhal-105185159/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-media__logo__linkedin"
            src={hero.linkedin}
            alt="gitHub"
          ></img>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
