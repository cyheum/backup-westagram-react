import React, { Component } from "react";
import "./SearchProfiles.scss";

class SearchProfiles extends Component {
  render() {
    const { imgSrc, userId, userName } = this.props.userData;
    return (
      <div className="SearchProfiles">
        <div className="searchBoxContainer">
          <img src={imgSrc} alt="profileImg" />
          <div>
            <span className="userId">{userId}</span>
            <span>{userName}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchProfiles;
