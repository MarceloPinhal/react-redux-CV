import { useEffect, useState } from 'react';
import './App.css';
import { CV } from './components/cv/CV';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Language from './components/language/Language';
import Stack from './components/stack/Stack';
import { setHero } from './redux/hero/hero.action';


function App() {

  const [component, setComponent] = useState("")
  const {hero} = CV;
  const {education} = CV;
  const {experience} = CV;
  const {stack} = CV;
  const {languages} = CV;

  useEffect(()=>{
    setHero(hero)
  }, [hero])

  return (
    <div className="app">
    <Hero hero={hero}/>
    <Stack stack={stack}/>
    <div className='buttons-container'>
    <button 
    className="button"
    onClick={()=>setComponent("education")}
    >Education
    </button>
    <button 
    className="button"
    onClick={()=>setComponent("experience")}
    >
    Experience
    </button>
    <button 
    className="button"
    onClick={()=>setComponent("languages")}
    >
    Languages
    </button>
    </div>
    {component === "education" && <Education education={education}/>}
    {component === "experience" && <Experience experience={experience}/>}
    {component === "languages" && <Language languages={languages}/>}
    </div>
  );
}

export default App;
