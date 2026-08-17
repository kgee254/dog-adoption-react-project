import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDogs } from "../context/DogContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import "./AdoptionForm.css"; 

function AdoptionForm() {
  const { dogId } = useParams(); 
  const navigate = useNavigate(); 
  const { dogs, removeDog } = useDogs(); 
  const { currentUser } = useUser(); 

  const dog = dogs.find(d => d.id === parseInt(dogId)); 

  const [formData, setFormData] = useState({ 
    fullName: currentUser?.username || "", 
    email: currentUser?.email || "",
    phone: "",
  });

  if (!dog) { 
    return <h2 className="not-found">Dog not found</h2>;
  }

  function handleChange(e) { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) { 
    e.preventDefault(); 
    alert(`Application submitted for ${dog.name}!`); 
    removeDog(dog.id); 
    navigate("/dogs"); 
  }

  return (
    <div className="adoption-form-container"> 
      <h1 className="form-title">Adopt {dog.name}</h1> 
      
      <div className="adoption-content">
        <div className="dog-info-card">
          <img src={dog.image} alt={dog.name} className="dog-info-image" />
          <h2>{dog.name}</h2>
          <p><strong>Breed:</strong> {dog.breed}</p>
          <p><strong>Age:</strong> {dog.age} years</p>
          <p><strong>Size:</strong> {dog.size}</p>
          <p><strong>Gender:</strong> {dog.gender}</p>
          <p className="dog-description">{dog.description}</p>
        </div>


        <form className="adoption-form" onSubmit={handleSubmit}>
          <h2>Adoption Application</h2> 

          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />

          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;