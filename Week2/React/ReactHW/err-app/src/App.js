import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cards/> }></Route>
          <Route path="/About" element={<About/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
