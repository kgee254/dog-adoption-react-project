import { useState } from "react";
import useForm from "../hooks/useForm.js"; 
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css"
 
function SignIn() {
  const { signIn } = useUser();
  const navigate = useNavigate();
  const [form, handleChange, resetForm] = useForm({ email: "", password: "" }); 
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const result = signIn(form.email, form.password);
    setMessage(result.message);
    if (result.success) {
      resetForm(); 
      setTimeout(() => navigate("/"), 1000);
    }
  }

  return (
    <div className="form-page">
      <div className="form-card"> 
      <h2 className="form-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-input" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="form-input" required />
       
        <button type="submit" className="form-btn">Sign In</button>
      </form>
      {message && <p className="form-message">{message}</p>}
      <p className="form-link-text">
        <Link to="/admin-login" className="form-link">Are you an administrator?</Link>
      </p>
      </div>
    </div>
  );
}

export default SignIn;