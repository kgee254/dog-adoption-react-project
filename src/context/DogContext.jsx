import { createContext, useState } from "react";

export const DogContext = createContext();

export function DogProvider({ children }) {
  const [dogs, setDogs] = useState([
    { id: 1, name: "Bella", breed: "Labrador", age: 2 },
    { id: 2, name: "Max", breed: "German Shepherd", age: 3 }
  ]);

  // This is the function AddDog will call
  const addDog = (formData) => {
    const newDog = {
      ...formData,
      id: dogs.length + 1, // simple ID
      age: Number(formData.age) // make sure age is a number
    };
    setDogs((prevDogs) => [...prevDogs, newDog]); // add to existing array
  };

  return (
    <DogContext.Provider value={{ dogs, addDog }}>
      {children}
    </DogContext.Provider>
  );
}