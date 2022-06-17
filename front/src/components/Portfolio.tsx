import React, {UIEvent} from "react";
import "../css/Portfolio.css";
import * as data from "../Data/Projects";
//import Project from "../Types/Project";
import Card  from "./Card";

const Portfolio = () => {
    const scrollHandler = (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
        console.log("scrolled");
      };
    //const [projects, setProjects] = useState<Project[]>(data.default.projects);
 return <>
     <h2 className="Portfolio--title">2020 ~ now</h2>
    <div className="Portfolio--main" onScroll={scrollHandler}>
     {data.default.projects.map(pr => {
         return <Card proj={pr}/>
     })}
     </div>
 </>
}

export default Portfolio;