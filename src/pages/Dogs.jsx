import { useContext } from "react";
import { DogContext } from "../context/DogContext";

function DogsPage() {
  const { dogs } = useContext(DogContext); // get dogs from context

  return (
    <div>
      <h2>Available Dogs</h2>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <h3>{dog.name}</h3>
          <p>Breed: {dog.breed} | Age: {dog.age}</p>
        </div>
      ))}
    </div>
  );
}

export default DogsPage;