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
      inputContents: [
        {
          name: "userAdress",
          type: "text",
          placeholder: "휴대폰 번호 또는 이메일 주소",
        },
        {
          name: "userName",
          type: "text",
          placeholder: "성명",
        },
        {
          name: "userId",
          type: "text",
          placeholder: "사용자 이름",
        },
        {
          name: "userPw",
          type: "password",
          placeholder: "비밀번호",
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isUserInfoInput = () => {
    const { userAdress, userName, userId, userPw, inputContents } = this.state;
    return (
      userAdress.length === 0 ||
      userName.length === 0 ||
      userId.length === 0 ||
      userPw.length <= 5
    );
  };

  goToMain = () => {
    this.props.history.push("/login-yeheum");
  };

  handleClickPost = () => {
    const { userAdress, userPw } = this.state;
    fetch("http://10.58.4.237:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: userAdress,
        password: userPw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.goToMain();
      });
  };

  render() {
    const { inputContents } = this.state;
    return (
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
          {inputContents.map((el) => (
            <input
              className="userInfoTextBox"
              name={el.name}
              type={el.type}
              placeholder={el.placeholder}
            ></input>
          ))}
          <button
            className="submitBtn"
            type="button"
            disabled={this.isUserInfoInput()}
            onClick={this.goToMain}
          >
            가입
          </button>
        </form>
        <div className="AddInformation">
          가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
        </div>
      </div>
    );
  }
}

export default SignUp;
