import React from "react";
import DogCard from "./DogCard";
import initialDogs from "../data/initialDogs";

function DogList({ limit }) {
  const dogsToShow = limit ? initialDogs.slice(0, limit) : initialDogs;

  return (
    <div className="dog-list">
      {dogsToShow.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default DogList;
