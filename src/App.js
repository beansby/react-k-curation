import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCell from "./components/ItemCell";
import MainPage from "./views/main/MainPage";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="">
      <Navigation/>
      <Routes>
        <Route exact path="/test" element={<Item />} />
        <Route exact path="/" element={<MainPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
