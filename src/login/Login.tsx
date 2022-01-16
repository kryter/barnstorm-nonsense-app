import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
  let navigate = useNavigate();

  return (
    <div className="login-form-container">
      <div className="email-label form-label">Email</div>
      <input className="email-textbox form-item" type="text" />

      <div className="password-label form-label">Password</div>
      <input className="password-textbox form-item" type="text" />
      <button className="log-in-button" type="button" onClick={() => navigate('/')}>
        Log in
      </button>
    </div>
  );
}

export default Login;
