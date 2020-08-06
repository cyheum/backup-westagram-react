import React from "react";
import "./StoryRecommendProfiles.scss";

class StoryRecommendProfiles extends React.Component {
  render() {
    return (
      <>
        <div className="wrapProfile">
          <img src={this.props.author.profileImageSrc} alt="profileImg" />
          <div>
            <a>{this.props.author.iD}</a>
            <p>{this.props.author.description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default StoryRecommendProfiles;
