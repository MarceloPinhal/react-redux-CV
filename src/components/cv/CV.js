import profile from "../cv/profile.png"
import gitHub from "../cv/GitHub.png"
import linkedin from "../cv/LinkedIn.png"


export const CV = {
    hero: {
      name: "Marcelo Pinhal",
      adress: "European Union",
      email: "mpinhal92@gmail.com",
      image: profile,
      gitHub: gitHub,
      linkedin: linkedin,
      aboutMe: "Passionate about coding and outdoor sports.",
      catchPhrase: "Stay Hungry, Stay Foolish!"
    },

    education: [
      {
        name: "FullStack Web Development Bootcamp",
        where: "Upgrade Hub",
      },
      {
        name: "Master's degree - Marketing",
        where: "Católica Business School",
      },
      {
        name: "Bachelor's Degree - Business Communication",
        where: "Polytechnic Institute of Coimbra",
      },
    ],

    experience: [
      {
        name: "Account Executive",
        where: "Docuten",
        description:
          "Helping companies to become paperless with Docuten SAAS Digital signature solution.",
      },
      {
        name: "Account Executive",
        where: "Inovretail",
        description:
          "Inovretail provides data science and digital tools (SAAS) that deliver quantifiable insights and actionable recommendations with a direct and sustainable impact on retailers."
      },
      {
        name: "Account Manager",
        where: "Boca do Lobo",
        description:
          "Boca do Lobo's emotional pieces are handmade in Portugal by talented artisans who use their wisdom to combine traditional manufacturing techniques with the latest technological methods."
      },
    ],

    stack :"html, css, javascript, node, react",

    languages:[ 
      {
      language: "Portuguese",
      level: "Native",
    },
    {
      language: "English",
      level: "B2",
    },
    {
      language: "Spanish",
      level: "B1",
    },
  ]
}
  