import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

class HeaderNav extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      searchText: "",
      isFocus: false,
    };
  }

  handleChangeSearchText = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleClickSearchBox = () => {
    const { current } = this.textInput;
    this.setState({
      isFocus: true,
    });
    current.focus();
    current.select();
  };

  handleBlurSearchBox = (e) => {
    this.setState({
      isFocus: false,
    });
  };

  render() {
    const { searchText, isFocus } = this.state;
    return (
      <header className="HeaderNavContainer">
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
                onChange={this.handleChangeSearchText}
                onBlur={this.handleBlurSearchBox}
                type="text"
                placeholder="검색"
              />
              <span className="searchXBtn"></span>
            </div>
            <div
              className={isFocus ? "hiddenSearchBox" : "searchIconBox"}
              onClick={this.handleClickSearchBox}
            >
              <div className="wrapSearchBoxContain">
                <span className="searchImg"></span>
                <span className="searchText">
                  {searchText.length === 0 ? "검색" : searchText}
                </span>
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
