import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdoptionForm from "./pages/AdoptionForm";
import SignIn from "./pages/SignIn";
import DogList from "./pages/DogList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogList />} />
        <Route path="/signin" element={<SignIn />} />
        
        {/* This route is now protected */}
        <Route 
          path="/adopt/:dogId" 
          element={
            <ProtectedRoute>
              <AdoptionForm />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}