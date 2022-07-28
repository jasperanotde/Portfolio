import React from 'react'
import "./about.css"
import Educ from "../../img/DBTC Logo.png"

export const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/04/image-293.png" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-desc">
                I Jasper Anotde is a fresh graduate, with no on-hand 
                experience in the field of work. Yet his background in Web Developing, 
                UI/UX Design, and Full Stack management inform his mindful but competitive approach.
            </p>
            <div className="a-educ">
                <img src={Educ} alt="" className="a-educ-img" />
                <div className="a-educ-texts">
                    <h4 className="a-educ-title">
                    Don Bosco Technical College - Mandaluyong
                    </h4>
                    <p className="a-educ-desc">
                    Bachelor of Science in Computer Science (S.Y 2019-2023)
                    </p>
                </div>
            </div>
            <p className="a-desc">
            </p>
        </div>
    </div>
  )
}

export default About
