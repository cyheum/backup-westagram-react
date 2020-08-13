import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      errorMessage: "",
    };
  }

  isIdPwInput = () => {
    const { email, pw } = this.state;
    return email.length === 0 || !email.includes("@") || pw.length <= 5;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push("/main-yeheum");
  };

  handleClickPost = () => {
    const { email, pw } = this.state;
    fetch("http://10.58.4.237:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.message === "WRONG_PASSWORD") {
          this.setState({
            errorMessage: "비밀번호가 일치하지 않습니다.",
          });
        } else if (response.message === "INVALID_USER") {
          this.setState({
            errorMessage: "아이디가 없습니다.",
          });
        } else if (response.message === "Register_Success") {
          localStorage.setItem("Authorization", response.access_token);
          this.goToMain();
        }
      });
  };

  render() {
    const { email, pw, errorMessage } = this.state;
    return (
      <div className="LoginYeheum">
        <section className="wrapsection">
          <article className="wrapArticle">
            <img
              className="iphoneImg"
              alt="iphoneImg"
              src="/images/yeheum/instaMainImg1.png"
            />
            <div className="wrapLogin">
              <div className="wrapImg">
                <img
                  className="instaImg"
                  alt="instaLogo"
                  src="/images/yeheum/logo_text.png"
                />
              </div>
              <form className="wrapTexts" onChange={this.handleChange}>
                <input
                  className="loginTextbox loginidText"
                  value={email}
                  name="email"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="loginTextbox loginpwText"
                  value={pw}
                  type="password"
                  name="pw"
                  placeholder="비밀번호"
                />
                <button
                  className="loginButton"
                  type="button"
                  name="button"
                  disabled={this.isIdPwInput()}
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </form>
              <div className="errorMessage">{errorMessage}</div>
              <div className="forgetPw">
                <div className="forgetPwText">비밀번호를 잊으셨나요?</div>
                <Link to="/sign-up-yeheum">
                  <div className="SignUpText">회원가입</div>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
