import React, {FC} from "react";
import "../css/Card.css";
import Project from "../Types/Project";
import images from "../Images/Images";

interface IProps {
    proj:Project;
}

const Card:FC<IProps> = ({proj}) => {

 return <section className="Card--main">
     <h3 className="Card--text">{proj.title}</h3>
     <img className="Card--img" src={images[proj.image]} width="600px" height="350px"/>
     <h4>made with love &:  </h4>
     <ul className="Card--tools">{proj.toollist.map(tool => <li>{tool}</li>)}</ul>
     <section className="Card--links">
        <a className="Card--github" href={proj.github}>see code</a>
        <a className="Card--netlify" href={proj.netlify}>see app</a>
     </section>
 </section>
}

export default Card;