import React from "react";
import SearchProfiles from "./SearchProfiles/SearchProfiles";
import SearchProfilesData from "./SearchProfiles/SearchProfilesData";
import "./SearchBox.scss";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      userDatas: SearchProfilesData,
    };
  }

  render() {
    const { userDatas } = this.state;
    return (
      <nav className="SearchBox">
        <div className="hiddenSearchBox">
          <div className="searchBox">
            <div className="wrapSearchList">
              {userDatas.map((userData) => {
                return (
                  <SearchProfiles key={userData.idKey} userData={userData} />
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBox;
