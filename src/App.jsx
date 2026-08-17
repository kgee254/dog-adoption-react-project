import { Routes, Route, Link } from "react-router-dom";
import { DogProvider } from "./context/DogContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import AdoptionForm from "./pages/AdoptionForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AddDog from "./pages/AddDog.jsx";
import Dogs from "./pages/Dogs.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <UserProvider>
      <DogProvider> 
        <Navbar />
 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/adopt/:dogId" element={<AdoptionForm />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/add-dog" element={<AddDog />} />
            <Route path="/dogs" element={<Dogs />} />
          </Routes>

      </DogProvider>
    </UserProvider>  
  );
} 

export default App;