import React from "react";
import Footer from "../components/Footer"; 
import "./Home.css"; 

function Home() { 
  return ( 
    <div className="home"> 
      <header className="hero"> 
        <div className="hero-overlay"> 
          <div className="hero-content"> 
            <h1 className="hero-title">Find Your New Best Friend</h1>
            <p className="hero-subtitle"> 
              Even Bosco needs a home! Come adopt with us today.
            </p>
          </div> 
        </div>
      </header> 

      <Footer /> 
    </div> 
  );
} 

export default Home; 