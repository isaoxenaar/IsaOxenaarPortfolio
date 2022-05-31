import React from "react";
import "../css/Portfolio.css";
import * as data from "../Data/Projects";
//import Project from "../Types/Project";
import Card  from "./Card";

const Portfolio = () => {
    //const [projects, setProjects] = useState<Project[]>(data.default.projects);
 return <>
     <h2 className="Portfolio--title">2020 ~ now</h2>
    <section className="Portfolio--main">
     {data.default.projects.map(pr => {
         return <Card proj={pr}/>
     })}
     </section>
 </>
}

export default Portfolio;