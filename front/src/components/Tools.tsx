import React from "react";
import "../css/Tools.css";
import * as data from "../Data/Tools";
import ToolCard from "./ToolCard";

const Tools = () => {
 return <section className="Tools--main">
     <h2 className="Tools--title">Tools I have worked with</h2>
     {data.default.languages.map(tl => <ToolCard tool={tl}/>)}
 </section>
}

export default Tools;