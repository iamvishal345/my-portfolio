import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PROFILE } from "../constant"
import Banner from "../components/banner"
import Profile from "../components/profile"
import Skills from "../components/skills"
import Experience from '../components/experience'
import Education from '../components/education'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className="main-wrapper">
      <main role="main">
        {/* <!-- START HOME SECTION --> */}
        <Banner profile={PROFILE}></Banner>
        {/* <!-- START ABOUT SECTION --> */}
        <Profile profile={PROFILE}></Profile>
        {/* <!-- Start Skill --> */}
        <Skills></Skills>
        {/* Experience Section */}
        <Experience></Experience>
        {/* Education Section */}
        <Education></Education>
      </main>
    </div>
  </Layout>
)

export default IndexPage
