import { useState } from "react";
import "./Authentication.css";
import Logo from "../assets/images/Logo.png";

function Authentication() {
  const [invalidloginName, setInvalidloginName] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [enteredloginName, setEnteredloginName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const loginNameNotValid = submitted && enteredloginName.trim().length !== 10;
  const PassNotValid = submitted && enteredPassword.trim().length < 8;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setInvalidloginName(loginNameNotValid);
    setInvalidPass(PassNotValid);

    if (!loginNameNotValid && !PassNotValid) {
      console.log("Đăng nhập thành công");
    }
  };

  return (
    <div className="auth-wrapper">
      <img src={Logo} alt="Logo" className="logo" />
      <div id="auth">
        <div id="auth-inputs">
          <h2>ĐĂNG NHẬP</h2>
          <form className="controls" onSubmit={handleSubmit} noValidate>
            {/* Tên đăng nhập */}
            <div className="control">
              <input
                type="tel"
                placeholder=" "
                className={`loginName ${invalidloginName ? "invalid" : ""}`}
                onChange={(event) => setEnteredloginName(event.target.value)}
              />
              <label>Tên đăng nhập</label>
              {invalidloginName && <p className="error-text">Sai tên đăng nhập</p>}
            </div>

            {/* Mật khẩu */}
            <div className="control">
              <input
                type="password"  // luôn giữ type=password để browser show/hide password hoạt động
                placeholder=" "
                className={`password ${invalidPass ? "invalid" : ""}`}
                onChange={(event) => setEnteredPassword(event.target.value)}
              />
              <label>Mật khẩu</label>
              {invalidPass && <p className="error-text">Sai mật khẩu</p>}
            </div>

            {/* Quên mật khẩu */}
            <button type="button" className="forgetPass">
              Quên mật khẩu
            </button>

            {/* Nút đăng nhập */}
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
