import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      
      {/* <Blog /> */}
    </div>
  );
}

export default App;
