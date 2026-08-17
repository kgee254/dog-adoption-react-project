import { createContext, useState, useContext, useEffect } from "react";
import initialDogs from "../data/initialDogs";

const DogContext = createContext(); 

export function DogProvider({ children }) { 
  
  const [dogs, setDogs] = useState(() => { 
    
    const saved = localStorage.getItem("dogs");
    return saved? JSON.parse(saved) : initialDogs;  
  });

  const [searchTerm, setSearchTerm] = useState(""); 


  useEffect(() => {
    localStorage.setItem("dogs", JSON.stringify(dogs));
  }, [dogs]);


  function addDog(newDog) {
    const dogWithId = { 
     ...newDog, 
      id: dogs.length > 0? dogs[dogs.length - 1].id + 1 : 1 
    };
    setDogs([...dogs, dogWithId]); 
  }

  function removeDog(id){
    setDogs(prevDogs => prevDogs.filter(dog => dog.id !== id)); 
  }

  
  const filteredDogs = dogs.filter(dog => 
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dog.description.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
 

  const value = {
    dogs, 
    filteredDogs,
    searchTerm, 
    setSearchTerm, 
    addDog, 
    removeDog
  };

  return ( 
    <DogContext.Provider value={value}> 
      {children} 
    </DogContext.Provider>
  );
}


export function useDogs() { 
  return useContext(DogContext); 
} 