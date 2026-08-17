import { useDogs } from "../context/DogContext.jsx";
import DogCard from "./DogCard.jsx"; 
import "./DogList.css";

function DogList() { 
  const { filteredDogs } = useDogs(); 

  if (filteredDogs.length === 0) { 
    return (
      <div className="no-results"> 
        <h3>No dogs found</h3> 
        <p>Try searching for a different breed or name</p>
      </div>
    );
  } 
 
  return (
    <div className="dog-list-grid">
      {filteredDogs.map(dog => ( 
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default DogList;