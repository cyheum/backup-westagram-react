import React from "react";
import SearchProfiles from "./SearchProfiles/SearchProfiles";
import SearchProfilesData from "./SearchProfiles/SearchProfilesData";

import "./SearchBox.scss";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      userDatas: [],
    };
  }

  componentDidMount() {
    this.setState({
      userDatas: SearchProfilesData,
    });
  }

  render() {
    const { userDatas } = this.state;
    console.log(userDatas);
    return (
      <nav className="SearchBox">
        <div className="hiddenSearchBox">
          <div className="searchBox">
            <div className="WrapSearchList">
              {userDatas.map((userData) => {
                return <SearchProfiles userData={userData} />;
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBox;
