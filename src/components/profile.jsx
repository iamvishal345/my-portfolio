import React from "react"
import Image from "./image"
const Profile = ({ profile }) => (
  <>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="about-inner">
              <div className="row">
                <div className="col s12 m4 l3">
                  <div className="about-inner-left">
                    {/* <img
                      className="profile-img"
                      src={profile.image}
                      alt="Profile Image"
                    /> */}
                    <Image name="profileImage" />
                  </div>
                </div>
                <div className="col s12 m8 l9">
                  <div className="about-inner-right">
                    <h3>About Me</h3>
                    <p>{profile.long_desc}</p>
                    <div className="personal-information col s12 m12 l6">
                      <h3>Personal Information</h3>
                      <ul>
                        <li>
                          <span>Name : </span>
                          {profile.name}{" "}
                        </li>
                        <li>
                          <span>Age : </span>
                          {profile.age} Years
                        </li>
                        <li>
                          <span>Phone : </span>
                          {profile.phone}
                        </li>
                        <li>
                          <span>Email : </span>
                          {profile.email}
                        </li>
                        <li>
                          <span>Address : </span>
                          {profile.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
export default Profile
