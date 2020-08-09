import React from "react";
import "./HeaderNav.scss";
import { Link } from "react-router-dom";

class HeaderNav extends React.Component {
  constructor() {
    super();

    this.textInput = React.createRef();

    this.state = {
      isFocus: false,
    };
  }

  handleClickSearchBox = (e) => {
    this.setState({
      isFocus: true,
    });
    this.textInput.current.focus();
  };

  handleBlurSearchBox = (e) => {
    this.setState({
      isFocus: false,
    });
  };

  render() {
    return (
      <header>
        <nav className="HeaderNav">
          <div className="homeIcons">
            <Link to="/">
              <img
                className="iconStyle"
                src="/images/yeheum/logo.png"
                alt="instaIcon"
              />
            </Link>
            <div className="hLine"></div>
            <Link to="/">
              <img
                className="instaMainImg"
                src="/images/yeheum/logo_text.png"
                alt="instaMainImg"
              />
            </Link>
          </div>
          <div className="wrapNavTextBar">
            <div className="navTextBarCon">
              <span className="searchImgInText"></span>
              <input
                className="navTextBar"
                ref={this.textInput}
                onBlur={this.handleBlurSearchBox}
                type="text"
                name="searchText"
                placeholder="검색"
              />
              <span className="searchXBtn"></span>
            </div>
            <div
              className={
                this.state.isFocus ? "hiddenSearchBox" : "searchIconBox"
              }
              onClick={this.handleClickSearchBox}
            >
              <div>
                <span className="searchImg"></span>
                <span className="searchText">검색</span>
              </div>
            </div>
          </div>
          <div className="hrefIcons">
            <img className="home" alt="home" src="/images/yeheum/home.png" />
            <img className="dmIcon" alt="DM" src="/images/yeheum/dm.png" />
            <img
              className="iconStyle"
              alt="compass"
              src="/images/yeheum/explore.png"
            />
            <img
              className="iconStyle"
              alt="heart"
              src="/images/yeheum/heart.png"
            />
            <img
              className="iconStyle"
              alt="profile"
              src="/images/yeheum/profile.png"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderNav;
