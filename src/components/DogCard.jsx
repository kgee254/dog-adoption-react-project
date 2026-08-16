import React from "react";

function DogCard({ dog }) {
  return (
    <div className="dog-card">
      <img src={dog.image} alt={dog.name} />
      <h3>{dog.name}</h3>
      <p>{dog.breed}</p>
      <p>{dog.age} years old</p>
    </div>
  );
}

export default DogCard;
