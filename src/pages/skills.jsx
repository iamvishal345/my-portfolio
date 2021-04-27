import React from "react"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SKILLS } from "../constant"

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <Header title="Skills" />
    <div className="skill-cards-container">
      {Object.keys(SKILLS).map((headerKey, index) => {
        return (
          <div key={index} className="card">
            <h3 className="skills-header">
              {headerKey.replace("_", " and ").toUpperCase()}
            </h3>
            <div className="skills">
              {SKILLS[headerKey].map((skill, i) => {
                return (
                  <div key={i} className="capsule">
                    {skill.name}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default SkillsPage
