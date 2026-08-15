import { useState } from "react";
import useForm from "../hooks/useForm.js";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
        <br />
        <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default SignUp;