import Contact from "../components/MainPage/Contact";
import Middle from "../components/MainPage/Middle";
import Top from "../components/MainPage/Top";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <main className=" font-poppins z-[99999]">
      <Navbar />
      <Top />
      <Middle />
      <Contact />
    </main>
  );
};

export default Main;
