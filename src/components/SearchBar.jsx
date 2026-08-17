import { useDogs } from "../context/DogContext.jsx";
import "./SearchBar.css"; 

function SearchBar() { 
  const { searchTerm, setSearchTerm } = useDogs();

  function handleChange(e) { 
    setSearchTerm(e.target.value); 
  }
 
  return ( 
    <div className="searchbar-container">
      <input 
        type="text" 
        placeholder="Search by name, breed, or description..." 
        value={searchTerm} 
        onChange={handleChange} 
        className="searchbar-input"
      />
    </div>
  );
}

export default SearchBar;