import React from "react";
import "../css/Home.css";
import whale from "./whale1.png";
import Whale from "./whale";

const Home = () => {

 return (<section className="Home--main">
     <Whale/>
     <h1 className="Home--text">Hej! I am Full Stack .NET & Full Stack Javascript developer. Currently as a consultant at <a className="Home--link" href="https://salt.dev/">Salt</a> in Oslo.</h1>
     <section className="Home--drawing">
     <img className="Home--img" alt="" src={whale} />
     <div className="Home--wink"></div>

     </section>
 </section>)
}

export default Home;