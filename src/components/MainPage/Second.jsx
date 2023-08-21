import Bookstore from "../../assets/Bookstore.png";
import Appointment from "../../assets/book1.png";
import Covid19 from "../../assets/Covid19.png";
import Pomodoro from "../../assets/Pomodoro2.png";
import TVSeries from "../../assets/TVSeries.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn.js";
import Button from "../Button";
import { RiLiveLine } from "react-icons/ri";
import { VscSourceControl } from "react-icons/vsc";

const Card = ({ image, title, description, url, source }) => {
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(true);
  }

  function handleHoverLeave() {
    setHovered(false);
  }
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className={`relative card-container border-2 flex-wrap cursor-pointer overflow-hidden p-5 border-[#002d80] bg-[#00143a] h-[24rem] w-[20rem] hover:scale-[1.008] transition-all ease-in-out`}
    >
      <img className="w-full" src={image} alt="" />

      <div>
        <h3 className="text-xl text-left text-[#59caff] my-4 mb-2">{title}</h3>
        <p className="text-left w-[70%] text-[#8b9cbb] text-sm">{description}</p>
      </div>
      <div className={`gap-2 absolute left-0 right-0 mx-2 bottom-6 mt-3 w-full transition-all flex opacity-0 ${hovered && "opacity-[1]"}`}>
        <Button url={url} Icon={RiLiveLine} text="SEE LIVE" className="bg-orange-700 hover:bg-orange-900 bottom-3 w-full" />
        <Button url={source} Icon={VscSourceControl} text="SEE SOURCE" className="bg-orange-800 bottom-3 w-full" />
      </div>
    </div>
  );
};

const Second = () => {
  useEffect(() => {
    FadeIn(".second");
  }, []);
  return (
    <section className="second opacity-0 mx-auto relative lg:left-10 mb-10 font-poppins mt-52 text-center ">
      <h2 className="text-2xl mb-20">Highlights of Successful Projects</h2>
      <div className="flex flex-wrap gap-5 mx-auto justify-start">
        <Card
          image={Appointment}
          title="Book An Appointment"
          url={"https://book-an-appointment-frontend.onrender.com/"}
          source={"https://github.com/dheerajsachdeva/Book-An-Appointment-Backend"}
          description="Make reservation for vehicles, create the cars and be ensured that your listing is secured."
        />
        <Card
          image={Covid19}
          url={"https://covid19-reports.netlify.app/"}
          source={"https://github.com/calebchris000/COVID-19-Reports"}
          title="COVID 19 Reports"
          description="Get the latest statistics on the COVID 19 cases Worldwide."
        />
        <Card
          image={Pomodoro}
          source={"https://github.com/calebchris000/Pomodoro-Timer"}
          title="Pomodoro Timer"
          description="Track your valuable time with the Pomodoro Timer. Set custom time that fits your schedule."
          url={"https://pomodoro-mobile.netlify.app/"}
        />
        <Card
          image={Bookstore}
          url={"https://bookstore-redefined.vercel.app/"}
          source={"https://github.com/calebchris000/Bookstore-Redefined"}
          title="BookStore Redefined"
          description="Create a book collection and share them online to your friends and family."
        />

        <Card
          image={TVSeries}
          source={"https://github.com/calebchris000/Capstone-TV-Series"}
          title="TV Series Watch"
          description="Review, Like and comment on your favourite movies."
          url={"https://calebchris000.github.io/Capstone-TV-Series/dist/"}
        />
      </div>
    </section>
  );
};

export default Second;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};
