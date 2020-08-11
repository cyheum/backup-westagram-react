import React from "react";
import "./SignUp.scss";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      userAdress: "",
      userName: "",
      userId: "",
      userPw: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isUserInfoInput = () => {
    const { userAdress, userName, userId, userPw } = this.state;
    return (
      userAdress.length === 0 ||
      userName.length === 0 ||
      userId.length === 0 ||
      userPw.length <= 5
    );
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="WrapSignUpBoxContain">
          <img
            className="instaLogo"
            alt="instaLogo"
            src="/images/yeheum/logo_text.png"
          />
          <div className="SignUpDescriptionText">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
          <form className="userInfoText" onChange={this.handleChange}>
            <input
              className="userInfoTextBox"
              name="userAdress"
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
            ></input>
            <input
              className="userInfoTextBox"
              name="userName"
              type="text"
              placeholder="성명"
            ></input>
            <input
              className="userInfoTextBox"
              name="userId"
              type="text"
              placeholder="사용자 이름"
            ></input>
            <input
              className="userInfoTextBox"
              name="userPw"
              type="text"
              placeholder="비밀번호"
            ></input>
            <button
              className="submitBtn"
              disabled={this.isUserInfoInput()}
              onClick={this.goToMain}
            >
              가입
            </button>
          </form>
          <div className="AddInformation">
            가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
            됩니다.
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
