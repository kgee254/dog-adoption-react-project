import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DogList from "../components/DogList";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <header className="hero">
        <h1>🐶 Welcome to the Dog Adoption Portal</h1>
        <p>Manage adoptable dogs and help them find loving homes.</p>
      </header>

      <section className="preview">
        <h2>Featured Dogs</h2>
        <DogList limit={3} />
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
