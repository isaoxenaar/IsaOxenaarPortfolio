import React, {FC} from "react";
import "../css/Tools.css";
//import * as data from "../Data/Tools";

interface IProps {
    tool:any
}

const Tool:FC<IProps> = ({tool}) => {
 return <section className={tool.name}>
     <h3 className="ToolCard--name" style={{color:tool.color, fontSize: tool.logo}}>{tool.name}</h3>
 </section>
}

export default Tool;