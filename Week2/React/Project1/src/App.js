import Nav from './component/Nav'
import Body from './component/MoviList'
import Foteer from './component/Footer'
import "./App.css";
import { useState } from 'react';
// import Search from './component/search'

function App() {
 let [search,setSearch]=useState("")
 const setsearch=(search)
  setSearch(search)
  return (
    <div className="App">
      <Nav setsearch={setSearch}/>
     <Body  />
      <Foteer/>
    </div>
  );
}

export default App;
