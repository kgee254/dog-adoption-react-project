import { useState } from "react"; 
import useForm from "../hooks/useForm.js"; 
import { useUser } from "../context/UserContext.jsx"; 
import { useNavigate } from "react-router-dom"; 
import "./SignUp.css"
 
function SignUp() { 
  const { signUp } = useUser(); 
  const navigate = useNavigate(); 
  const [form, handleChange, resetForm] = useForm({ firstName: "", lastName: "", email: "", password: "" }); 
  const [message, setMessage] = useState(""); 

  function handleSubmit(e) { 
    e.preventDefault();
    const result = signUp(form); 
    setMessage(result.message); 
    if (result.success) { 
      resetForm(); 
      setTimeout(() => navigate("/signin"), 1000); 
    }
  }

  return (
    <div className="form-page">
      <div className="form-card"> 
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="form-input" required />
        <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="form-input" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-input" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="form-input" required />
        
        <button type="submit" className="form-btn">Sign Up</button>
      </form>
      {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
}

export default SignUp; 