import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import About from "./components/About";


function App() {
  return (
    <main className="App--main">
      <header>God å møte deg -- Trevligt att träffas </header>
      <nav className="App--nav">
      <Link to="/">Home</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Tools">Tools</Link>
      <Link to="/About">About</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Tools" element={<Tools/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      </nav>
      <footer>isa.oxenaar@appliedtechnology.se</footer>
    </main>
  );
}

export default App;
