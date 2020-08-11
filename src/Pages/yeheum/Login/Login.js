import React from "react";
import "./Login.scss";
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      pw: "",
    };
  }

  isIdPwInput = () => {
    return (
      this.state.email.length === 0 ||
      !this.state.email.includes("@") ||
      this.state.pw.length <= 5
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push("/main-yeheum");
  };

  render() {
    return (
      <div className="Login">
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
                  value={this.state.email}
                  name="email"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="loginTextbox loginpwText"
                  value={this.state.pw}
                  type="password"
                  name="pw"
                  placeholder="비밀번호"
                />
                <button
                  className="loginButton"
                  name="button"
                  disabled={this.isIdPwInput()}
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </form>
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
