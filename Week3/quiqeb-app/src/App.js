import React from 'react';
import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './component/Header';
import Rigester from './component/Register';
import Home from './component/Home';
import Login from './component/Login'
import { BrowserRouter as Router, Routes, Route ,  Link as RouteLink} from 'react-router-dom';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rigester" element={<Rigester />}></Route>
          <Route path="/Login" element={<Login />}></Route>

        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
