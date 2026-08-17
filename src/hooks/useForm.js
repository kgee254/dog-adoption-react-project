import { useState } from "react";

export default function useForm(initialValues) { 
  const [form, setForm] = useState(initialValues); 

  function handleChange(e) { 
    setForm({ ...form, [e.target.name]: e.target.value }); 
  }

  function resetForm() { 
    setForm(initialValues);
  }

  return [form, handleChange, resetForm];
} 