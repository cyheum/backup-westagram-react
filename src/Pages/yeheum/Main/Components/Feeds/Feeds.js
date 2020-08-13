import React from "react";
import AddComment from "./AddComment/AddComment";
import "./Feeds.scss";

let lastCommentId = 100;

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.feed,
      isLiked: false,
      newComment: "",
    };
  }

  handleCommentChange = (e) => {
    this.setState({
      newComment: e.target.value,
    });
  };

  enterPush = (e) => {
    if (e.key === "Enter" && e.target.value.length > 1) {
      this.addComment();
    }
  };

  handleChangeClear = (e) => {
    if (e.key === "Enter") {
      this.setState({
        newComment: "",
      });
    }
  };

  commentButtonDisabled = () => {
    return this.state.newComment.length === 0;
  };

  commentInputBtn = (e) => {
    this.addComment();
    e.preventDefault();
  };

  addComment = () => {
    const { data, newComment } = this.state;
    const newCommentObj = {
      userName: data.feedContents.userId,
      content: newComment,
      id: lastCommentId++,
    };
    this.setState({
      newComment: "",
      data: {
        ...this.state.data,
        feedComment: [...this.state.data.feedComment, newCommentObj],
      },
    });
  };

  handleRemoveClick = (commentId) => {
    const { feedComment } = this.state.data;
    this.setState({
      data: {
        ...this.state.data,
        feedComment: feedComment.filter((comment) => {
          return comment.id !== commentId;
        }),
      },
    });
  };

  changeHeartColor = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    const {
      feedComment,
      feedContents: {
        contents,
        userId,
        userName,
        likedPeople,
        feedImgSrc,
        liked,
      },
    } = this.state.data;
    const { isLiked, newComment } = this.state;
    return (
      <section className="feeds">
        <article>
          <div className="feedsTop">
            <div className="wrapProfileL">
              <img src="/images/yeheum/myprofile.png" alt="profileImg" />
              <div>
                <a>{userId}</a>
                <p>{userName}</p>
              </div>
            </div>
            <img className="feedEtc" src="/images/yeheum/more.png" alt="else" />
          </div>
          <img className="feedStyle" src={feedImgSrc} alt="feedImg" />
          <div className="feedIcons">
            <div className="alignCenter">
              <img
                className="iconStyle bigHeart colorHeart"
                onClick={this.changeHeartColor}
                src={
                  isLiked
                    ? "/images/yeheum/redheart.png"
                    : "/images/yeheum/heart.png"
                }
                alt="heart"
              />
              <img
                className="iconStyle"
                src="/images/yeheum/comment.png"
                alt="comment"
              />
              <img
                className="dmIcon"
                src="/images/yeheum/dm.png"
                alt="comment"
              />
            </div>
            <img
              className="iconStyle"
              src="/images/yeheum/bookmark.png"
              alt="bookmark"
            />
          </div>
          <div className="feedLike">
            <img
              className="feedLikeImg"
              src="/images/yeheum/bsjun.png"
              alt="profile"
            />
            <div>
              <a>{likedPeople}</a>님
              <a>
                외{" "}
                <span className="peopleCount">
                  {isLiked ? liked + 1 : liked}
                </span>
                명
              </a>
              이 좋아합니다.
            </div>
          </div>
          <div>
            <div className="feedContents">
              <a>ye_heumheummm</a>
              {contents}
            </div>
            <ul className="commentListContainer" key="commentList">
              {feedComment.map((comment) => {
                return (
                  <AddComment
                    key={comment.id}
                    comment={comment}
                    clickRemoveBtn={this.handleRemoveClick}
                  />
                );
              })}
            </ul>
            <div className="feedTime">6시간전</div>
          </div>
          <form className="feedComment" type="submit">
            <textarea
              className="commentText"
              onKeyUp={this.handleChangeClear}
              onKeyDown={this.enterPush}
              onChange={this.handleCommentChange}
              value={newComment}
              placeholder="댓글 달기..."
            ></textarea>
            <button
              className="commentButton"
              disabled={this.commentButtonDisabled()}
              onClick={this.commentInputBtn}
            >
              게시
            </button>
          </form>
        </article>
      </section>
    );
  }
}

export default Feeds;
