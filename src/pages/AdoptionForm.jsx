import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { useUser } from "../context/UserContext.jsx";

function AdoptionForm() {
  const { dogId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useUser();
  const [dog, setDog] = useState(null); 

  // 9. MOCK DOG DATA - Delete when given dogcontext
  const mockDogs = [
    { id: "1", name: "Buddy", breed: "Golden Retriever", age: 3, size: "Large", gender: "Male", description: "Very friendly", image: "https://place.dog/300/200" },
    { id: "2", name: "Luna", breed: "Beagle", age: 2, size: "Medium", gender: "Female", description: "Loves to play", image: "https://place.dog/300/200" }
  ];


  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
      return;
    }

    const foundDog = mockDogs.find(d => d.id === dogId);
    setDog(foundDog);

    if (!foundDog) {
      alert("Dog not found");
      navigate("/");
    }
  }, [dogId, currentUser, navigate]);


  const [form, handleChange] = useForm({ 
    firstName: currentUser?.firstName || "", 
    lastName: currentUser?.lastName || "", 
    email: currentUser?.email || "",
    dogName: dog?.name || "",
    dogBreed: dog?.breed || ""
  }); 

  function handleSubmit(e) {
    e.preventDefault();
    
    // 18. TODO: Call Person B's removeDog(dogId) here
    // removeDog(dogId)
    
    alert(`Adoption request for ${dog.name} submitted! Person D will contact you.`);
    navigate("/");
  }

  if (!dog) return <p>Loading dog...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Adopt {dog.name}</h2>
      <img src={dog.image} alt={dog.name} style={{ width: "100%" }} />
      <p><b>Breed:</b> {dog.breed} | <b>Age:</b> {dog.age} | <b>Size:</b> {dog.size} | <b>Gender:</b> {dog.gender}</p>
      <p>{dog.description}</p>
      <hr />

      <form onSubmit={handleSubmit}>
        <h3>Your Information</h3>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} readOnly />
        <br />
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} readOnly />
        <br />
        <input type="email" name="email" value={form.email} onChange={handleChange} readOnly />
        <br />
        <h3>Dog Information</h3>
        <input type="text" name="dogName" value={form.dogName} readOnly />
        <br />
        <input type="text" name="dogBreed" value={form.dogBreed} readOnly />
        <br />
        <button type="submit">Confirm Adoption</button>
      </form>
    </div>
  );
}

export default AdoptionForm;