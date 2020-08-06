import React from "react";
import "./Main.scss";
import HeaderNav from "./Components/Nav/HeaderNav";
import SearchBox from "./Components/Nav/SearchBox";
import FirstFeed from "./Components/Feed/FirstFeed";
import SecondFeed from "./Components/Feed/SecondFeed";
import AsideNav from "./Components/AsideNav/AsideNav";

class Main extends React.Component {
  render() {
    return (
      <>
        <HeaderNav />
        <SearchBox />
        <main>
          <div className="wrapMain">
            <FirstFeed />
            <SecondFeed />
            <AsideNav />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
