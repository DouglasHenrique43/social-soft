import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic1">Generic1</Link>
        </li>
        <li>
          <Link to="/generic2">Generic2</Link>
        </li>
      </ul>
      <div className="right-items">
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
