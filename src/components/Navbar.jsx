import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentUser, logout } = useUser();
  return (
    <nav style={{padding: "10px" ,borderBottom: "1px solid gray"}}>
      <link to="/">Home</link>{"| "}
      <link to="/dogs">Browse Dogs</link>{"| "}

      {!currentUser && (
        <>
         <link to="/signup">Sign Up</link>
         {"| "}
         <link to="/signin">Sign In</link>
          </>
      )}


      {currentUser && (
        <>
          <span>Welcome, {currentUser.firstName}</span>
          {" | "}
          {currentUser.role === "admin" && (
            <link to="/admin/add-dog">Add Dog</link>
          )}
          {currentUser.role === "admin" && "|"}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
