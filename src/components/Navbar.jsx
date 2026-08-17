import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { currentUser, logout } = useUser(); 

  return ( 
    <nav className="navbar"> 
      
      <Link to="/" className="navbar-logo">Bosco Adoption Services</Link> 

      <div className="navbar-links"> 
        <Link to="/">Home</Link> 
        <Link to="/dogs">Browse Dogs</Link> 
      </div>

      <div className="navbar-auth"> 
        
        {!currentUser && ( 
          <>
            <Link to="/signup" className="navbar-btn navbar-btn-secondary">Sign Up</Link> 
            <Link to="/signin" className="navbar-btn navbar-btn-primary">Sign In</Link> 
          </>
        )}

        {currentUser && ( 
          <>
            <span className="navbar-welcome">Welcome {currentUser.firstName}</span> 
            {currentUser.role === "admin" && ( 
              <Link to="/admin/add-dog" className="navbar-btn navbar-btn-primary">Add Dog</Link> 
            )}
            <button onClick={logout} className="navbar-btn navbar-btn-primary">Logout</button> 
          </>
        )}
      </div> 
    </nav> 
  ); 
} 

export default Navbar; 