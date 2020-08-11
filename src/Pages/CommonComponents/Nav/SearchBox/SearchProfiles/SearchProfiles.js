import React, { Component } from "react";
import "./SearchProfiles.scss";

class SearchProfiles extends Component {
  render() {
    return (
      <div className="SearchProfiles">
        <div className="SearchBoxContainer">
          <img src={this.props.userData.imgSrc} alt="profileImg" />
          <div>
            <span className="userId">{this.props.userData.userId}</span>
            <span>{this.props.userData.userName}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchProfiles;
