import React from "react"
import { EDUCATION } from "../constant"
const Education = () => {
  return (
    <>
      <section id="edcuation">
        <div className="container">
          <div className="education-inner">
            <h2 className="title">Education</h2>
            {/* <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here.It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English
            </p> */}
            <div id="owl-carousel1" className="experience-slider row">
              {EDUCATION.map((edu,i) => {
                return (
                  <div key={i} className="col s12">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <h2 className="experience-title">{edu.session}</h2>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator reveal-title">
                          {edu.type}
                        </span>
                        <p>
                          <a href="#">{edu.institute}</a>
                        </p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title reveal-title">
                          {edu.type}
                          <i className="material-icons right">close</i>
                        </span>
                        <a href="#" className="card-subtitle">
                          {edu.institute}
                        </a>
                        <p>
                          Here is some more information about this product that
                          is only revealed once clicked on. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English
                        </p>
                      </div>
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
}

export default Education
