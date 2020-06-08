import React from "react"
import { SKILLS } from "../constant"

const Skills = ({ skills }) => (
  <>
    <section id="skill">
      <div className="container">
        <div className="skill-inner">
          <h2 className="title">Skills</h2>
          {/* <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p> */}
          <div className="row">
            {Object.keys(SKILLS).map((headerKey,index) => {
              return (
                <div key = {index} style={{marginTop:"1rem",marginBottom:"1rem"}} className="col s12">
                  <h3 className="skills-header center">
                    {headerKey.replace("_", " and ").toUpperCase()}
                  </h3>
                  <div className="skill-progress-bar">
                    {SKILLS[headerKey].map((skill,i) => {
                      return (
                        <div key ={i} className="col s6">
                          <span>{skill.name}</span>
                          <div className="pro-bar-container color-wisteria">
                            <div
                              className={`pro-bar bar-${skill.level} color-amethyst`}
                              data-pro-bar-percent={skill.level}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  </>
)
export default Skills
