import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>

      
      <div className="topRight">
        {user ? (
          <Link  to="/settings">
            <img
              className="topImg"
              src="https://th.bing.com/th/id/R.fd68e854272c79284039122853b45eab?rik=0yOVfMnsFHv8MA&riu=http%3a%2f%2ffeverishthoughts.com%2fphoto%2fwp-content%2fuploads%2f2012%2f04%2f1462695842_83fef1a684_b.jpg&ehk=MdEVaBVdwtnvLdSgEG7t%2bxj19%2fEOmkb22j2PveZBUO8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <Link  to="/Posts">
        <i className="topSearchIcon fas fa-search"></i>
        </Link>
      </div>
    </div>
  );
}