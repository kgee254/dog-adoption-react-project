import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now fake check. Later connect to backend
    if (email === "admin@test.com") {
      login({ name: "Admin", role: "admin" }); // role === "admin"
      navigate("/admin/add-dog");
    } else {
      alert("Not an admin");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input 
        type="email" 
        placeholder="admin@test.com" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default AdminLogin;