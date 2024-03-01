import React from "react";
//link
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div
          className="
        flex
        justify-between
        items-center"
        >
         
          {/* Button*/}
          <button className="btn btn-sm">
            <Link to="contact" activeClass="active" smooth={true} spy={true}>
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
