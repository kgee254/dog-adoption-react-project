import { useState } from "react";
import { useNavigate } from "react-router-dom";
import admins from "../data/admins.js";
import "./SignUp.css"

function AdminLogin() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  function handleSubmit(e) { 
    e.preventDefault(); 

   
    const foundAdmin = admins.find(
      a => a.firstName.toLowerCase() === email.toLowerCase() && a.password === password
    );

    if (foundAdmin) { 
      localStorage.setItem("admin", JSON.stringify(foundAdmin)); 
      alert(`Welcome Admin ${foundAdmin.firstName}`);
      navigate("/admin/add-dog");
    } else { 
      setError("Invalid admin credentials");
    } 
  }

  return (
    <div className="form-page">
       <div className="form-card"> 
      <h2 className="form-title">Admin Login</h2> 
      {error && <p className="form-message" style={{color: '#D32F2F'}}>{error}</p>} 
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">Admin Username</label> 
        <input 
          type="text" 
          placeholder="Enter first name" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="form-input"
          required 
        />
        <label className="form-label">Password</label> 
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="form-input"
          required 
        />
        <button type="submit" className="form-btn">Sign In</button> 
      </form>
      </div>
    </div>
  );
}

export default AdminLogin;