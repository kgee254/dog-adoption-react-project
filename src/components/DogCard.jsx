function DogCard ({ dog }) {
    return (
        <div className="dog-card">
            <img
             src={dog.image}
             alt={dog.name}
             className="dog-image"
             />
             <div className="dog-info">
                <h2>{dog.name}</h2>
                <p>{dog.breed}</p>
                <p>{dog.age} years old</p>
                <p>{dog.size}</p>
                <p>{dog.gender}</p>
                <p>{dog.description}</p>

                <button>Adopt</button>
             </div>
        </div>
    );
}
export default DogCard;