import React from "react"
import { EXPERIENCELIST } from "../constant"


const Experience = () => (
  <>
    <section id="experience">
      <div className="container">
        <div className="experience-inner">
          <h2 className="title">Experience</h2>
          {/* <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p> */}
          <div id="owl-carousel" className="row">
            {EXPERIENCELIST.map((expr,i) => {
              return (
                  <div key = {i} className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <h2 className="experience-title">{expr.timeSpan}</h2>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator reveal-title">
                        {expr.jobTitle}
                      </span>
                      <p>
                        <a href="#">{expr.company}</a>
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title reveal-title">
                        {expr.jobTitle}
                        <i className="material-icons right">close</i>
                      </span>
                      <a href="#" className="card-subtitle">
                        {expr.company}
                      </a>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on. The point of using Lorem
                        Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                      </p>
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

export default Experience
