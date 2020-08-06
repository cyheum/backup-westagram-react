import React from "react";
import "./AsideNav.scss";
import UserData from "../../UserData";
import StoryRecommendProfiles from "./StoryRecommendProfile/StoryRecommendProfiles";

class AsideNav extends React.Component {
  render() {
    return (
      <div className="AsideNav">
        <aside className="main-right">
          <div className="wrapProfileR">
            <img alt="profileImg" src="/images/yeheum/myprofile.png" />
            <div>
              <a id="yourName">ye_heumheummm</a>
              <p>최예흠</p>
            </div>
          </div>
          <div className="storyRecomWrap">
            <div className="storyRecomStyle">
              <div>스토리</div>
              <div>
                <a className="storyAll">모두 보기</a>
              </div>
            </div>
            {UserData.storyProfileList.map((ele) => {
              return <StoryRecommendProfiles key={ele.iD} author={ele} />;
            })}
          </div>
          <div className="storyRecomWrap">
            <div className="storyRecomStyle">
              <div>회원님을 위한 추천</div>
              <div>
                <a className="storyAll">모두 보기</a>
              </div>
            </div>
            {UserData.recommendProfileList.map((ele) => {
              return <StoryRecommendProfiles key={ele.iD} author={ele} />;
            })}
          </div>
          <div className="copyRight">
            instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 .<br />
            해시태그 . 언어
            <br />
            <br />© 2020 INSTAGRAM
          </div>
        </aside>
      </div>
    );
  }
}

export default AsideNav;
