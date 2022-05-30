import React from "react";
import "../css/About.css";
import imgPortret from '../Images/portret.png';

const About = () => {
 return (
 <section className="About--main">
        <h3 className="About--title">isa oxenaar</h3>
    <img src={imgPortret} className="About--img"/>
    <h6 className="About--text">
    A background in writing and literature led me through interactive storytelling to coding (Web Development). I’ve completed a Full Stack JavaScript bootcamp in 2020 and the Full Stack .NET bootcamp at Salt in 2022. 
    I’m BackEnd and FrontEnd (truly Full Stack!) and my main-focus lies in creative development, product    development, dataviz and acquiring better coding skills every day. 
    </h6>
 </section>
)}

export default About;