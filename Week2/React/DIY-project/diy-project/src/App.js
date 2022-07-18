import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClayItems from './component/clayItems'
import PlantItem from './component/planttems'
import Header from './component/Header'
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='body'>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/> }></Route>
          <Route path="/ClayItems" element={<ClayItems />}></Route>
          <Route path="/PlantItem" element={<PlantItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
