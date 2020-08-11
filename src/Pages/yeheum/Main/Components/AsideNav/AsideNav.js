import React from "react";
import UserData from "../../UserData";
import StoryRecommendProfiles from "./StoryRecommendProfile/StoryRecommendProfiles";
import "./AsideNav.scss";

class AsideNav extends React.Component {
  constructor() {
    super();

    this.state = {
      isStoryBtnPushed: false,
      isRecommendBtnPushed: false,
    };
  }

  handlerStoryShowAllClick = () => {
    this.setState({
      isStoryBtnPushed: !this.state.isStoryBtnPushed,
    });
  };

  handlerRecommendShowAllClick = () => {
    this.setState({
      isRecommendBtnPushed: !this.state.isRecommendBtnPushed,
    });
  };

  render() {
    return (
      <aside className="AsideNav">
        <div className="main-right">
          <div className="wrapProfileR">
            <img alt="profileImg" src="/images/yeheum/myprofile.png" />
            <div>
              <div className="userId">ye_heumheummm</div>
              <div className="userName">최예흠</div>
            </div>
          </div>
          <div
            className={
              this.state.isStoryBtnPushed
                ? "heightAutoStoryRecomWrap"
                : "storyRecomWrap"
            }
          >
            <div className="storyRecomStyle">
              <div>스토리</div>
              <div>
                <div
                  className="storyAll"
                  onClick={this.handlerStoryShowAllClick}
                >
                  모두 보기
                </div>
              </div>
            </div>
            {UserData.storyProfileList.map((storyProfile) => {
              return (
                <StoryRecommendProfiles
                  key={storyProfile.userKey}
                  author={storyProfile}
                />
              );
            })}
          </div>
          <div
            className={
              this.state.isRecommendBtnPushed
                ? "heightAutoStoryRecomWrap"
                : "storyRecomWrap"
            }
          >
            <div className="storyRecomStyle">
              <div>회원님을 위한 추천</div>
              <div>
                <div
                  className="storyAll"
                  onClick={this.handlerRecommendShowAllClick}
                >
                  모두 보기
                </div>
              </div>
            </div>
            {UserData.recommendProfileList.map((recommendProfile) => {
              return (
                <StoryRecommendProfiles
                  key={recommendProfile.userKey}
                  author={recommendProfile}
                />
              );
            })}
          </div>
          <div className="copyRight">
            instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 .<br />
            해시태그 . 언어
            <br />
            <br />© 2020 INSTAGRAM
          </div>
        </div>
      </aside>
    );
  }
}

export default AsideNav;
