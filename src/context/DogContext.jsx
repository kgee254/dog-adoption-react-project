import {createContext, useContext, useState } from "react";
import initialDogs from "../data/initialDogs";

const DogContext = createContext();

export function DogProvider ({ children }) {
    const [dogs, setDogs] = useState(initialDogs);
    return (
        <DogContext.Provider value={{ dogs, setDogs }}>
            {children}
        </DogContext.Provider>
    );
}

export function useDogs() {
    return useContext(DogContext);
}