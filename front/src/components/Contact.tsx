import React from "react";
import "../css/Contact.css";

const Contact = () => {
    const salt = "< Salt />"
 return(<section className="Contact--main">
    <article>
    <text className="Contact--intro">For more information : 
      <ul>
         <li>go to --&gt; <a className="Contact--salt" href="https://salt.dev/">{salt}</a> </li>
         <li>contact them directly at salt@dev.se</li>
         <li>get in touch with me personally <text className="Contact--personal">isa.oxenaar@appliedtechnology.se</text></li>
      </ul>
   </text>
   </article>
    <section className="Contact--links">
      <a className="Contact--linkIn" href="https://www.linkedin.com/in/isa-oxenaar/"><img className="Contact--imgIn" src="https://www.shareicon.net/data/256x256/2015/08/04/79809_gray_512x512.png" alt=""/></a>
      <a className="Contact--linkGit" href="https://github.com/isaoxenaar"><img className="Contact--imgGit" src="https://daeb.co.uk/assets/images/github.png" alt=""/></a>
    </section>
 </section>)
}
export default Contact;
