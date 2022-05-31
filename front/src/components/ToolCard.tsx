import React, {FC} from "react";
import "../css/Tools.css";
//import * as data from "../Data/Tools";

interface IProps {
    tool:any
}

const Tool:FC<IProps> = ({tool}) => {
 return <section className="ToolCard--main">
     <h3 className="ToolCard--name">{tool.name}</h3>
     <img alt="" className="ToolCard--img" width="200px" src={tool.logo} />
 </section>
}

export default Tool;