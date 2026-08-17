import { useNavigate } from "react-router-dom"; 
import { useUser } from "../context/UserContext.jsx"; 
import "./DogCard.css"; 

function DogCard({ dog }) { 
  const navigate = useNavigate(); 
  const { currentUser } = useUser(); 

  function handleAdopt() { 
    if (!currentUser) { 
      alert("You need to sign in first to adopt a dog"); 
      navigate("/signin"); 
    } else { 
      navigate(`/adopt/${dog.id}`); 
    }
  }

  return ( 
    <div className="dog-card">
      <img
        src={dog.image}
        alt={dog.name}
        className="dog-card-image" 
      />
      
      <div className="dog-card-content">
        <h3 className="dog-card-name">{dog.name}</h3> 
        <p className="dog-card-info"><strong>Breed:</strong> {dog.breed}</p> 
        <p className="dog-card-info"><strong>Age:</strong> {dog.age} years</p> 
        <p className="dog-card-info"><strong>Size:</strong> {dog.size}</p> 
        <p className="dog-card-info"><strong>Gender:</strong> {dog.gender}</p> 
        <p className="dog-card-description">{dog.description}</p> 

        <button
          className="adopt-btn" 
          onClick={handleAdopt} 
        >
          Adopt {dog.name} 
        </button> 
      </div> 
    </div> 
  ); 
} 

export default DogCard;