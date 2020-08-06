import React from "react";
import "./FirstFeed.scss";
import FeedData from "./FeedData";

function Comment(props) {
  return (
    <li>
      <a>{props.author.userId}</a>
      {props.author.comment}
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

class FirstFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: "ye_heumheumm",
      comment: "",
    };
  }

  commentChane = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isItAble = () => {
    return !(this.state.comment.length > 0);
  };

  commentInputBtn = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="feeds">
        <article>
          <div className="feedsTop">
            <div className="wrapProfileL">
              <img src="/images/img/myprofile.png" alt="profileImg" />
              <div>
                <a href="">ye_heumheummm</a>
                <p>최예흠</p>
              </div>
            </div>
            <img class="feedEtc" src="/images/yeheum/more.png" alt="else" />
          </div>
          <img
            className="feedStyle"
            src="/images/yeheum/dog.png"
            alt="feedImg"
          />
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
              <img className="dmIcon" src="/images/img/dm.png" alt="comment" />
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
              <a>bn_sj2013</a>님
              <a>
                외 <span className="peopleCount">928</span>명
              </a>
              이 좋아합니다.
            </div>
          </div>
          <div>
            <ul className="commentListContainer" key="commentList">
              <div className="feedContents">
                <a>ye_heumheummm</a>두부야 안뇨오옹
              </div>
              {FeedData.firstFeed.feedComment.map((el) => {
                return <Comment userId={el.userName} comment={el.comment} />;
              })}
            </ul>
            <div className="feedTime">6시간전</div>
          </div>
          <form
            className="feedComment"
            type="submit"
            onChange={this.commentChane}
          >
            <textarea
              className="commentText"
              name="comment"
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
