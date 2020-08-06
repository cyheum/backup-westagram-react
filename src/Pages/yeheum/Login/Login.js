import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      pw: "",
    };
  }

  isIdPwInput = () => {
    if (
      this.state.email.length > 1 &&
      this.state.email.includes("@") &&
      this.state.pw.length > 5
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push("/Main");
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
              <div id="forgetPw">
                <a href="login.html">비밀번호를 잊으셨나요?</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
