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
    const { userName, content, id } = this.props.comment;

    return (
      <li>
        <a>{userName}</a>
        {content}
        <span className="commentIcons">
          <img
            className="commentHeart colorHeart"
            onClick={this.handleLikeClick}
            src={
              this.state.isLiked
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
      </li>
    );
  }
}

export default AddComment;
