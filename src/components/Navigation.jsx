import { Link, useLocation } from "react-router-dom";
 
const Navigation = () => {
  const location = useLocation();
 
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");
 
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/posts" className={isActive("/posts") ? "active" : ""}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default Navigation;