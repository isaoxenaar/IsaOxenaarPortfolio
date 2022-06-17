import React from 'react';
import "./App.css";
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App--main">
      <section className="App--title">
      <header className="App--header">God å møte deg -- Trevligt att träffas </header>
      <nav className="App--nav">
      <Link className="App--link1" to="/">Hjem</Link>
      <Link className="App--link2" to="/Portfolio">Portefølje</Link>
      <Link className="App--link3" to="/Tools">verktøy</Link>
      <Link className="App--link4" to="/About">Om meg</Link>
      <Link className="App--link5" to="/Contact">Contact</Link>
      </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Tools" element={<Tools/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <footer className="App--footer"> © by me for you.</footer>
    </main>
  );
}

export default App;
