import React from "react";
import "./Main.scss";
import HeaderNav from "../../CommonComponents/Nav/HeaderNav";
import SearchBox from "../../CommonComponents/Nav/SearchBox/SearchBox";
import Feeds from "./Components/Feeds/Feeds";
import AsideNav from "./Components/AsideNav/AsideNav";
import { FeedData } from "./Components/Feeds/FeedData";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      yongminFeed: {},
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.55:8000/posting/showpost")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          yongminFeed: res,
        });
      });
  }

  handleGoToCreateContent = () => {
    this.props.history.push("/createContent-yeheum");
  };

  render() {
    return (
      <div className="YeheumMain">
        <HeaderNav />
        <SearchBox />
        <main>
          <div className="wrapMain">
            <div className="wrapGoToCreateContentBtn">
              <button
                className="goToCreateContentBtn"
                type="button"
                onClick={this.handleGoToCreateContent}
              >
                게시물 올리기
              </button>
            </div>
            {FeedData &&
              FeedData.map((feed) => {
                return <Feeds key={feed.id} feed={feed} />;
              })}
            <AsideNav />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
