import React from "react";
import "../css/Contact.css";

const Contact = () => {
    const salt = "< Salt />"
 return(<section className="Contact--main">
    <article>
    <text className="Contact--intro">For inquiries Contact <a className="Contact--salt" href="https://salt.dev/">{salt}</a>directly <h2>salt@dev.se</h2> or get in touch with me personally <h2>isa.oxenaar@appliedtechnology.se</h2> </text>
    </article>
    <section className="Contact--links">
    {/* <a>linkedin</a>
    <a>github</a> */}
    </section>
 </section>)
}
export default Contact;
