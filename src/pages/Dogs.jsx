import { useState } from "react";
import { useDogs } from "../context/DogContext";
import SearchBar from "../components/SearchBar";
import DogList from "../components/DogList";

function Dogs() {
    const {dogs} = useDogs();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDogs = dogs.filter((dog) => {
        const search =searchTerm.toLowerCase();

        return (
            dog.name.toLowerCase().includes(search) ||
            dog.breed.toLowerCase().includes(search)
        );
    });
        return (
            <main className="dogs-page"> 
                <h1>Dogs Available for Adoption</h1>

                <SearchBar 
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
                <DogList dogs={filteredDogs} />
            </main>
        );
   }

export default Dogs;