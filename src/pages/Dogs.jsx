import SearchBar from "../components/SearchBar.jsx";
import DogList from "../components/DogList.jsx";
import "./Dogs.css";

function Dogs() {
  return (
    <div className="dogs-page">
      <h1 className="dogs-page-title">Find Your New Best Friend</h1>
      <p className="dogs-page-subtitle">You are welcome to browse all dogs available for adoption</p>
      
      <SearchBar />
      <DogList />
    </div>
  ); 
} 

export default Dogs; 