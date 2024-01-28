import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NoPage/>}></Route>         
          <Route path="/" element={<Home/>}></Route>
        </Routes>{" "}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
