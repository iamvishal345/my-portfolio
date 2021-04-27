import React from "react"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PROJECTS } from "../constant"
const colorsArr = [
  "#284942",
  "#104E8B",
  "#660198",
  "#A5435C",
  "#BE2625",
  "#6F4242",
  "#B28647",
  "#7B7922",
  "#3B5323",
  "#006B54",
]
const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Header title="Projects" />
    <div className="project-cards">
      {PROJECTS.map(project => (
        <div className="project-card">
          <h3>{project.name}</h3>
          <div className="tech-list-container">
            {project.technologies.map(tech => (
              <div
                style={{
                  backgroundColor: colorsArr[Math.floor(Math.random() * 10)],
                }}
                className="tech"
              >
                {tech}
              </div>
            ))}
          </div>
          <p>{project.description}</p>
          <div className="footer">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                Github
              </a>
            ) : (
              <span className="grey">Github</span>
            )}
            <a href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default Projects
