const Footer = () => {
  return (
    <section className="mx-auto w-[80%] py-5 flex flex-col justify-between items-center font-poppins mt-52 tracking-wide leading-relaxed">
      <button onClick={() => window.open("https://dribbble.com/Kawsarvy", "_blank")}>
        Credit: Design Inspired by <span className="hover:border-b-2 ">Kawsar on Dribbble</span>{" "}
      </button>
      <p>© 2023. All rights reserved.</p>
    </section>
  );
};

export default Footer;
