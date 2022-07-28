import React from 'react'
import "./intro.css"
import Me from "../../img/Profile Picture.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, my name is</h2>
                <h1 className="i-name">Jasper Jhon D. Anotde</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Full Stack Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop services for customers of all sizes, specializing
                    in creating modern and stylish websites for business
                    and personal purpose. As for my specialties,
                    I can also be a Software Developer by all sorts software upgrades 
                    for customers' existing programs and systems. Design each 
                    piece of an application or system and plan how 
                    the pieces will work together
                </p>
            </div>
            <svg class="i-arrows-scroll">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
        <div className="i-right">
            <div className="i bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro