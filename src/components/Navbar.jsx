import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { BiMenuAltLeft } from "react-icons/bi";
import PropTypes  from "prop-types";
import "./MainPage/custom.css";

const NavbarLite = ({ className }) => {
  return (
    <>
      <nav className={`${className} z-[100] bg-[#000a1d] mx-auto`}>
        <h3>
          <a href="mailto:calebchris000@gmail.com">calebchris000@gmail.com</a>
        </h3>
        <ul className="flex list-none gap-3">
          <li>
            <a href="https://www.linkedin.com/in/calebchris000/">LinkedIn</a>{" "}
          </li>
          <li>
            <a href="https://github.com/calebchris000/">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/calebchris000">Twitter</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <BiMenuAltLeft className="fixed w-10 h-10 top-3 z-[200] left-3 lg:hidden" onClick={() => setMenuToggle(!menuToggle)} />
      {
        <NavbarLite
          className={`fixed navLite flex flex-col gap-2 items-center justify-center left-0 right-0 top-0 transition-all overflow-hidden lg:hidden ${
            menuToggle ? "h-[6rem] " : "h-0"
          }`}
        />
      }
      <nav className="navigation fixed border-b-2 bg-[#000a1d] z-50 top-0 left-0 right-0 h-fit flex flex-wrap py-5 justify-between items-center border-gray-700 w-[80%] mx-auto">
        <div className="flex gap-5 items-center">
          <CiMail className={"border rounded-full text-white border-white  w-10 h-10 p-3 hover:animate-ping"} />
          <h3>
            <a href="mailto:calebchris000@gmail.com">calebchris000@gmail.com</a>
          </h3>
        </div>

        <ul className="flex list-none gap-3">
          <li>
            <a href="https://www.linkedin.com/in/calebchris000/">LinkedIn</a>{" "}
          </li>
          <li>
            <a href="https://github.com/calebchris000/">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/calebchris000">Twitter</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

NavbarLite.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navbar;
