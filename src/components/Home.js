import "./Home.css";
import { useContext, useState } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

function Home() {
  const user = useContext(Context);

  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className={`all ${theme}`}>
        <nav className="nav">
          <p className="logo">Navbar</p>
          <ul>
            <li>Home</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>{user.currentuser.first_name}</li>
            <li>
              <Link className="link" to="/">
                <i class="fa-solid fa-right-from-bracket"></i>
              </Link>
            </li>
          </ul>
        </nav>
      <button onClick={handleClick}>Change Mode</button>
      </div>

    </div>
  );
}

export default Home;
