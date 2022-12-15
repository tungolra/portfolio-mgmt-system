import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import NavBar from "../../components/NavBar/NavBar";
import * as seed from "../../seed.js";
import ProjectDetailPage from "../ProjectDetailPage/ProjectDetailPage";
import AllWorkPage from "../AllWorkPage/AllWorkPage";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import { useState } from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import NewEntry from "../NewEntry/NewEntry";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="app-container">
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        {user ? (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="all-work" element={<AllWorkPage />}></Route>
            <Route path="blog" element={<Blog />} />
            <Route path="entry" element={<NewEntry />} />
            {/* route to create entry */}
            <Route
              path="/projects/:project"
              element={<ProjectDetailPage seed={seed} />}
            ></Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="all-work" element={<AllWorkPage />}></Route>
            <Route path="blog" element={<Blog />} />
            <Route
              path="login"
              element={<LogInForm setUser={setUser} />}
            ></Route>
            <Route
              path="/projects/:project"
              element={<ProjectDetailPage seed={seed} />}
            ></Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
