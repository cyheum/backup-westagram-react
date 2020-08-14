import React from "react";
import HeaderNav from "../../CommonComponents/Nav/HeaderNav";
import SearchBox from "../../CommonComponents/Nav/SearchBox/SearchBox";
import AsideNav from "../Main/Components/AsideNav/AsideNav";
import { withRouter } from "react-router-dom";
import "./CreateContent.scss";

class CreateContent extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSrc: "",
      comment: "",
      showimg: "",
    };
  }

  handlePostContent = () => {
    const { imageSrc, comment } = this.state;
    fetch("http://10.58.5.55:8000/posting/uploadpost", {
      method: "POST",
      body: JSON.stringify({
        contents: comment,
        feedImgSrc: imageSrc,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.goToMain();
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      showimg: this.state.imageSrc,
    });
  };

  goToMain = () => {
    this.props.history.push("/main-yeheum");
  };

  render() {
    return (
      <div className="CreateContent">
        <HeaderNav />
        <SearchBox />
        <main>
          <div className="wrapMain">
            <div className="createContentContainer">
              <div className="contentTitle">게시물을 올려보세요</div>
              <img
                className="showImg"
                src={this.state.showimg}
                alt="게시물이미지"
              />
              <form className="content" onChange={this.handleChange}>
                <div>
                  <input
                    type="text"
                    name="imageSrc"
                    className="imageUrl"
                    placeholder="이미지 url을 넣어주세요"
                  />
                  <button
                    onClick={this.handleClick}
                    type="button"
                    className="imageViewBtn"
                  >
                    사진보기
                  </button>
                </div>
                <input
                  type="text"
                  name="comment"
                  className="comment"
                  placeholder="게시글을 입력해주세요"
                />
              </form>
              <button
                onClick={this.handlePostContent}
                type="button"
                className="contentSubmitBtn"
              >
                게시
              </button>
            </div>
            <AsideNav />
          </div>
        </main>
      </div>
    );
  }
}

export default CreateContent;
