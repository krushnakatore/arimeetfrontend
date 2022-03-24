import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Wishlist } from "./components/wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
