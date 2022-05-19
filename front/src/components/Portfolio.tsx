import React, {useState} from "react";
import "../css/Portfolio.css";
import * as data from "../Data/Projects";
import Project from "../Types/Project";

const Portfolio = () => {
    const [projects, setProjects] = useState<Project>(data);
 return <section className="Portfolio--main">
     <h2 className="Portfolio--title">Browse these projects below. </h2>
     {data.default.projects.map(pr:any => {
         return 
     })}
 </section>
}

export default Portfolio;