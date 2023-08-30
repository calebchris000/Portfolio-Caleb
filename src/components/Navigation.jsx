import { Link } from "react-router-dom";
const Navigation = () => {
  function underline(e) {
    document.querySelectorAll(".nav-item").forEach((elem) => {
      elem.style.textDecoration = "none";
    });

    e.target.style.textDecoration = "underline";
  }
  return (
    <nav className="flex justify-between">
      <h1 className=" text-3xl font-semibold">Caleb</h1>

      <ul className="flex gap-10">
        <li onClick={underline} className="nav-item cursor-pointer select-none">
          <Link to={"/"}>Introduction</Link>
        </li>
        <li onClick={underline} className="nav-item cursor-pointer select-none">
          About Me
        </li>
        <li onClick={underline} className="nav-item cursor-pointer select-none">
          Projects
        </li>
        <li onClick={underline} className="nav-item cursor-pointer select-none">
          Contact Me
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
