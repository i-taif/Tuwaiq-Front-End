import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/about";
import Extra from "./component/Extra";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/> }></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Extra" element={<Extra />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
