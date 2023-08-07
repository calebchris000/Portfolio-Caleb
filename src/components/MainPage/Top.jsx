import Profile from "../../assets/112436618.jpeg";
import Waving from "../../assets/waving.svg";
import { HiExternalLink } from "react-icons/hi";
import "./custom.css";

const ContactIcons = () => {
  return (
    <div className="flex justify-center gap-4 ">
      <div
        className="bg-[#303030] cursor-pointer rounded-full flex justify-center items-center h-12 w-12"
        onClick={() => (window.location.href = "https://github.com/calebchris000")}
      >
        <i className="devicon-github-original text-2xl rounded-full"></i>
      </div>
      <div
        className="bg-[#0076B2] cursor-pointer rounded-full flex justify-center items-center h-12 w-12"
        onClick={() => (window.location.href = "https://linkedin.com/in/calebchris000")}
      >
        <i className="devicon-linkedin-plain text-2xl rounded-full"></i>
      </div>
      <div
        className="bg-[#1DA1F2] rounded-full cursor-pointer flex justify-center items-center h-12 w-12"
        onClick={() => (window.location.href = "https://twitter.com/calebchris000")}
      >
        <i className="devicon-twitter-original text-xl rounded-full"></i>
      </div>
    </div>
  );
};

const Top = () => {
  const handleButtonClick = () => {
    const sectionToScroll = document.getElementById("contact");
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mx-auto font-poppins relative mt-52 ">
      <div className="top-holder flex flex-col justify-center  mx-auto text-center gap-10">
        <img className="w-48 rounded-full mx-auto" src={Profile} alt="" />

        <div className="flex gap-2 items-center justify-center">
          <h3 className="top-greeting anim text-3xl">Hi, I&apos;m Caleb</h3>
          <img className="w-10 h-10 top-anim" src={Waving} alt="" />
        </div>
        <h1 className="clip-text top-description text-7xl tracking-normal leading-tight">Build Enterprise Products, brands and experiences.</h1>
        <ContactIcons />
        <div className="flex flex-wrap justify-center gap-5">
          <button
            className="top-lets-start border border-[#002d80] font-bold w-fit hover:bg-[#0a52da] transition-all hover:scale-[1.06] bg-[#00143a] block p-6 px-24"
            onClick={handleButtonClick}
          >
            LET&apos;S START
          </button>

            <button
              className="top-see-resume font-bold flex items-center justify-center gap-3 transition-all w-fit hover:bg-[#fff] hover:text-[#00143a] hover:scale-[1.06] bg-[#0a52da] p-6 px-24"
              onClick={() => (window.open("https://drive.google.com/file/d/1VSrnM-yxjjYW5XGfvAALc6iPp_ilKkkS/view?usp=sharing", '_blank'))}
            >
              SEE MY RESUME <HiExternalLink className="w-5 h-5" />
            </button> 
        </div>
      </div>
    </section>
  );
};

export default Top;
