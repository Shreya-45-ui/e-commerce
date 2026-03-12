import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));

    if (loggedIn) {
      navigate("/home"); 
    } else if (!user) {
      setIsLogin(false); 
    } else {
      setIsLogin(true); 
    }
  }, [navigate]);

  
  const handleSignup = () => {
    if (username.length < 3 || password.length < 6) {
      alert("Username min 3 & Password min 6 characters");
      return;
    }

   
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, password })
    );

    alert("Signup successful! Please login.");
    setIsLogin(true); 
    setUsername("");
    setEmail("");
    setPassword("");
  };

 
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user found! Please signup first.");
      setIsLogin(false); 
      return;
    }

    if (
      user.username === username &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true"); 
      navigate("/home");
    } else {
      alert("Invalid username, email, or password.");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

        <div className="tab-box">
          <button
            className={isLogin ? "tab active" : "tab"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "tab active" : "tab"}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLogin ? (
          <button className="main-btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button className="main-btn" onClick={handleSignup}>
            Signup
          </button>
        )}

       
        <p className="bottom-text">
          {isLogin ? (
            <>
              Not a member?{" "}
              <span onClick={() => setIsLogin(false)}>Signup now</span>
            </>
          ) : (
            <>
              Already a member?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Auth;