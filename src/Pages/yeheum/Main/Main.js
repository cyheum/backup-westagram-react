import React from "react";
import "./Main.scss";
import HeaderNav from "./Components/Nav/HeaderNav";
import SearchBox from "./Components/Nav/SearchBox";
import FirstFeed from "./Components/Feeds/FirstFeed";
import AsideNav from "./Components/AsideNav/AsideNav";
import { FeedData } from "./Components/Feeds/FeedData";

class Main extends React.Component {
  render() {
    return (
      <>
        <HeaderNav />
        <SearchBox />
        <main>
          <div className="wrapMain">
            {FeedData.map((el) => {
              return <FirstFeed feedDOM={el} />;
            })}
            {/* <FirstFeed feedDOM={FeedData[0]} /> */}
            <AsideNav />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
