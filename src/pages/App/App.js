import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import NavBar from "../../components/NavBar/NavBar";
import * as seed from "../../seed.js";
import ProjectDetailPage from "../ProjectDetailPage/ProjectDetailPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/projects/:project"
          element={<ProjectDetailPage seed={seed} />}
        ></Route>
        <Route path="/*" element={<Navigate to="/" />} />
        {/* <Route path="/blog*" element={<Blog />} /> */}
      </Routes>
    </div>
  );
}

export default App;
