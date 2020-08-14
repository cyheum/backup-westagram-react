import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CommonPage.scss";

class CommonPage extends Component {
  constructor() {
    super();
    this.state = {
      profilesTop: [
        {
          goTo: "/login-yeheum",
          alt: "yeheum",
          src: "/images/yeheum/me.jpeg",
        },
        {
          goTo: "/login-tae",
          alt: "taegyu",
          src: "/images/yeheum/tae.jpg",
        },
      ],
      profilesBottom: [
        {
          goTo: "/login-oh",
          alt: "seungha",
          src: "/images/yeheum/seungha.jpg",
        },
        {
          goTo: "/login-gy",
          alt: "gyuyoung",
          src: "/images/yeheum/dog.png",
        },
      ],
    };
  }
  render() {
    const { profilesTop, profilesBottom } = this.state;
    return (
      <section className="CommonPage">
        <div className="wrapMainLogo">
          <img
            className="mainLogoImg"
            alt="mainLogo"
            src="/images/yeheum/logo_text.png"
          />
        </div>
        <div className="mainProfileImgContainer">
          <div className="WrapProfileNameContainer">
            {profilesTop.map((el) => (
              <div className="profileNameContainer">
                <Link to={el.goTo}>
                  <img className="mainProfileImg" alt={el.alt} src={el.src} />
                </Link>
                <div className="profileName">{el.alt}</div>
              </div>
            ))}
          </div>
          <div className="WrapProfileNameContainer">
            {profilesBottom.map((el) => (
              <div className="profileNameContainer">
                <Link to={el.goTo}>
                  <img className="mainProfileImg" alt={el.alt} src={el.src} />
                </Link>
                <div className="profileName">{el.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CommonPage;
