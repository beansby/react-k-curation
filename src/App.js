import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCell from "./components/ItemCell";
import MainPage from "./views/main/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/test" element={<ItemCell />} />
        <Route exact path="/" element={<MainPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
