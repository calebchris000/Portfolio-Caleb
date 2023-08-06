import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn";
import ProgressBar from "@ramonak/react-progress-bar";
const Proficiency = ({ level, className, hovered }) => {
  return (
    <div className={`proficiency absolute w-32 opacity-0 transition-all ${className}  h-5 ${hovered ? "opacity-[1] bottom-[1.8rem]" : "opacity-0 bottom-0"}`}>
      <ProgressBar
        completed={level}
        className={`text-white mx-auto p-0 text-center lg:w-[80%] border w-[40%] border-[#00143a]`}
        barContainerClassName="bg-[#fff] bg-[#59caff] text-white"
        bgColor="#002d80"
        labelSize="14px"
        labelColor="#fff"
      />
    </div>
  );
};
export const Icon = ({ className, containerClasses, onClick, id, level, label }) => {
  const [hovered, setHovered] = useState(false);
  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        containerClasses || ""
      } third-icon relative border-[3px] rounded-[50%] border-[#002d80] bg-[#00143a] transition-all hover:bg-[#051638] w-40 h-40 flex justify-center items-center ${
        hovered ? "rounded-[0%]" : "rounded-[50%]"
      }`}
      onClick={onClick}
    >
      <i id={id} className={`${className} third-devicon text-5xl transition-all flex flex-col ${hovered ? "text-3xl hidden lg:translate-y-[-30px]" : "text-4xl block lg:translate-y-[0]"} `}>
        <p
          className={` text-sm font-poppins absolute  bottom-8 left-0 right-0 text-center opacity-0 translate-y-[2.6rem] font-semibold hidden lg:block ${
            hovered ? " relative text-sm opacity-[1]" : "text-md opacity-0"
          }`}
        >
          {label}
        </p>
      </i>
      <Proficiency hovered={hovered} title={"Proficiency"} level={level} />
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    FadeIn(".skills");
  }, []);

  return (
    <section className="skills mx-auto mb-10 font-poppins mt-52 text-center ">
      <h2 className="text-2xl mb-20">Featured Skills</h2>

      <div className="third-icon-holders flex flex-wrap mx-auto lg:w-[80%] gap-10 justify-center">
        <Icon id={"html"} className="devicon-html5-plain colored" level={90} label={"HTML"} />
        <Icon id={"css"} className="devicon-css3-plain colored" level={90} label={"CSS"} />
        <Icon id={"js"} className="devicon-javascript-plain colored" level={90} label={"JAVASCRIPT"} />
        <Icon id={"ts"} className="devicon-typescript-plain colored" level={80} label={"TYPESCRIPT"} />
        <Icon id={"bootstrap"} className="devicon-bootstrap-plain colored" level={80} label={"BOOTSTRAP"} />
        <Icon id={"tailwind"} className="devicon-tailwindcss-plain colored" level={80} label={"TAILWINDCSS"} />
        <Icon id={"redux"} className="devicon-redux-original colored" level={70} label={"REDUX JS"} />
        <Icon id={"ruby"} className="devicon-ruby-plain colored" level={60} label={"RUBY"} />
        <Icon id={"rails"} className="devicon-rails-plain colored" level={70} label={"RAILS"} />
        <Icon id={"python"} className="devicon-python-plain colored" level={60} label={"PYTHON"} />
      </div>
    </section>
  );
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  containerClasses: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Proficiency.propTypes = {
  level: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Skills;
