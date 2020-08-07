import React from "react";
import "./FirstFeed.scss";

class Comment extends React.Component {
  render() {
    return (
      <li>
        <a>{this.props.author.userName}</a>
        {this.props.author.comment}
        <span className="commentIcons">
          <img
            className="commentHeart colorHeart"
            src="/images/yeheum/heart.png"
            alt="heart"
          />
          <span className="searchXBtn"></span>
        </span>
      </li>
    );
  }
}

class FirstFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.feedDOM,
    };
  }

  commentChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  EnterPush = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter" && e.target.value.length > 1) {
      this.addCommentFunc();
    }
  };

  isItAble = () => {
    return !(this.state.data.feedComment.length > 0);
  };

  commentInputBtn = (e) => {
    this.addCommentFunc();
    e.preventDefault();
  };

  addCommentFunc = () => {
    const addComment = {};
    addComment.userName = this.state.data.feedContents.userId;
    addComment.comment = this.state.newComment;
    this.state.data.feedComment.push(addComment);
    this.setState({
      newComment: "",
    });
  };

  render() {
    const {
      feedComment,
      feedContents: { userId, userName, LikedPeople, feedImgSrc, Liked },
    } = this.state.data;
    return (
      <section className="feeds">
        <article>
          <div className="feedsTop">
            <div className="wrapProfileL">
              <img src="/images/yeheum/myprofile.png" alt="profileImg" />
              <div>
                <a href="">{userId}</a>
                <p>{userName}</p>
              </div>
            </div>
            <img class="feedEtc" src="/images/yeheum/more.png" alt="else" />
          </div>
          <img className="feedStyle" src={feedImgSrc} alt="feedImg" />
          <div className="feedIcons">
            <div class="alignCenter">
              <img
                className="iconStyle bigHeart colorHeart"
                src="/images/yeheum/heart.png"
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
              <a>{LikedPeople}</a>님
              <a>
                외 <span className="peopleCount">{Liked}</span>명
              </a>
              이 좋아합니다.
            </div>
          </div>
          <div>
            <div className="feedContents">
              <a>ye_heumheummm</a>두부야 안뇨오옹
            </div>
            <ul className="commentListContainer" key="commentList">
              {feedComment.map((el) => {
                return <Comment author={el} />;
              })}
            </ul>
            <div className="feedTime">6시간전</div>
          </div>
          <form
            className="feedComment"
            type="submit"
            onChange={this.commentChange}
          >
            <textarea
              className="commentText"
              onKeyUp={(e) => this.EnterPush(e)}
              name="newComment"
              value={this.state.newComment}
              placeholder="댓글 달기..."
            ></textarea>
            <button
              className="commentButton"
              disabled={this.isItAble()}
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

export default FirstFeed;
