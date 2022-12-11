import "./App.css";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Blog />
    </div>
  );
}

export default App;
