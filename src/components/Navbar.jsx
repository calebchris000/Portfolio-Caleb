import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import './MainPage/custom.css'
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      const nav = document.querySelector(".navigation");
      if (currentPosition < prevScrollPos) {
        nav.classList.add('nav-fixed')
        nav.classList.remove('nav-static')
        console.log("Scrolling UP!!");
      } else if (currentPosition > prevScrollPos) {
        nav.classList.add('nav-static')
        nav.classList.remove('nav-fixed')
      }
      setPrevScrollPos(currentPosition);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className="navigation fixed border-b-2 bg-[#000a1d] z-50 top-0 left-0 right-0 h-fit flex py-5 justify-between items-center border-gray-700 w-[80%] mx-auto">
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
  );
};

export default Navbar;
