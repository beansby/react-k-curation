import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutPage from "./views/info/AboutPage";
import Word from "./test/Word";

function App() {
  return (
    <div className="">
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
