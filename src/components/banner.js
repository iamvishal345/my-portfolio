import React from "react"

const Banner = ({ profile }) => (
  <>
    <section id="home">
      <div className="overlay-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="home-inner">
                <h1 className="home-title">
                  HI! I'm <span>{profile.name}</span>
                </h1>
                <p>{profile.short_desc}</p>
                <a
                  className="hire-me-btn btn waves-effect waves-light btn-large"
                  href="#footer"
                >
                  Contact Me <i className="mdi-content-send left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
export default Banner
