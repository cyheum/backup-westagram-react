import React from "react";

class AddComment extends React.Component {
  constructor() {
    super();

    this.state = {
      isLiked: false,
    };
  }

  changeHeartColor = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  removeComment = () => {};

  render() {
    return (
      <li>
        <a>{this.props.author.userName}</a>
        {this.props.author.comment}
        <span className="commentIcons">
          <img
            className="commentHeart colorHeart"
            onClick={this.changeHeartColor}
            src={
              this.state.isLiked === true
                ? "/images/yeheum/redheart.png"
                : "/images/yeheum/heart.png"
            }
            alt="heart"
          />
          <span onClick={this.removeComment} className="searchXBtn"></span>
        </span>
      </li>
    );
  }
}

export default AddComment;
