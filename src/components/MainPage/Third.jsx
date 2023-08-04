import PropTypes from "prop-types";
import { useEffect } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn";

export const Icon = ({ className, containerClasses, onClick }) => (
  <div className={`${containerClasses || ""} border-[4px] border-gray-700 transition-all hover:bg-gray-700 rounded-full w-40 h-40 flex justify-center items-center`} onClick={onClick}>
    <i className={`${className} block scale-[3]`}></i>
  </div>
);

const Skills = () => {

  useEffect(() => {FadeIn('.skills')}, [])

  return (
    <section className="skills mx-auto mb-10 w-[100%] font-poppins mt-52 text-center ">
      <h2 className="text-2xl mb-20">Featured Skills</h2>

      <div className="flex flex-wrap mx-auto w-[60%] gap-10 justify-center">
        <Icon className="devicon-html5-plain colored" />
        <Icon className="devicon-css3-plain colored" />
        <Icon className="devicon-javascript-plain colored" />
        <Icon className="devicon-typescript-plain colored" />
        <Icon className="devicon-bootstrap-plain colored" />
        <Icon className="devicon-tailwindcss-plain colored" />
        <Icon className="devicon-redux-original colored" />
        <Icon className="devicon-ruby-plain colored" />
        <Icon className="devicon-rails-plain colored" />
        <Icon className="devicon-python-plain colored" />
      </div>
    </section>
  );
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  containerClasses: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Skills;
