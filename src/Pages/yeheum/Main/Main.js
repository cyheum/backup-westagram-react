import React from "react";
import "./Main.scss";
import HeaderNav from "../../CommonComponents/Nav/HeaderNav";
import SearchBox from "./Components/Nav/SearchBox";
import Feeds from "./Components/Feeds/Feeds";
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
              return <Feeds key={el} feedDOM={el} />;
            })}
            <AsideNav />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
