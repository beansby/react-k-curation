import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCell from "./components/ItemCell";
import MainPage from "./views/main/MainPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/test" element={<ItemCell />} />
        <Route exact path="/" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
