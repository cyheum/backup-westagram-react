import React from "react";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  handleLikeClick = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    const {
      isCommentHidden,
      comment: { userName, content, id },
    } = this.props;
    const { isLiked } = this.state;

    return (
      <li className={isCommentHidden ? "hideComment" : "showComment"}>
        <div>
          <span className="userName">{userName}</span>
          {content}
        </div>
        <div>
          <span className="commentIcons">
            <img
              className="commentHeart colorHeart"
              onClick={this.handleLikeClick}
              src={
                isLiked
                  ? "/images/yeheum/redheart.png"
                  : "/images/yeheum/heart.png"
              }
              alt="heart"
            />
            <span
              onClick={() => {
                this.props.clickRemoveBtn(id);
              }}
              className="searchXBtn"
            ></span>
          </span>
        </div>
      </li>
    );
  }
}

export default AddComment;
