import Contact from "../components/MainPage/Contact";
import Footer from "../components/MainPage/Footer";
import AboutMe from "../components/MainPage/Fourth";
import Second from "../components/MainPage/Second";
import Skills from "../components/MainPage/Third";
import Top from "../components/MainPage/Top";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <main className=" font-poppins z-[99999]">
      <div className="w-[80%] mx-auto">
        <Navbar />
        <Top />
        <Second />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Main;
