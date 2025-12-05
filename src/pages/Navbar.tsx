import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"/register"}>register</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/about"}>about</Link>
      </div>
    </div>
  );
}

export default Navbar;
