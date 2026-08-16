import { Routes, Route, Link } from "react-router-dom";
import {DogProvider} from "./context/DogContext.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import AdoptionForm from "./pages/AdoptionForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AddDog from "./pages/AddDog.jsx";
import Home from "./pages/Home.jsx";
import Dogs from "./pages/Dogs.jsx";


function App() {

  return (
    <DogProvider>
      <UserProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/adoption-form" element={<AdoptionForm />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/add-dog" element={<AddDog />} />
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </DogProvider>
  );
}

export default App
