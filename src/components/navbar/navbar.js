import React from "react";
import Link from "../link/link";

class Navbar extends React.Component {
  constructor() {
  super();
    this.state = {
      navelements: [
        { data: "#home", content: "Home" },
        { data: "#news", content: "News" },
        { data: "#contact", content: "Contact" },
        { data: "#about", content: "About" },
      ],
    };
  }
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {this.state.navelements.map((item) => (
                <Link data={item.data} content={item.content} />
              ))} 
            </ul>
          </div>
        </nav>  
      </>
    );
  }
}
export default Navbar;