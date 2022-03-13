import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Context from "../context/Context";

function LogIn() {
  const [username, setUsername] = useState("");
  const [psw, setPsw] = useState("");



  const navigate = useNavigate();
  
  const user =useContext(Context);

  const handleClick = () =>
  {


    user.users.forEach(e =>
    {
      if (e.first_name.toLowerCase() === username.toLowerCase() && e.last_name.toLowerCase() === psw.toLowerCase())
      {
          user.setCurrentuser(e)
          navigate("/home");

          console.log(user.currentuser);
      }
    });

  }



  return (
    <div>
      <div className="container">
        <div className="top"></div>
        <div className="title">
          <div className="icon"></div>
          <div className="text">Login</div>
        </div>
        <div className="body">
          <div className="email">
            <label htmlFor="email">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" id="email" name="email" />
          </div>
          <div className="pass">
            <label htmlFor="pass">Password</label>
            <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" id="pass" name="pass" />
          </div>
          <div className="remember">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" name="pass" />
              Remember Me
            </label>
          </div>
        </div>
        <button onClick={handleClick} className="footer">Log in</button>
      </div>
    </div>
  );
}

export default LogIn;
