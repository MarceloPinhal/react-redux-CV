import React from 'react'
import "./Hero.css"

const Hero = ({hero}) => {
  return (
    <div className='hero'>
        <img src={hero.image} alt="profile"></img>
        <div className='about-me__container'>
                <p>Name:{hero.name}</p>
                <p>Adress:{hero.adress}</p>
                <p>Email:<a href ={hero.email}>{hero.email}</a></p>
                <p>GitHub:<a href={hero.gitHub}>{hero.gitHub}</a></p>
                <p>About me:{hero.aboutMe}</p>
        </div>
    </div>
  )
}

export default Hero