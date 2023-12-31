import Bookstore from "../../assets/Bookstore.png";
import Appointment from "../../assets/book1.png";
import Covid19 from "../../assets/Covid19.png";
import Pomodoro from "../../assets/Pomodoro2.png";
import TVSeries from "../../assets/TVSeries.png";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn.js";

const Card = ({ image, title, description, url }) => {
  function handleClick() {
    window.open(url, '_break')
  }
  return (
    <div className="border-2 cursor-pointer overflow-hidden p-5 border-[#002d80] bg-[#00143a] h-[24rem] w-[20rem] hover:scale-105 transition-all ease-in-out" onClick={handleClick}>
      <img className="w-full" src={image} alt="" />

      <div>
        <h3 className="text-xl text-left text-[#59caff] my-20 mb-2">{title}</h3>
        <p className="text-left w-[70%] text-[#8b9cbb] text-sm">{description}</p>
      </div>
    </div>
  );
};

const Second = () => {
  useEffect(() => {
    FadeIn(".second");
  }, []);
  return (
    <section className="second opacity-0 mx-auto mb-10 font-poppins mt-52 text-center ">
      <h2 className="text-2xl mb-20">Highlights of Successful Projects</h2>
      <div className="flex flex-wrap gap-5 mx-auto justify-center">
        <Card
          image={Appointment}
          title="Book An Appointment"
          url={"https://book-an-appointment-frontend.onrender.com/"}
          description="Make reservation for vehicles, create the cars and be ensured that your listing is secured."
        />
        <Card
          image={Covid19}
          url={"https://covid19-reports.netlify.app/"}
          title="COVID 19 Reports"
          description="Get the latest statistics on the COVID 19 cases Worldwide."
        />
        <Card
          image={Pomodoro}
          title="Pomodoro Timer"
          description="Track your valuable time with the Pomodoro Timer. Set custom time that fits your schedule."
          url={"https://pomodoro-mobile.netlify.app/"}
        />
        <Card
          image={Bookstore}
          url={"https://bookstore-redefined.vercel.app/"}
          title="BookStore Redefined"
          description="Create a book collection and share them online to your friends and family."
        />

        <Card
          image={TVSeries}
          title="TV Series Watch"
          description="Track your valuable time with the Pomodoro Timer. Set custom time that fits your schedule."
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
};
