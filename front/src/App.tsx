import React from 'react';
import "./App.css";
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import About from "./components/About";


function App() {
  return (
    <main className="App--main">
      <header className="App--header">God å møte deg -- Trevligt att träffas </header>
      <nav className="App--nav">
      <Link className="App--link1" to="/">Home</Link>
      <Link className="App--link2" to="/Portfolio">Portfolio</Link>
      <Link className="App--link3" to="/Tools">Tools</Link>
      <Link className="App--link4" to="/About">About</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Tools" element={<Tools/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      </nav>
      <footer className="App--footer">isa.oxenaar@appliedtechnology.se, or get in touch with Salt, School of Applied Technology.</footer>
    </main>
  );
}

export default App;
