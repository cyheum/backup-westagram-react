import React from "react";
import "./StoryRecommendProfiles.scss";

class StoryRecommendProfiles extends React.Component {
  render() {
    const { author } = this.props;
    return (
      <div className="StoryRecommendProfiles">
        <img src={author.profileImageSrc} alt="profileImg" />
        <div>
          <a>{author.iD}</a>
          <p>{author.description}</p>
        </div>
      </div>
    );
  }
}

export default StoryRecommendProfiles;
