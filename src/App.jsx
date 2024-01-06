import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/home" element={<Home/>}></Route>
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
