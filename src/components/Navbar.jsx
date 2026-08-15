import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

function Navbar() {
  const { currentUser, logout } = useUser();

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <Link to="/">Home</Link>
      {" | "}
      
      {!currentUser && (
        <>
          <Link to="/signup">Sign Up</Link>
          {" | "}
          <Link to="/signin">Sign In</Link>
        </>
      )}

      {currentUser && (
        <>
          <span>Welcome, {currentUser.firstName}</span>
          {" | "}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;