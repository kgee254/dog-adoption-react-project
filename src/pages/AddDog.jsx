import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { useDogs } from "../context/DogContext.jsx"; 
import "./AddDog.css"; 

function AddDog() { 
  const navigate = useNavigate(); 
  const { addDog } = useDogs(); 

  const [formData, setFormData] = useState({ 
    name: "", 
    breed: "", 
    age: "", 
    size: "Medium", 
    gender: "Male", 
    description: "", 
    image: "" 
  });

  const [preview, setPreview] = useState("");

  function handleChange(e) { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, image: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) { 
    e.preventDefault();
    const newDog = { 
      ...formData, 
      id: Date.now(), 
      age: parseInt(formData.age) 
    };
    addDog(newDog); 
    alert(`${newDog.name} has been added!`); 
    navigate("/dogs"); 
  }

  return ( 
    <div className="form-page"> 
    <div className="form-card adddog-card"> 
      <h2 className="form-title">Add a New Dog</h2> 

      <form className="form" onSubmit={handleSubmit}> 
        <label className="form-label">Dog Name</label> 
        <input 
          type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required 
        />

        <label className="form-label">Breed</label>
        <input 
          type="text" name="breed" value={formData.breed} onChange={handleChange} className="form-input" required 
        />

        <label className="form-label">Age</label>
        <input 
          type="number" name="age" value={formData.age} onChange={handleChange} className="form-input" min="0" required 
        />

        <label className="form-label">Size</label>
        <select name="size" value={formData.size} onChange={handleChange} className="form-input"> 
          <option value="Small">Small</option> 
          <option value="Medium">Medium</option> 
          <option value="Large">Large</option> 
        </select>

        <label className="form-label">Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} className="form-input"> 
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label className="form-label">Upload Image</label>
        <input 
          type="file" name="image" accept="image/*" onChange={handleImageChange} className="form-file" required 
        />

        {preview && <img src={preview} alt="preview" className="image-preview" />}

        <label className="form-label">Description</label>
        <textarea 
          name="description" value={formData.description} onChange={handleChange} rows="4" className="form-textarea" required 
        ></textarea>

        <button type="submit" className="form-btn">Add Dog</button>
      </form>
    </div>
    </div>
  );
}

export default AddDog; 