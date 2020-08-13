import React from "react";
import "./StoryRecommendProfiles.scss";

class StoryRecommendProfiles extends React.Component {
  render() {
    const { profileImageSrc, id, description } = this.props.author;
    return (
      <div className="StoryRecommendProfiles">
        <img src={profileImageSrc} alt="profileImg" />
        <div>
          <a>{id}</a>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default StoryRecommendProfiles;
