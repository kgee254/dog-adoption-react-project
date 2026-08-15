import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import AdoptionForm from "./pages/AdoptionForm.jsx";

function App() {
  return (
    <UserProvider>
      <Navbar />

      <Routes> 
        <Route path="/" element={<h1>Home Page - Add Home.jsx later</h1>} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/adopt/:dogId" element={<AdoptionForm />} />
      </Routes>

    </UserProvider>
  );
}

export default App;